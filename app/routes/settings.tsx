import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Settings' },
    { name: 'og:title', content: 'OurSpace: Settings' },
  ];
};

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
    </div>
  );
};

export default Settings;
