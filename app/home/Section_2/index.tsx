import styles from './index.module.css'
import classnames from "classnames";
import { Carousel, Button } from 'antd'

function App() {
  return (
    <section className={styles.wrapper}>
      <div className={classnames(styles.container, 'g-jc-sb-ai-c container-auto')}>
        <div className="g-fg-1 g-mw-0 g-w-100per">
          <Carousel autoplay>
            <div className={styles['carousel-slide']}>
              <h3>
                <img className={styles['carousel-slide-img']} src="http://www.drift-wheel.com:8081/img/work_room1.jpg" alt="" />
              </h3>
            </div>
            <div className={styles['carousel-slide']}>
              <h3><img className={styles['carousel-slide-img']} src="http://www.drift-wheel.com:8081/img/work_room2.jpg" alt="" /></h3>
            </div>
            <div className={styles['carousel-slide']}>
              <h3><img className={styles['carousel-slide-img']} src="http://www.drift-wheel.com:8081/img/work_room1.jpg" alt="" /></h3>
            </div>
            <div className={styles['carousel-slide']}>
              <h3><img className={styles['carousel-slide-img']} src="http://www.drift-wheel.com:8081/img/work_room2.jpg" alt="" /></h3>
            </div>
          </Carousel>
        </div>
        <dl className='g-c-b g-d-f g-fd-c'>
          <dt className='g-fw-b g-fs-0'>Custom Aftermarket Alloy<br />Wheels for Your Business</dt>
          <dd className='g-m-b-20'>
            DRIFTWHEEL has over 3000 wheel molds in the factory, any wheels you want to custom, we can always manufacture for you. We have strong R&D team to help you from the wheels design to final wheels production.
          </dd>
          <dd className='g-m-b-20'>DRIFTWHEEL has been focusing on the wheel industry for almost 20 years. We leverage this unrivalled competence and our founder’s experience to predict the trends of the market and constantly stay ahead of our competitors. Still, we know that the best way to generate new knowledge is through consistent, audacious Research & Development: that’s the reason why DRIFTWHEEL every year heavily invests in developing new products, processes and services while improving those that already exist.</dd>
          <dd>Our seasoned team stays committed to optimize every stage of the R&D cycle, from ideation and theorizing, followed by research and exploration and then into design and development. Always keeping one goal in mind: to help our partners and clients generate new sales, maximizing profit and minimizing costs, consistently leading the way into the technological future of the alloy wheels industry, delivering without compromise our promises of innovative excellence.</dd>
          <dd className={styles.button}>
            <Button size="large" type="primary" href="/inquiry">Send Your Requirements</Button>
          </dd>
        </dl>
      </div>
    </section>
  )
}

export default App