"use client"
import styles from './index.module.css'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import { subscribe } from '../../../utils/events'

function App() {
  const pathname = usePathname()
  const [basket, setBasket] = useState([]);
  const getBasket = () => {
    fetch('/api/basket/get')
      .then(res => res.json()).then((res) => {
        setBasket(res.data || [])
      })
  }
  useEffect(() => {
    getBasket()
    // 订阅 更新购物车
    subscribe('updateBasket', getBasket)
  }, [])

  return pathname === '/inquiry-basket' ? null : (
    <Link href="/inquiry-basket" className={styles.wrapper}>
      <span id='basket_number' className={styles.number}>{basket.length}</span>
      <img src="/images/basket.png" alt="basket" className='g-w-100per' />
    </Link>
  )
}
export default App