import type { MetaFunction } from '@remix-run/node';
import { useWebSocket } from './useWebSocket';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {

  const { messages, sendMessage } = useWebSocket();

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {JSON.stringify(message)}
          </li>
        ))}
      </ul>
      <form 
        noValidate 
        onSubmit={(event) => {
          event.preventDefault();
          const message = ((event.target as HTMLFormElement)[0] as HTMLInputElement).value;
          sendMessage(JSON.stringify({ message, roomType: 'dm', participants: ['edward', 'edward'] }));
        }}
      >
        <input name="message" />
      </form>
    </div>
  );
}
