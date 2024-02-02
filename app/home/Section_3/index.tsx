import styles from './index.module.css'
import classnames from "classnames";
import { Carousel, Button } from 'antd'
import Link from 'next/link';

function App() {

  return (
    <section className={classnames(styles.wrapper, 'g-c-b g-ta-c')}>
      <h2 className='g-fw-b'>High End Alloy Wheels to Support Your Business</h2>
      <p>Wheelshome can always be your reliable partner in China, to rocket your business with quality alloy wheels ( 8 years warranty)</p>
      <div className={classnames(styles.product)}>
        <dl>
          <dt>
            <Link href="" className='g-d-b g-t-i'>
              <img src="https://wheelshome.com/wp-content/uploads/2022/02/1-Replica-Alloy-wheels.jpg" alt="" />
            </Link>
          </dt>
          <dd className={styles.title}>
            <Link href="" className='g-ta-l g-d-b'>Replica Alloy Wheels</Link>
          </dd>
          <dd className={styles.desc}>Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size</dd>
        </dl>
        <dl>
          <dt>
            <Link href="" className='g-d-b g-t-i'>
              <img src="https://wheelshome.com/wp-content/uploads/2023/05/Aftermarket-alloy-wheels.jpg" alt="" />
            </Link>
          </dt>
          <dd className={styles.title}>Replica Alloy Wheels</dd>
          <dd className={styles.desc}>Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size</dd>
        </dl>
        <dl>
          <dt>
            <Link href="" className='g-d-b g-t-i'>
              <img src="https://wheelshome.com/wp-content/uploads/2022/02/3-Off-Road-Alloy-Wheels.jpg" alt="" />
            </Link>
          </dt>
          <dd className={styles.title}>Replica Alloy Wheels</dd>
          <dd className={styles.desc}>Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size</dd>
        </dl>
        <dl>
          <dt>
            <Link href="" className='g-d-b g-t-i'>
              <img src="https://wheelshome.com/wp-content/uploads/2022/02/4-Forged-Alloy-wheels.jpg" alt="" />
            </Link>
          </dt>
          <dd className={styles.title}>Replica Alloy Wheels</dd>
          <dd className={styles.desc}>Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size</dd>
        </dl>
      </div>
    </section>
  )
}

export default App