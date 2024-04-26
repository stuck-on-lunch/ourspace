import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Room Name' },
    { name: 'og:title', content: 'OurSpace: Chat' },
  ];
};

const Chat = () => {
  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
};

export default Chat;
