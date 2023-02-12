'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment, HTMLAttributeAnchorTarget } from 'react'

type NAV_LIST_ITEM = {
  title: string
  list: {
    label: string
    href: string
    target?: HTMLAttributeAnchorTarget
  }[]
}
const navList: NAV_LIST_ITEM[] = [
  {
    title: 'UI Components',
    list: [
      {
        label: 'react',
        href: '/not-found-item',
      },
      {
        label: 'vue',
        href: '/not-found-item',
      },
      {
        label: 'svelte',
        href: '/not-found-item',
      },
    ],
  },
  {
    title: 'Chrome Extensions',
    list: [
      {
        label: 'utaku',
        href: '/utaku',
      },
      {
        label: 'youtube-controller',
        href: '/youtube-controller',
      },
      {
        label: 'pip html5',
        href: '/not-found-item',
      },
    ],
  },
  {
    title: 'Others in Github',
    list: [
      {
        label: '@keisokoo',
        href: 'https://github.com/keisokoo',
        target: '_blank',
      },
    ],
  },
]

export function Nav() {
  const pathname = usePathname()
  return (
    <div className="nav">
      <div className="home">
        <Link href="/">HOME</Link>
      </div>
      {navList.map((navItem) => {
        return (
          <Fragment key={navItem.title}>
            <div className="group-nav">
              <div className="group-title">{navItem.title}</div>
              {navItem.list.length > 0 && (
                <div className="group-list">
                  {navItem.list.map((childNavItem) => {
                    return (
                      <Link
                        key={childNavItem.label}
                        href={childNavItem.href}
                        target={childNavItem.target}
                        className={classNames({
                          active:
                            pathname === childNavItem.href &&
                            childNavItem.href !== '/not-found-item',
                        })}
                      >
                        {childNavItem.label}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}
