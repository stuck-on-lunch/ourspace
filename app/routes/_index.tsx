import type { MetaFunction } from '@remix-run/node';
import { useEffect, useRef, useState } from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {

  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  const webSocketRef = useRef<WebSocket | null>(null);

  const persistMessageLocally = (message: string) => [
    setMessages((prev) => {
      return [...prev, message];
    }),
  ];

  const sendMessage = (message: string) => {
    persistMessageLocally(message);
    if (connected) {
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
      setConnected((prev) => {
        return !prev;
      });
    };

    webSocketRef.current.onmessage = ({ data }) => {
      console.log({ data });
      persistMessageLocally(data);
    };

    // return webSocketRef.current
    //   ? webSocketRef.current.close
    //   : undefined;
  }, []);

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {message}
          </li>
        ))}
      </ul>
      <form 
        noValidate 
        onSubmit={(event) => {
          event.preventDefault();
          const message = (event.target as HTMLFormElement)[0].value;
          sendMessage(message);
        }}
      >
        <input name="message" />
      </form>
    </div>
  );
}
