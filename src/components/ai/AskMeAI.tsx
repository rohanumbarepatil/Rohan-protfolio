import { useState } from 'react'
import type { FormEvent } from 'react'
import { Bot, Send, Sparkles, User, Loader2 } from 'lucide-react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const API_URL = 'http://localhost:8787'

const suggestedQuestions = [
  'Who is Rohan?',
  'What projects has Rohan built?',
  'What are Rohan’s technical skills?', 
  'Tell me about Rohan’s hackathons.',
]

export function AskMeAI() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const message = input.trim()

    if (!message || loading) {
      return
    }

    setMessages((current) => [
      ...current,
      {
        role: 'user',
        content: message,
      },
    ])

    setInput('')
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || 'Unable to generate response.')
      }

      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content:
            data?.answer ||
            'I could not generate an answer right now.',
        },
      ])
    } catch (error) {
      console.error('Ask Me AI error:', error)

      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content:
            'Sorry, I could not connect to the AI right now. Please try again.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  function useSuggestedQuestion(question: string) {
    setInput(question)
  }

  return (
    <section
      id="ask-me-ai"
      className="relative overflow-hidden py-24"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <Sparkles className="h-4 w-4" />
            Ask Me AI
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Talk to my portfolio.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/55">
            Ask questions about my projects, skills, education,
            hackathons, research, and experience.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl backdrop-blur-xl">
          <div className="min-h-[360px] space-y-5 p-6 md:p-8">
            {messages.length === 0 && (
              <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Bot className="h-8 w-8 text-white/80" />
                </div>

                <h3 className="text-xl font-medium text-white">
                  Ask anything about Rohan
                </h3>

                <p className="mt-2 max-w-md text-sm text-white/45">
                  The assistant answers using the portfolio knowledge
                  base.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => useSuggestedQuestion(question)}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/65 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex gap-3 ${
                  message.role === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Bot className="h-4 w-4 text-white/70" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === 'user'
                      ? 'bg-white text-black'
                      : 'border border-white/10 bg-white/5 text-white/75'
                  }`}
                >
                  {message.content}
                </div>

                {message.role === 'user' && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <User className="h-4 w-4 text-white/70" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Bot className="h-4 w-4 text-white/70" />
                </div>

                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/50">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-white/10 p-4 md:p-5">
            <form
              onSubmit={handleSubmit}
              className="flex gap-3"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Rohan..."
                disabled={loading}
                className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/25"
              />

              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}