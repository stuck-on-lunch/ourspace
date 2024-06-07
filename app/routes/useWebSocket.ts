import { useEffect, useRef, useState } from 'react';

export const useWebSocket = () => {
  const [readyState, setReadyState] = useState<number | undefined>();
  const [messages, setMessages] = useState<string[]>([]);

  const webSocketRef = useRef<WebSocket | null>(null);

  const persistMessageLocally = (message: string) => [
    setMessages((prev) => {
      return [...prev, message];
    }),
  ];

  const sendMessage = (message: string) => {
    if (readyState === 1) {
      webSocketRef.current?.send(message);
    } else {
      alert('not connected');
    } 
  };

  useEffect(() => {
    if (!webSocketRef.current) {
      webSocketRef.current = new WebSocket('ws://localhost:8080');
    }

    webSocketRef.current.onopen = () => {
      setReadyState(webSocketRef.current?.readyState);
    };

    webSocketRef.current.onmessage = ({ data }) => {
      persistMessageLocally(data);
    };
  }, []);

  return {
    // connected,
    messages,
    sendMessage,
  };
};
