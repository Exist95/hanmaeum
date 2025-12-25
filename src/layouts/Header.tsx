'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LanguageSelector from '@/components/about/language-selector';
import ScrollProgressBar from '@/components/common/ScrollProgressBar';
import { useSpyElem } from '@/hook/useSpy';
import ThemeSwitch from '@/layouts/theme/Switch';
import { cn } from '@/lib/utils';

const navList = [
  { name: '홈', href: '/blog' },
  { name: '소개', href: '/about' },
];

const localePathList = ['/about'];

export const Header = () => {
  const { ref, marginTop } = useSpyElem(65);
  const pathname = usePathname();
  const isLocalePath = localePathList.some((path) => pathname.startsWith(path));

  return (
    <nav
      style={{ marginTop }}
      ref={ref}
      className='fixed z-40 flex w-full flex-col items-center justify-center border-b bg-background shadow-sm print:hidden'
    >
      <div className='mt-1 flex h-[40px] w-full max-w-[1200px] items-center justify-between px-4 max-sm:pb-1 sm:h-[64px]'>
        <div className='flex items-center font-medium'>
          {navList.map((navItem) => (
            <Link
              href={navItem.href}
              key={navItem.name}
              className={cn(
                'rounded-full px-4 py-1 text-center text-sm transition-colors hover:text-primary',
                pathname?.startsWith(navItem.href)
                  ? 'bg-muted font-medium text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {navItem.name}
            </Link>
          ))}
        </div>

        {isLocalePath && <LanguageSelector className='hidden sm:flex' />}

        <div className='flex gap-3'>
          <ThemeSwitch />
        </div>
      </div>
      <ScrollProgressBar />
    </nav>
  );
};
