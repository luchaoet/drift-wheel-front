import styles from './index.module.css'
import classnames from "classnames";
import Slick from './Slick';
import { useState } from 'react';

function App() {
  const data = [
    { img: '//img.hisupplier.com/var/userImages/2020-05/16/152313467_240.jpg', title: '1Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: '//img.hisupplier.com/var/userImages/2020-08/15/100336451_240.jpg', title: '2Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: '//img.hisupplier.com/var/userImages/2020-05/18/103938347_240.jpg', title: '3Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: 'https://wheelshome.com/wp-content/uploads/2022/02/4-Forged-Alloy-wheels.jpg', title: '4Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: '//img.hisupplier.com/var/userImages/2020-05/15/144537779_240.jpg', title: '5Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: '//img.hisupplier.com/var/userImages/2020-05/14/104358638_240.jpg', title: '6Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: 'https://wheelshome.com/wp-content/uploads/2022/02/3-Off-Road-Alloy-Wheels.jpg', title: '7Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: '//img.hisupplier.com/var/userImages/2020-05/14/164550678_240.jpg', title: '8Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: '//img.hisupplier.com/var/userImages/2020-05/14/104358924_240.jpg', title: '9Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: '//img.hisupplier.com/var/userImages/2020-05/14/104358638_240.jpg', title: '10Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: '//img.hisupplier.com/var/userImages/2019-06/20/144302739_240.jpg', title: '11Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: '//img.hisupplier.com/var/userImages/2019-06/20/141634259_240.jpg', title: '12Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: 'https://wheelshome.com/wp-content/uploads/2022/02/1-Replica-Alloy-wheels.jpg', title: '13Replica Alloy Wheels Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: '//img.hisupplier.com/var/userImages/2019-06/05/131014183_240.jpg', title: '14Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: '//img.hisupplier.com/var/userImages/2019-06/04/130457802_240.jpg', title: '15Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: '//img.hisupplier.com/var/userImages/2019-06/04/114401729_240.jpg', title: '16Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
    { img: 'https://wheelshome.com/wp-content/uploads/2023/05/Aftermarket-alloy-wheels.jpg', title: '17Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size' },
  ]
  return (
    <section className={styles.wrapper}>
      <h2 className='g-fw-b g-ta-c'>High End Alloy Wheels to Support Your Business</h2>
      <p className='g-ta-c'>Wheelshome can always be your reliable partner in China, to rocket your business with quality alloy wheels ( 8 years warranty)</p>
      <Slick speed={1000} data={data.slice(0, 6)} />
      <Slick speed={1500} data={data.slice(6, 12)} />
      <Slick speed={1000} data={data.slice(12)} />
    </section>
  )
}

export default App