'use client';

import { useEffect, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import * as S from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { GlobeIcon } from 'lucide-react';

export default function LanguageSelector({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isKo = pathname.endsWith('/ko');
  const isEn = pathname.endsWith('/en');

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onSelectChange = (value: string) => {
    if (value === 'ko') {
      router.push(pathname.replace(/\/en$/, '/ko'));
    } else {
      router.push(pathname.replace(/\/ko$/, '/en'));
    }
  };

  return (
    <S.Select onValueChange={onSelectChange} defaultValue={isEn ? 'en' : 'ko'}>
      <S.SelectTrigger className={cn('w-fit gap-2', className)}>
        <GlobeIcon className='size-3.5' />
        <S.SelectValue />
      </S.SelectTrigger>

    </S.Select>
  );
}
