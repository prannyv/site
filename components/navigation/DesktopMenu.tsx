import Link from 'next/link';

import { ROUTES } from '@/constants/routes';

export default function DesktopMenu() {
  const linkClasses =
    'transition-300 text-sm font-[450] text-black hover:text-purple5 dark:text-black dark:hover:text-beige 2xl:text-md';

  return (
    <nav className='hidden max-w-[600px] gap-4 xl:flex xl:gap-6 2xl:gap-8'>
      {ROUTES.map((route, i) =>
        route.text === 'Resume' ? (
          <a
            href={route.link}
            target='_blank'
            rel='noreferrer noopener'
            className={linkClasses}
            key={`route-${i}`}
          >
            {route.text}
          </a>
        ) : (
          <Link href={route.link} className={linkClasses} key={`route-${i}`}>
            {route.text}
          </Link>
        )
      )}
    </nav>
  );
}
