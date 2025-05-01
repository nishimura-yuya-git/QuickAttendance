import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
// import ScrollDownIndicator from '../ScrollDownIndicator';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      {/* <ScrollDownIndicator /> */}
      <Footer />
    </div>
  );
};

export default Layout; 