import styles from './index.module.css'
import classnames from "classnames";

function App() {
  const data = {
    left: [
      { icon: '/images/section-02_3.png', title: 'Easy Transport', desc: '20 minutes drive from our buffer warehouse to seaport Ningbo China' },
      { icon: '/images/section-02_4.png', title: 'Certified Manufacture', desc: 'All wheels are from big scale manufacture which is certificated by ISO9001-2000, ISO/TS16949, VIA, JWL and TUV, ect' },
      { icon: '/images/section-02_5.png', title: 'Full Range Stock', desc: 'More than 50,000 pieces both in replica wheel and after-market wheel, we can ship stock wheels in short time' },
    ],
    right: [
      { icon: '/images/section-02_6.png', title: 'Easy Transport', desc: '20 minutes drive from our buffer warehouse to seaport Ningbo China' },
      { icon: '/images/section-02_7.png', title: 'Certified Manufacture', desc: 'All wheels are from big scale manufacture which is certificated by ISO9001-2000, ISO/TS16949, VIA, JWL and TUV, ect' },
      { icon: '/images/section-02_8.png', title: 'Full Range Stock', desc: 'More than 50,000 pieces both in replica wheel and after-market wheel, we can ship stock wheels in short time' },
    ]
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className='g-ta-c'>Our Advantages</h2>
        <p className='g-ta-c'>Why Drift Wheel can be your best choice in China</p>
        <div className={classnames(styles.advantages, 'g-jc-sb-ai-c')}>
          <div className={styles.left}>
            <ul>
              {
                data.left.map((item, index) => (
                  <li key={index} className="g-ai-c g-ta-l">
                    <img src={item.icon} alt="" />
                    <dl>
                      <dt>{item.title}</dt>
                      <dd>{item.desc}</dd>
                    </dl>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={classnames(styles.middle, 'g-fs-0')}>
            <img src="/images/section-02_1.png" alt="" />
          </div>
          <div className={styles.right}>
            <ul>
              {
                data.right.map((item, index) => (
                  <li key={index} className="g-ai-c g-ta-r g-jc-fe">
                    <dl>
                      <dt>{item.title}</dt>
                      <dd>{item.desc}</dd>
                    </dl>
                    <img src={item.icon} alt="" />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App