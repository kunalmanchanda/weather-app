import { PropsWithChildren } from 'react';
import { Header } from './header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='bg-gradient-to-br from-background to-muted'>
      <Header />
      <main className='min-h-screen mx-auto container px-4 py-8'>
        {children}
      </main>
      <footer className='border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60'>
        <div className='container mx-auto px-4 text-center text-gray-400'>
          <p>Made with ReactJS & Tailwind © 2025 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
