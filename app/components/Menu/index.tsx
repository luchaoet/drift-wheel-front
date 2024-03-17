'use client'
import styles from './index.module.css'
import classnames from "classnames";
import Link from 'next/link'
import { SearchOutlined } from '@ant-design/icons'
import MobileMenu from '../MobileMenu'
import ChildrenMenu from '../ChildrenMenu'
import { usePathname, useRouter } from 'next/navigation'

function Menu({ data }: any) {
  const router = useRouter();
  const handleMenuData = (d: any) => {
    for (const iterator of d) {
      iterator.href = '/category/' + iterator.categoryId
      if (iterator?.children?.length) {
        handleMenuData(iterator.children)
      }
    }
  }
  handleMenuData(data || [])
  const menu = [
    { href: '/', name: 'Home' },
    {
      href: '', name: 'Products', children: data
    },
    { href: '/about-drift-wheel', name: 'About Us' },
    { href: '/inquiry', name: 'Contact Us' },
    { href: '/blog', name: 'Blog' },
    { href: '/company-activities', name: 'Company Activities' },
    {
      href: '', name: 'More', children: [
        { href: '/doc/763733', name: 'Dragon Boat Festival' },
        { href: '/doc/758012', name: 'Labor Day on May 1' },
        { href: '/wheel-tech', name: 'Wheel Tech' },
      ]
    }
  ]

  const pathname = usePathname()

  function isActive({ href }: any) {
    return href === pathname
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    const value = (e.target as any).value;
    if (e.key === 'Enter' && value) {
      router.push(`/category/key${value}`)
    }
  }

  return (
    <section className={classnames(styles['height-90'], 'g-w-100per')}>
      <div className={classnames(styles.fixed, 'g-p-f g-w-100per g-ai-c g-zi-99')}>
        <div className={classnames(styles.content, 'g-jc-sb-ai-c g-h-100per')}>
          <img src="/images/section-04.png" alt="logo" />
          <ul className={classnames(styles.menu, 'g-h-100per')}>
            {
              menu.map((item, index) => (
                <li
                  key={index}
                  className={classnames('g-h-100per g-p-lr-14 g-c-p g-c-b g-fw-b g-ai-c g-fs-0', { [styles.active]: isActive(item) })}
                >
                  {
                    item.children?.length
                      ? <ChildrenMenu data={item} />
                      : <Link className={classnames('g-t-i g-h-100per g-ai-c')} href={item.href}>{item.name}</Link>
                  }
                </li>
              ))
            }
            <li className={classnames(styles.search, 'g-p-r')}>
              <input onKeyDown={(e: any) => handleKeyDown(e)} />
              <SearchOutlined style={{ fontSize: 16 }} className={styles.icon} />
            </li>
          </ul>
          <MobileMenu className={styles.mobileMenu} data={menu} />
        </div>
      </div>
    </section>
  )
}



export default Menu