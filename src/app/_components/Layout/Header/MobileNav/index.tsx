'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {} from '@/app/_const'
import { Path } from '@/app/(posts)/_types'
import { Button } from '../../../Button'
import { NavLink } from '../../../NavLink'
import { useMobileNav } from './useMobileNav'

export const MobileNav = ({ paths }: { paths: Readonly<Path[]> }) => {
  const { isShow, onToggleNav } = useMobileNav()

  return (
    <div className="md:hidden">
      <Button aria-label="モバイルメニューを開く" onClick={onToggleNav} variant="outline" size="icon">
        <Bars3Icon />
      </Button>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full bg-white opacity-95 duration-300 ease-in-out ${
          isShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Button
          className="absolute right-4 top-1"
          aria-label="モバイルメニューを閉じる"
          onClick={onToggleNav}
          variant="outline"
          size="icon"
        >
          <XMarkIcon />
        </Button>
        <nav aria-label="メインメニュー" className="fixed mt-8 h-full">
          {paths.map((link) => (
            <ul key={link.title} className="px-12 py-4">
              <li>
                <NavLink size="lg" href={link.href} onClick={onToggleNav}>
                  {link.title}
                </NavLink>
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </div>
  )
}
