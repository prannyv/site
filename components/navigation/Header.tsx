import Link from 'next/link';

import DesktopMenu from '@/components/navigation/DesktopMenu';
import ThemeToggle from '@/components/navigation/ThemeToggle';
import MobileMenuToggle from '@/components/navigation/MobileMenuToggle';
import MobileMenu from '@/components/navigation/MobileMenu';

export default function Header() {
  return (
    <header className='fixed bottom-30 z-50 w-full flex justify-center'>
      <div className='transition-300 flex items-center justify-center rounded-full bg-green2 px-6 py-3 backdrop-blur'>
        <div className='flex items-center gap-4'>
          <DesktopMenu />
          {/* <ThemeToggle /> */}
          <MobileMenuToggle />
        </div>
      </div>
      <MobileMenu />
    </header>
  );
}
