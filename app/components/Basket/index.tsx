"use client"
import styles from './index.module.css'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import { subscribe } from '../../../utils/events'
import basket from '../../../utils/basket'

function App() {
  const pathname = usePathname()
  const [len, setLen] = useState(0);
  const getBasketLen = () => {
    // fetch('/api/basket/getLen')
    //   .then(res => res.json()).then((res) => {
    //     setLen(res.data)
    //   })
    const len = basket.getLen()
    setLen(len)
  }
  useEffect(() => {
    basket.init()
    getBasketLen()
    // 订阅 更新购物车
    subscribe('updateBasket', getBasketLen)
  }, [])

  return pathname === '/inquiry-basket' ? null : (
    <Link href="/inquiry-basket" className={styles.wrapper}>
      {
        len > 0 &&
        <span id='basket_number' className={styles.number}>{len}</span>
      }
      <img src="/images/basket.png" alt="basket" className='g-w-100per' />
    </Link>
  )
}
export default App