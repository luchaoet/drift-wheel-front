import styles from './index.module.css'
import classnames from "classnames";

function App() {
  const data = {
    left: [
      { icon: 'https://wheelshome.com/wp-content/uploads/2021/06/whyusLogo.jpg', title: 'Easy Transport', desc: '20 minutes drive from our buffer warehouse to seaport Ningbo China' },
      { icon: 'https://wheelshome.com/wp-content/uploads/2021/06/whyusLogo.jpg', title: 'Certified Manufacture', desc: 'All wheels are from big scale manufacture which is certificated by ISO9001-2000, ISO/TS16949, VIA, JWL and TUV, ect' },
      { icon: 'https://wheelshome.com/wp-content/uploads/2021/06/whyusLogo.jpg', title: 'Full Range Stock', desc: 'More than 50,000 pieces both in replica wheel and after-market wheel, we can ship stock wheels in short time' },
    ],
    right: [
      { icon: 'https://wheelshome.com/wp-content/uploads/2021/06/whyusLogo.jpg', title: 'Easy Transport', desc: '20 minutes drive from our buffer warehouse to seaport Ningbo China' },
      { icon: 'https://wheelshome.com/wp-content/uploads/2021/06/whyusLogo.jpg', title: 'Certified Manufacture', desc: 'All wheels are from big scale manufacture which is certificated by ISO9001-2000, ISO/TS16949, VIA, JWL and TUV, ect' },
      { icon: 'https://wheelshome.com/wp-content/uploads/2021/06/whyusLogo.jpg', title: 'Full Range Stock', desc: 'More than 50,000 pieces both in replica wheel and after-market wheel, we can ship stock wheels in short time' },
    ]
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className='g-ta-c'>Our Advantages</h2>
        <p className='g-ta-c'>Why Drift Wheel can be your best choice in China</p>
        <div className='g-jc-sb-ai-c'>
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
            <img src="https://wheelshome.com/wp-content/uploads/2021/06/whyusLogo.jpg" alt="" />
          </div>
          <div className={styles.right}>
            <ul>
              {
                data.right.map((item, index) => (
                  <li key={index} className="g-ai-c g-ta-r">
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