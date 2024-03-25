import { Carousel } from 'antd'
import styles from './index.module.css'

function Banner() {
  return (
    <Carousel autoplay={false}>
      <div>
        <h3 className={styles.container}>
          <dl className={styles.title}>
            <dt>One Stop Alloy<br />Wheels Supplier</dt>
            <dd>20 years alloy wheels experience,<br />good reputation in global market</dd>
          </dl>
          <img className='g-w-100per g-h-100per g-of-cover' src="/images/banner.png" alt="ss" />
        </h3>
      </div>
      <div>
        <h3 className={styles.container}>
          <img className='g-w-100per g-h-100per g-of-cover' src="/images/banner.png" alt="ss" />
        </h3>
      </div>
    </Carousel>
  )

}

export default Banner