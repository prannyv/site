import Link from 'next/link';

import DesktopMenu from '@/components/navigation/DesktopMenu';
import ThemeToggle from '@/components/navigation/ThemeToggle';
import MobileMenuToggle from '@/components/navigation/MobileMenuToggle';
import MobileMenu from '@/components/navigation/MobileMenu';

export default function Header() {
  return (
    <header className='fixed inset-x-96 justify-center bg-green2 bottom-30 z-50 flex flex-col px-50'
    
    >
      <div className='transition-300 flex items-center justify-center rounded-full bg-green2 px-50 py-3 backdrop-blur 3xs:px-3 3xs:py-4 xs:px-5 xl:-mx-6 xl:px-10'>
        
        <div className='flex items-center gap-6 3xs:gap-9 xl:gap-9'>
          <DesktopMenu />
          {/* <ThemeToggle /> */}
          <MobileMenuToggle />
        </div>
      </div>
      <MobileMenu />
    </header>
  );
}
