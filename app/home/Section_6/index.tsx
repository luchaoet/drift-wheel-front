import styles from './index.module.css'
import classnames from "classnames";
import Slick from './Slick';
import { useState } from 'react';

function App() {
  const data = [
    { img: 'https://wheelshome.com/wp-content/uploads/2022/02/1-Replica-Alloy-wheels.jpg', title: '1Replica Alloy Wheels Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: 'https://wheelshome.com/wp-content/uploads/2022/02/1-Replica-Alloy-wheels.jpg', title: '2Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: 'https://wheelshome.com/wp-content/uploads/2022/02/1-Replica-Alloy-wheels.jpg', title: '3Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: 'https://wheelshome.com/wp-content/uploads/2022/02/1-Replica-Alloy-wheels.jpg', title: '4Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: 'https://wheelshome.com/wp-content/uploads/2022/02/1-Replica-Alloy-wheels.jpg', title: '5Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: 'https://wheelshome.com/wp-content/uploads/2022/02/1-Replica-Alloy-wheels.jpg', title: '6Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: 'https://wheelshome.com/wp-content/uploads/2022/02/1-Replica-Alloy-wheels.jpg', title: '7Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: 'https://wheelshome.com/wp-content/uploads/2022/02/1-Replica-Alloy-wheels.jpg', title: '8Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
  ]
  return (
    <section className={styles.wrapper}>
      <h2 className='g-fw-b g-ta-c'>High End Alloy Wheels to Support Your Business</h2>
      <p className='g-ta-c'>Wheelshome can always be your reliable partner in China, to rocket your business with quality alloy wheels ( 8 years warranty)</p>
      <Slick speed={1000} data={data} />
      <Slick speed={1500} data={data} />
      <Slick speed={1000} data={data} />
    </section>
  )
}

export default App