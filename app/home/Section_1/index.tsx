import styles from './index.module.css'
import classnames from "classnames";
import { Carousel, Button } from 'antd'

function App() {
  return (
    <section className={styles.wrapper}>
      <div className={classnames(styles.container, 'g-jc-sb-ai-c')}>
        <dl className='g-c-w g-d-f g-fd-c'>
          <dt className='g-fw-b g-fs-0'>Large Stock Alloy Wheel<br />Ready to Ship</dt>
          <dd>DRIFTWHEEL has over 30,000 pcs wheels in stock, most orders less than a container can be sent 3 to 7 days. We have most car models replica wheels, after market wheels and forged alloy wheels, you can request our stock list to choose your wheels by click below button</dd>
          {/* <dd className={styles.button}>
            <Button size="large" type="primary">Check Our Stock List</Button>
          </dd> */}
        </dl>
        <div className="g-fg-1 g-mw-0 g-w-100per">
          <Carousel autoplay>
            <div className={styles['carousel-slide']}>
              <h3>
                <img src="https://wheelshome.com/wp-content/uploads/2021/08/IMG_8919-scaled.jpg" alt="" />
              </h3>
            </div>
            <div className={styles['carousel-slide']}>
              <h3><img src="https://wheelshome.com/wp-content/uploads/2021/08/IMG_8919-scaled.jpg" alt="" /></h3>
            </div>
            <div className={styles['carousel-slide']}>
              <h3><img src="https://wheelshome.com/wp-content/uploads/2021/08/IMG_8919-scaled.jpg" alt="" /></h3>
            </div>
            <div className={styles['carousel-slide']}>
              <h3><img src="https://wheelshome.com/wp-content/uploads/2021/08/IMG_8919-scaled.jpg" alt="" /></h3>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default App