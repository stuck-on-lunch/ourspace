import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Rooms' },
    { name: 'og:title', content: 'OurSpace: Rooms' },
  ];
};

const Rooms = () => {
  return (
    <div>
      <h1>Rooms</h1>
    </div>
  );
};

export default Rooms;
