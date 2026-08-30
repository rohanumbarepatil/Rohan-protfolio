import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { GoogleGenAI } from '@google/genai'

/*
|--------------------------------------------------------------------------
| Environment
|--------------------------------------------------------------------------
*/

dotenv.config({
  path: path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    '.env'
  ),
  override: true,
})

/*
|--------------------------------------------------------------------------
| Paths
|--------------------------------------------------------------------------
*/

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PROJECT_ROOT = path.resolve(__dirname, '..')
const KNOWLEDGE_DIR = path.join(PROJECT_ROOT, 'ai', 'knowledge')

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const PORT = Number(process.env.PORT || 8787)

const GEMINI_API_KEY = process.env.GEMINI_API_KEY

const MODEL_NAME = 'gemini-2.5-flash'

/*
|--------------------------------------------------------------------------
| Validation
|--------------------------------------------------------------------------
*/

if (!GEMINI_API_KEY) {
  console.error('')
  console.error('ERROR: GEMINI_API_KEY is missing.')
  console.error(
    `Expected .env file at: ${path.join(__dirname, '.env')}`
  )
  console.error('')
  process.exit(1)
}

/*
|--------------------------------------------------------------------------
| Gemini Client
|--------------------------------------------------------------------------
*/

const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
})

/*
|--------------------------------------------------------------------------
| Express App
|--------------------------------------------------------------------------
*/

const app = express()

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://rohan-protfolio-sepia.vercel.app'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
)

app.use(express.json({ limit: '1mb' }))

/*
|--------------------------------------------------------------------------
| Knowledge Base
|--------------------------------------------------------------------------
*/

function loadKnowledgeBase() {
  if (!fs.existsSync(KNOWLEDGE_DIR)) {
    console.error(
      `Knowledge directory not found: ${KNOWLEDGE_DIR}`
    )

    return {
      text: '',
      files: [],
    }
  }

  const files = fs
    .readdirSync(KNOWLEDGE_DIR)
    .filter((file) => file.toLowerCase().endsWith('.md'))
    .sort()

  const knowledgeParts = []

  for (const file of files) {
    const filePath = path.join(KNOWLEDGE_DIR, file)

    try {
      const content = fs.readFileSync(filePath, 'utf8').trim()

      if (!content) {
        console.warn(`Skipping empty knowledge file: ${file}`)
        continue
      }

      knowledgeParts.push(
        `===== ${file} =====\n${content}`
      )
    } catch (error) {
      console.error(
        `Failed to read knowledge file ${file}:`,
        error
      )
    }
  }

  const text = knowledgeParts.join('\n\n')

  return {
    text,
    files,
  }
}

const knowledge = loadKnowledgeBase()

console.log(
  `Loaded ${knowledge.files.length} knowledge files.`
)

console.log(
  `Knowledge size: ${knowledge.text.length} characters.`
)

/*
|--------------------------------------------------------------------------
| System Instructions
|--------------------------------------------------------------------------
*/

const SYSTEM_INSTRUCTIONS = `
You are "Rohan Ask Me AI", the AI assistant for Rohan's personal
developer portfolio.

Your job is to answer questions about Rohan using ONLY the portfolio
knowledge base provided to you.

KNOWLEDGE RULES:
- Use the supplied knowledge base as the primary and authoritative source.
- Do not invent facts.
- Do not assume information that is not documented.
- Do not make up projects, skills, achievements, dates, companies,
  education details, roles, technologies, or experiences.
- If the knowledge base does not contain enough information to answer,
  clearly say that the information is not available in the portfolio.
- Prefer factual accuracy over making the answer sound complete.

ANSWER STYLE:
- Be natural, professional, and conversational.
- Answer directly.
- Keep answers reasonably concise.
- Use complete sentences.
- Use normal paragraph breaks when multiple points need explanation.
- When appropriate, explain the answer in one or two clear paragraphs.

IMPORTANT RESPONSE FORMAT:
- Return PLAIN TEXT ONLY.
- Do NOT use Markdown.
- Do NOT use **bold** formatting.
- Do NOT use *italic* formatting.
- Do NOT use headings beginning with #.
- Do NOT use ### headings.
- Do NOT use backticks.
- Do NOT use Markdown links.
- Do NOT use Markdown bullet points.
- Do NOT use asterisks anywhere.
- Do NOT wrap words in special formatting characters.
- Write clean normal text suitable for displaying directly inside a chat bubble.
- If several ideas need to be separated, use normal paragraphs instead of Markdown formatting.

IDENTITY:
- You are an AI assistant representing Rohan's portfolio.
- Do not claim to be Rohan.
- Speak about Rohan in third person unless the question naturally requires
  another form.

If the user asks something unrelated to Rohan's portfolio, politely explain
that you are designed to answer questions about Rohan and his portfolio.
`

/*
|--------------------------------------------------------------------------
| Utility: Clean AI Response
|--------------------------------------------------------------------------
*/

function cleanAIResponse(text) {
  if (!text) {
    return ''
  }

  return String(text)
    // Remove bold / italic Markdown
    .replace(/\*\*\*(.*?)\*\*\*/gs, '$1')
    .replace(/\*\*(.*?)\*\*/gs, '$1')
    .replace(/\*(.*?)\*/gs, '$1')

    // Remove headings
    .replace(/^#{1,6}\s*/gm, '')

    // Remove inline code
    .replace(/`([^`]*)`/g, '$1')
    .replace(/`/g, '')

    // Remove Markdown bullets
    .replace(/^\s*[-*•]\s+/gm, '')

    // Remove numbered Markdown list formatting
    .replace(/^\s*\d+\.\s+/gm, '')

    // Remove Markdown links but preserve text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

    // Remove remaining asterisks
    .replace(/\*/g, '')

    // Normalize excessive blank lines
    .replace(/\n{3,}/g, '\n\n')

    // Normalize excessive spaces
    .replace(/[ \t]{2,}/g, ' ')

    .trim()
}

/*
|--------------------------------------------------------------------------
| Health Route
|--------------------------------------------------------------------------
*/

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    service: 'rohan-portfolio-ai',
    provider: 'google-gemini',
    model: MODEL_NAME,
    knowledgeLoaded: Boolean(knowledge.text),
    knowledgeFiles: knowledge.files.length,
  })
})

/*
|--------------------------------------------------------------------------
| Chat Route
|--------------------------------------------------------------------------
*/

app.post('/api/chat', async (req, res) => {
  try {
    const userMessage =
      typeof req.body?.message === 'string'
        ? req.body.message.trim()
        : ''

    /*
    |--------------------------------------------------------------------------
    | Validate message
    |--------------------------------------------------------------------------
    */

    if (!userMessage) {
      return res.status(400).json({
        error: 'Message is required.',
      })
    }

    if (userMessage.length > 2000) {
      return res.status(400).json({
        error: 'Message is too long. Please keep it under 2000 characters.',
      })
    }

    /*
    |--------------------------------------------------------------------------
    | Validate knowledge
    |--------------------------------------------------------------------------
    */

    if (!knowledge.text) {
      return res.status(500).json({
        error: 'Knowledge base is unavailable.',
      })
    }

    /*
    |--------------------------------------------------------------------------
    | Prompt
    |--------------------------------------------------------------------------
    */

    const prompt = `
PORTFOLIO KNOWLEDGE BASE:

${knowledge.text}

END OF PORTFOLIO KNOWLEDGE BASE.

USER QUESTION:

${userMessage}
`

    /*
    |--------------------------------------------------------------------------
    | Generate Gemini Response
    |--------------------------------------------------------------------------
    */

    let response

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        response = await ai.models.generateContent({
          model: MODEL_NAME,
          contents: prompt,
          config: {
            systemInstruction: SYSTEM_INSTRUCTIONS,
            temperature: 0.2,
          },
        })

        break
      } catch (error) {
        console.log(
          `Gemini attempt ${attempt} failed:`,
          error?.status ||
            error?.code ||
            error?.message
        )

        if (attempt === 3) {
          throw error
        }

        await new Promise((resolve) =>
          setTimeout(resolve, attempt * 2000)
        )
      }
    }

    /*
    |--------------------------------------------------------------------------
    | Extract Response
    |--------------------------------------------------------------------------
    */

    const rawAnswer = response?.text || ''

    const answer = cleanAIResponse(rawAnswer)

    if (!answer) {
      return res.status(500).json({
        error: 'AI returned an empty response.',
      })
    }

    /*
    |--------------------------------------------------------------------------
    | Success
    |--------------------------------------------------------------------------
    */

    return res.json({
      answer,
    })
  } catch (error) {
    console.error('ASK ME AI ERROR:', error)

    const status =
      Number(error?.status) >= 400 &&
      Number(error?.status) < 600
        ? Number(error.status)
        : 500

    return res.status(status).json({
      error: 'Unable to generate an AI response.',
      details:
        error?.message ||
        'Unknown error',
    })
  }
})

/*
|--------------------------------------------------------------------------
| 404
|--------------------------------------------------------------------------
*/

app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found.',
  })
})

/*
|--------------------------------------------------------------------------
| Global Error Handler
|--------------------------------------------------------------------------
*/

app.use((error, req, res, next) => {
  console.error('SERVER ERROR:', error)

  res.status(500).json({
    error: 'Internal server error.',
  })
})

/*
|--------------------------------------------------------------------------
| Start Server
|--------------------------------------------------------------------------
*/

app.listen(PORT, () => {
  console.log('')
  console.log('====================================')
  console.log('      ROHAN ASK ME AI BACKEND')
  console.log('====================================')
  console.log(`Server: http://localhost:${PORT}`)
  console.log(
    `Health: http://localhost:${PORT}/api/health`
  )
  console.log('Provider: Google Gemini')
  console.log(`Model: ${MODEL_NAME}`)
  console.log(
    `Knowledge base: ${
      knowledge.text ? 'LOADED' : 'NOT LOADED'
    }`
  )
  console.log('====================================')
  console.log('')
})