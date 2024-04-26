import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Todos' },
    { name: 'og:title', content: 'OurSpace: Todos' },
  ];
};

const Todos = () => {
  return (
    <div>
      <h1>Todos</h1>
    </div>
  );
};

export default Todos;
