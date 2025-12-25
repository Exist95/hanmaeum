'use client';

import Link from 'next/link';

import CopyLinkButton from '../common/CopyLinkButton';
import { ScrollToComment, ScrollTop } from '../common/TocButtons';
import { HeadingItem } from '@/config/types';
import { useHeadingsObserver } from '@/hook/useHeadingsObserver';
import { cn } from '@/lib/utils';

interface Props {
  toc: HeadingItem[];
}

const TableOfContent = ({ toc }: Props) => {
  const activeIdList = useHeadingsObserver('h2, h3');

  return (
    <aside className='not-prose absolute -top-[200px] left-full -mb-[100px] hidden h-[calc(100%+150px)] xl:block '>
      <div className='sticky bottom-0  top-[200px] z-10 ml-[5rem] mt-[200px] w-[200px]'>
        <div className='flex gap-2'>
          <ScrollTop />
          <ScrollToComment />
          <CopyLinkButton />
        </div>
      </div>
    </aside>
  );
};

export default TableOfContent;
