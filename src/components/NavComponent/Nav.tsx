'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Fragment, HTMLAttributeAnchorTarget, useMemo } from 'react'

import styles from './nav.module.scss'
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
        href: '/ui-components/react-page',
      },
      {
        label: 'vue',
        href: '/ui-components/vue-page',
      },
      {
        label: 'svelte',
        href: '/ui-components/svelte-page',
      },
    ],
  },
  {
    title: 'Chrome Extensions',
    list: [
      {
        label: 'utaku',
        href: '/chrome-extensions/utaku',
      },
      {
        label: 'youtube-controller',
        href: '/chrome-extensions/youtube-controller',
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
  const router = useRouter()
  const navGroup = useMemo(() => {
    if (pathname && pathname !== '/') {
      const findItem = navList.find((navGroup) =>
        navGroup.list.some((item) => item.href === pathname)
      )
      if (findItem) {
        const subListItem = findItem.list.find((item) => item.href === pathname)
        return { ...findItem, item: subListItem }
      } else {
        return null
      }
    } else {
      return null
    }
  }, [pathname])
  return (
    <div className={styles.nav}>
      {pathname === '/' ? (
        <div className={styles.home}>
          <Link href="/">HOME</Link>
        </div>
      ) : (
        <div className={styles['page-nav']}>
          <div className={styles.crumbs}>
            <Link href="/">HOME</Link>
            <div className={styles.divider}></div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                router.refresh()
              }}
            >
              {navGroup?.title}
            </button>
          </div>
          <div>
            {pathname && navGroup?.item?.label && (
              <button
                className={styles['sub-title']}
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  router.refresh()
                }}
              >
                {navGroup.item.label}
              </button>
            )}
          </div>
        </div>
      )}
      {navList.map((navItem) => {
        return (
          <Fragment key={navItem.title}>
            <div className={styles['group-nav']}>
              <div className={styles['group-title']}>{navItem.title}</div>
              {navItem.list.length > 0 && (
                <div className={styles['group-list']}>
                  {navItem.list.map((childNavItem) => {
                    return (
                      <Link
                        key={childNavItem.label}
                        href={childNavItem.href}
                        target={childNavItem.target}
                        className={classNames({
                          [styles.active]:
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
