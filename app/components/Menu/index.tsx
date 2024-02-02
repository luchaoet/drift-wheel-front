"use client"

import styles from './index.module.css'
import classnames from "classnames";
import logo from '../../icon.png'
import Link from 'next/link'

function Menu(props: any) {
  console.log(22, props)
  return (
    <div className={classnames(styles['height-90'], 'g-w-100per')}>
      <div className={classnames(styles.fixed, 'g-p-f g-w-100per g-ai-c g-zi-99')}>
        <div className={classnames(styles.content, 'g-jc-sb-ai-c')}>
          <img src={logo.src} alt="logo" />
          <ul className='g-ai-c'>
            <li className={classnames('g-p-lr-14 g-c-p g-c-b g-fw-b', styles.active)}>
              <Link href="/">Home</Link>
            </li>
            <li className={classnames('g-p-lr-14 g-c-p g-c-b g-fw-b')}>Products</li>
            <li className={classnames('g-p-lr-14 g-c-p g-c-b g-fw-b')}>
              <Link href="/about-drift-wheel">About Us</Link>
            </li>
            <li className={classnames('g-p-lr-14 g-c-p g-c-b g-fw-b')}>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li className={classnames('g-p-lr-14 g-c-p g-c-b g-fw-b')}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={classnames('g-p-lr-14 g-c-p g-c-b g-fw-b')}>
              <Link href="company-activities">Company Activities</Link>
            </li>
            <li className={classnames('g-p-lr-14 g-c-p g-c-b g-fw-b')}>More</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu