'use client'
import styles from './index.module.css'
import classnames from "classnames";
import Link from 'next/link'
import { SearchOutlined } from '@ant-design/icons'
import MobileMenu from '../MobileMenu'
import ChildrenMenu from '../ChildrenMenu'
import { usePathname } from 'next/navigation'

function Menu(props: any) {
  const menu = [
    { href: '/', name: 'Home' },
    {
      href: '', name: 'Products', children: [
        { href: '', name: 'Wheel & Tire Accessories And Parts' },
        {
          href: '', name: 'Forged Wheels', children: [
            { href: '', name: 'MONOBLOCK FORGED' },
            { href: '', name: 'DEEP CONCAVE 3PC' },
          ]
        },
        {
          href: '', name: 'Light Alloy Wheels', children: [
            { href: '', name: 'Custom Car Wheels' },
            { href: '', name: 'OEM Wheel' },
          ]
        },
        {
          href: '', name: 'Replica Wheel', children: [
            { href: '', name: 'Hyundai Wheels Rims' },
            { href: '', name: 'Mercedes-Benz Wheels' },
            { href: '', name: 'Audi Rims Wheels' },
            { href: '', name: 'VW Rims Wheels' },
            { href: '', name: 'BMW Alloy Wheels' },
            { href: '', name: 'Porsche Alloy Wheels' },
            { href: '', name: 'Land Rover Wheels' },
            { href: '', name: 'Cadillac Chrome Wheels' },
            { href: '', name: 'Chevrolet Rally Wheels' },
            { href: '', name: 'Jaguar Alloy Wheels' },
          ]
        },
      ]
    },
    { href: '/about-drift-wheel', name: 'About Us' },
    { href: '/contact-us', name: 'Contact Us' },
    { href: '/blog', name: 'Blog' },
    { href: '/company-activities', name: 'Company Activities' },
    {
      href: '', name: 'More', children: [
        { href: '', name: 'Dragon Boat Festival' },
        { href: '', name: 'Labor Day on May 1' },
        { href: '', name: 'Wheel Tech' },
      ]
    },
  ]

  console.log(1, props.data)

  const pathname = usePathname()
  return (
    <div className={classnames(styles['height-90'], 'g-w-100per')}>
      <div className={classnames(styles.fixed, 'g-p-f g-w-100per g-ai-c g-zi-99')}>
        <div className={classnames(styles.content, 'g-jc-sb-ai-c g-h-100per')}>
          <img src="/images/section-04.png" alt="logo" />
          <ul className={classnames(styles.menu, 'g-h-100per')}>
            {
              menu.map((item, index) => (
                <li
                  key={index}
                  className={classnames('g-h-100per g-p-lr-14 g-c-p g-c-b g-fw-b g-ai-c g-fs-0', { [styles.active]: pathname === `${item.href}` })}
                >
                  {
                    item.children?.length
                      ? <ChildrenMenu data={item} />
                      : <Link className='g-t-i g-h-100per g-ai-c' href={item.href}>{item.name}</Link>
                  }
                </li>
              ))
            }
            <li className={classnames(styles.search, 'g-p-r')}>
              <input />
              <SearchOutlined style={{ fontSize: 16 }} className={styles.icon} />
            </li>
          </ul>
          <MobileMenu className={styles.mobileMenu} data={menu} />
        </div>
      </div>
    </div>
  )
}



export default Menu