import { useState, useRef, useEffect } from 'react'
import type { FormEvent } from 'react'
import { Send, Sparkles, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import chatbotImage from '../../assets/imgs/chat bot img.png'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const API_URL = import.meta.env.VITE_API_URL || 'https://rohan-protfolio.onrender.com'

const suggestedQuestions = [
  'Who is Rohan?',
  'Tell me about his projects',
  'What are his technical skills?',
  'What AI projects has he built?',
  'Tell me about his research',
]

const initialMessage: Message = {
  role: 'assistant',
  content: "Hi! I'm Rohan's AI assistant. Ask me anything about my projects, skills, education, hackathons, research, or experience."
}

export function AskMeAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([initialMessage])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen, loading])

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
      console.error('Talk to my portfolio error:', error)

      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content:
            "Sorry, I couldn't process that right now. Please try again.",
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto flex w-[calc(100vw-48px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-xl sm:w-[380px]"
            style={{ maxHeight: '80vh', height: '560px' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <img src={chatbotImage} alt="AI" className="h-6 w-6 object-contain" />
                Talk to my portfolio.
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5">
              <div className="flex flex-col gap-5">
                {messages.map((message, index) => (
                  <div key={`${message.role}-${index}`}>
                    <div
                      className={`flex gap-3 ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.role === 'assistant' && (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 mt-auto overflow-hidden">
                          <img src={chatbotImage} alt="AI" className="h-6 w-6 object-contain" />
                        </div>
                      )}

                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                          message.role === 'user'
                            ? 'bg-white text-black rounded-br-sm'
                            : 'border border-white/10 bg-white/5 text-white/80 rounded-bl-sm'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                    {/* Timestamp for first assistant message */}
                    {index === 0 && message.role === 'assistant' && (
                      <div className="mt-1 ml-11 text-xs text-white/30">Just now</div>
                    )}
                  </div>
                ))}
                
                {/* Suggested Questions */}
                {messages.length === 1 && (
                  <div className="mt-2 flex flex-wrap gap-2 pl-11">
                    {suggestedQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => useSuggestedQuestion(question)}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition hover:border-white/20 hover:bg-white/10 hover:text-white text-left"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                )}

                {loading && (
                  <div className="flex gap-3 justify-start">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 mt-auto overflow-hidden">
                      <img src={chatbotImage} alt="AI" className="h-6 w-6 object-contain" />
                    </div>
                    <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/50 h-[44px]">
                      <span className="flex gap-1">
                        <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0 }}>•</motion.span>
                        <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.2 }}>•</motion.span>
                        <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.4 }}>•</motion.span>
                      </span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-white/10 p-3 sm:p-4 bg-black/50">
              <form onSubmit={handleSubmit} className="flex items-end gap-2 relative">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Type your question..."
                  disabled={loading}
                  className="w-full rounded-xl border border-white/10 bg-white/5 pl-4 pr-12 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/25 transition-colors disabled:opacity-50"
                />

                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="absolute right-1.5 bottom-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="pointer-events-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/10 bg-black shadow-xl backdrop-blur-md transition-colors hover:bg-white/10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Talk to my portfolio."
      >
        {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" /> : <img src={chatbotImage} alt="Talk to my portfolio." className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />}
      </motion.button>
    </div>
  )
}