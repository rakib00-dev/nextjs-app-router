import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>nav</h1>
      <div>side bar</div>
      {children}
    </div>
  );
};

export default layout;
