import { Carousel } from 'antd'
import styles from './index.module.css'

function Banner() {
  return (
    <Carousel autoplay>
      <div>
        <h3 className={styles.content}>
          <dl className={styles.title}>
            <dt>One Stop Alloy<br />Wheels Supplier</dt>
            <dd>20 years alloy wheels experience,<br />good reputation in global market</dd>
          </dl>
          <img className="g-h-100per" src="http://img.hisupplier.com/var/userImages/2012-05/16/134110677_s.gif" alt="ss" />
        </h3>
      </div>
      <div>
        <h3 className={styles.content}>
          <img className="g-h-100per" src="http://img.hisupplier.com/var/userImages/2012-05/16/134110677_s.gif" alt="ss" />
        </h3>
      </div>
    </Carousel>
  )

}

export default Banner