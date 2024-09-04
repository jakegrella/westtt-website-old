'use client';

import { useState } from 'react';

type HorizontalOverflowContainerProps = {
  title?: string;
  items: React.ReactNode[];
  groupItemIdentifier: string;
};

// when screen is tall and skinny, items will appear as a stack
// when screen is wide, will appear as an unscrolling row
// when screen is short and narrow, will have buttons
// groupItemIdentifier is a className that differentiates different HOCs from one another
const HorizontalOverflowContainer = ({
  title,
  items,
  groupItemIdentifier,
}: HorizontalOverflowContainerProps) => {
  const [focusedItem, setFocusedItem] = useState<number | null>(0);

  const handleArrowClick = (direction: 'left' | 'right') => {
    const newIndex =
      direction === 'left'
        ? (focusedItem! - 1 + items.length) % items.length
        : (focusedItem! + 1) % items.length;

    setFocusedItem(newIndex);

    const groupItems = document.querySelectorAll(`.${groupItemIdentifier}`);
    groupItems[newIndex]?.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'end' });
  };

  return (
    <section className='flex flex-col w-full h-1/2 gap-2'>
      <div
        className={`flex ${title ? 'justify-between' : 'justify-end'} items-center gap-4 mt-4 md:mt-8`}
      >
        {title && <h2>{title}</h2>}
        <div className='flex justify-center items-center gap-2 tall:hidden'>
          <button
            onClick={() => handleArrowClick('left')}
            aria-label='Previous project'
            className='px-2 py-1 bg-indigo-5 rounded'
          >
            ←
          </button>
          <button
            onClick={() => handleArrowClick('right')}
            aria-label='Next project'
            className='px-2 py-1 bg-indigo-5 rounded'
          >
            →
          </button>
        </div>
      </div>
      <div className='w-full grow flex gap-2 md:gap-4 tall:flex-col tall:md:flex-row overflow-x-hidden tall:overflow-x-auto'>
        {items.map((item) => item)}
      </div>
    </section>
  );
};

export default HorizontalOverflowContainer;
