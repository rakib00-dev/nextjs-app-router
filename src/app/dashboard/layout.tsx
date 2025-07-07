import React from 'react';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const layout = (props: DashboardLayoutProps) => {
  return (
    <div>
      <nav className="bg-black text-white py-4 px-5  justify-between items-center">
        <h3 className="text-xl">Logo</h3>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
      </nav>
      <main>{props.children}</main>
    </div>
  );
};

export default layout;
