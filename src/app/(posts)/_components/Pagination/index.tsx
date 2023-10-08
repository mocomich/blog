'use client'

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { PerPage } from '@/app/(posts)/_const'
import { isCurrent } from '@/app/_libs/pagination'
import { PaginationLink } from './PaginationLink'

type Props = {
  totalCount: number
  current: number
}

export const Pagination = ({ totalCount, current }: Props) => {
  const pathname = usePathname()
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <nav aria-label="ページネーション">
      <ul className="flex justify-center gap-2">
        <li className={clsx('justify-self-start', current > 1 ? '' : 'hidden')}>
          <PaginationLink aria-label="前のページ" href={`${pathname}?page=${current - 1}`}>
            <ChevronLeftIcon className="w-5" />
          </PaginationLink>
        </li>
        {range(1, Math.ceil(totalCount / PerPage)).map((number, index) => (
          <li key={index}>
            <PaginationLink href={`${pathname}?page=${number}`} {...isCurrent(number === current)}>
              {number}
            </PaginationLink>
          </li>
        ))}
        <li className={clsx(current < Math.ceil(totalCount / PerPage) ? '' : 'hidden')}>
          <PaginationLink aria-label="次のページ" href={`${pathname}?page=${current + 1}`}>
            <ChevronRightIcon className="w-5" />
          </PaginationLink>
        </li>
      </ul>
    </nav>
  )
}
