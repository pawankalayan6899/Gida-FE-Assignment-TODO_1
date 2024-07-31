import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Checklist</h1>
    </header>
  );
};

const Body = () => {
  return (
    <div>
      <h1>Hello,</h1>
      <p>Get started by creating your first checklist.</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default App;
