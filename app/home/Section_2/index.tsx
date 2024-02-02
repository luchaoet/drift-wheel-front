import styles from './index.module.css'
import classnames from "classnames";
import { Carousel, Button } from 'antd'

function App() {
  return (
    <section className={styles.wrapper}>
      <div className={classnames(styles.container, 'g-jc-sb-ai-c')}>
        <div className="g-fg-1 g-mw-0">
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
        <dl className='g-c-b g-d-f g-fd-c'>
          <dt className='g-fw-b g-fs-0'>Custom Aftermarket Alloy<br />Wheels for Your Business</dt>
          <dd>
            WHEELSHOME has over 3000 wheel molds in the factory, any wheels you want to custom, we can always manufacture for you. We have strong R&D team to help you from the wheels design to final wheels production.
          </dd>
          <dd className={styles.button}>
            <Button size="large" type="primary">Check Our Stock List</Button>
          </dd>
        </dl>
      </div>
    </section>
  )
}

export default App