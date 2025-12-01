'use client';

import ChatInterface from './ChatInterface';
import { SAMPLE_CHAT_MESSAGES } from '@/lib/mockData';

const Chat = () => {
  return <ChatInterface initialMessages={SAMPLE_CHAT_MESSAGES} />;
};

export default Chat;

