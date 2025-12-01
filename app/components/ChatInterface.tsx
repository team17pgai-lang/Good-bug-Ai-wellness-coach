'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Mic, MoreHorizontal, Send } from 'lucide-react';
import type { ChatMessage } from '@/lib/types';
import { CHAT_SUGGESTIONS } from '@/lib/constants';
import { formatTime } from '@/lib/utils';

interface Props {
  initialMessages: ChatMessage[];
}

const ChatInterface = ({ initialMessages }: Props) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: 'smooth',
      });
    });
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      author: 'user',
      content: text.trim(),
      timestamp: formatTime(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setShowSuggestions(false);
    setIsTyping(true);
    scrollToBottom();

    setTimeout(() => {
      setIsTyping(false);
      const botReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        author: 'bot',
        content:
          'Hydration & stress show up in your logs. Want a breathing exercise or a recipe tweak?',
        timestamp: formatTime(),
        recommendation: {
          id: 'synbiotic-mix',
          name: 'Synbiotic Mix',
          price: '₹1,299',
          why: 'Balances microbiome in 4 weeks',
          rating: '4.8 · 320 reviews',
        },
      };
      setMessages((prev) => [...prev, botReply]);
      scrollToBottom();
    }, 1400);
  };

  const renderMessage = (message: ChatMessage) => {
    const isUser = message.author === 'user';
    return (
      <motion.div
        key={message.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
      >
        <div className="max-w-[85%]">
          <div
            className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
              isUser
                ? 'rounded-br-sm bg-gradient-to-r from-[#A29BFE] to-[#1DD1A1] text-white'
                : 'rounded-bl-sm bg-[color:var(--bg-teal)] text-primary'
            }`}
          >
            {!isUser && (
              <span className="mb-1 block text-xs font-semibold text-secondary">
                Wellness
              </span>
            )}
            <p>{message.content}</p>
            {message.recommendation && (
              <div className="mt-3 rounded-2xl border border-[color:var(--border-light)] bg-white/90 p-3 text-primary shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-16 w-16 rounded-xl bg-[color:var(--bg-teal)]" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">
                      {message.recommendation.name}
                    </p>
                    <p className="text-xs text-secondary">{message.recommendation.why}</p>
                    <p className="text-xs font-semibold text-[color:var(--status-excellent)]">
                      {message.recommendation.price} · {message.recommendation.rating}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 rounded-full border border-[color:var(--border-medium)] px-3 py-2 text-xs font-semibold">
                    Learn More
                  </button>
                  <button className="flex-1 rounded-full bg-[color:var(--status-excellent)] px-3 py-2 text-xs font-semibold text-white">
                    Try Now
                  </button>
                </div>
              </div>
            )}
          </div>
          <p
            className={`mt-1 text-[10px] ${
              isUser ? 'text-white/80 text-right' : 'text-tertiary'
            }`}
          >
            {message.timestamp}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <header className="primary-accent shadow-sm">
        <div className="flex items-center justify-between px-4 py-4 text-white">
          <button
            type="button"
            className="rounded-full border border-white/30 p-2 text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="text-center">
            <p className="text-sm font-semibold">Wellness</p>
            <p className="text-xs text-white/80">Always available for you</p>
          </div>
          <button
            type="button"
            className="rounded-full border border-white/30 p-2 text-white"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-6">
        {messages.map((message) => renderMessage(message))}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex justify-start"
            >
              <div className="rounded-2xl rounded-bl-sm bg-[color:var(--bg-teal)] px-4 py-3 text-sm shadow-sm">
                <div className="flex gap-1">
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      key={dot}
                      className="h-2 w-2 rounded-full bg-[#A29BFE]"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: dot * 0.1,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="sticky bottom-20 space-y-2 border-t border-[color:var(--border-light)] bg-white px-4 py-3">
        <div className="flex items-center gap-2 rounded-full border border-[color:var(--border-light)] bg-cream px-3 py-2 focus-within:border-[color:var(--status-neutral)]">
          <button type="button" className="text-[color:var(--status-neutral)]">
            <Mic className="h-5 w-5" />
          </button>
          <textarea
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              if (event.target.value) setShowSuggestions(false);
            }}
            placeholder="Tell me about your symptoms..."
            rows={1}
            className="max-h-24 flex-1 resize-none bg-transparent text-sm text-primary outline-none"
          />
          <button
            type="button"
            disabled={!input.trim()}
            onClick={() => handleSend(input)}
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--status-excellent)] text-white transition ${
              !input.trim() ? 'opacity-50' : 'hover:scale-105'
            }`}
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        {showSuggestions && (
          <div className="flex gap-2">
            {CHAT_SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => handleSend(suggestion)}
                className="rounded-full border border-[color:var(--border-light)] px-3 py-1.5 text-xs text-secondary"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;

