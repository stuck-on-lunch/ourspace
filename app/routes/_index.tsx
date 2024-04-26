import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'OurSpace' },
    { name: 'og:title', content: 'Ourspace' },
  ];
};

const Index = () => {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to OurSpace</h1>
    </div>
  );
};

export default Index;
