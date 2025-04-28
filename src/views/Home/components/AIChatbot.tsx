import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, ChevronDown, Minimize2 } from 'lucide-react'

type MessageType = {
    id: string
    content: string
    sender: 'user' | 'bot'
    timestamp: Date
}

const AIChatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<MessageType[]>([
        {
            id: '1',
            content: 'Hi there! How can I help you with our software today?',
            sender: 'bot',
            timestamp: new Date(),
        },
    ])
    const [isLoading, setIsLoading] = useState(false)

    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    useEffect(() => {
        if (isOpen && !isMinimized) {
            inputRef.current?.focus()
        }
    }, [isOpen, isMinimized])

    const toggleChat = () => {
        setIsOpen(!isOpen)
        setMessages([
            {
                id: '1',
                content:
                    'Hi there! How can I help you with our software today?',
                sender: 'bot',
                timestamp: new Date(),
            },
        ])
        if (isMinimized) setIsMinimized(false)
    }

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized)
    }

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()

        if (!message.trim()) return

        const userMessage: MessageType = {
            id: Date.now().toString(),
            content: message,
            sender: 'user',
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setMessage('')
        setIsLoading(true)

        // AI response after a short delay
        setTimeout(() => {
            const botResponses = [
                "That's a great question about our software!",
                'I understand your concern. Let me help you with that.',
                'Thanks for asking. Our software can definitely handle that task.',
                "I'd be happy to explain how that feature works.",
                'Let me check that for you. Our latest version includes that functionality.',
            ]

            const randomResponse =
                botResponses[Math.floor(Math.random() * botResponses.length)]

            const botMessage: MessageType = {
                id: Date.now().toString(),
                content: randomResponse,
                sender: 'bot',
                timestamp: new Date(),
            }

            setMessages((prev) => [...prev, botMessage])
            setIsLoading(false)
        }, 1000)
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Button */}
            {!isOpen && (
                <button
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all"
                    aria-label="Open Chat"
                    onClick={toggleChat}
                >
                    <MessageCircle size={24} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div
                    className={`mt-4 flex flex-col bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
                        isMinimized ? 'h-16 w-72' : 'h-96 w-72 md:w-80 lg:w-96'
                    }`}
                >
                    {/* Chat Header */}
                    <div className="bg-primary text-white p-3 flex justify-between items-center">
                        <h3 className="font-semibold text-white">
                            Software Support
                        </h3>
                        <div className="flex gap-2">
                            <button
                                className="hover:text-gray-200"
                                onClick={toggleMinimize}
                            >
                                {isMinimized ? (
                                    <ChevronDown size={18} />
                                ) : (
                                    <Minimize2 size={18} />
                                )}
                            </button>
                            <button
                                className="hover:text-gray-200"
                                onClick={toggleChat}
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {!isMinimized && (
                        <>
                            {/* Chat Messages */}
                            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`mb-4 max-w-3/4 ${
                                            msg.sender === 'user'
                                                ? 'ml-auto'
                                                : 'mr-auto'
                                        }`}
                                    >
                                        <div
                                            className={`p-3 rounded-lg ${
                                                msg.sender === 'user'
                                                    ? 'bg-primary text-white rounded-br-none'
                                                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                                            }`}
                                        >
                                            {msg.content}
                                        </div>
                                        <div
                                            className={`text-xs mt-1 text-gray-500 ${
                                                msg.sender === 'user'
                                                    ? 'text-right'
                                                    : 'text-left'
                                            }`}
                                        >
                                            {msg.timestamp.toLocaleTimeString(
                                                [],
                                                {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                },
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex items-center space-x-2 text-gray-500 mb-4">
                                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-75"></div>
                                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150"></div>
                                    </div>
                                )}
                                <div ref={messagesEndRef}></div>
                            </div>

                            {/* Chat Input */}
                            <form
                                className="border-t border-gray-200 p-2"
                                onSubmit={handleSendMessage}
                            >
                                <div className="flex items-center">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={message}
                                        placeholder="Type your question..."
                                        className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary "
                                        disabled={isLoading}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                    />
                                    <button
                                        type="submit"
                                        className="bg-primary text-white p-2 h-[38px] w-[38px] rounded-r-md hover:bg-primary-deep disabled:opacity-50"
                                        disabled={isLoading || !message.trim()}
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

export default AIChatbot
