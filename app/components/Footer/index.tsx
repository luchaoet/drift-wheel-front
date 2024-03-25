import styles from './index.module.css'
import classnames from "classnames";
import Link from 'next/link';

function App() {
  const profile = [
    { title: 'OEM Services Provide', content: 'YES' },
    { title: 'Payment Terms', content: 'T/T, L/C, WU' },
    { title: 'Business Type', content: 'Manufacturer, Trading Company' },
    { title: 'Quality Certificate', content: 'ISO9001, ISO14001, ISO/TS16949' },
    { title: 'Main Export Markets', content: 'North America, Western Europe' },
  ]

  const contactUs = [
    { title: 'Address', content: `Room 702,Yingsheng Mansion 456 Middle Tai'an Road ,Yinzhou District (South CBD), Ningbo, Zhejiang, China (Mainland)/315199 ` },
    { title: 'Telephone', content: '86-574-89257258' },
    { title: 'Fax', content: '86-574-89257258' },
    { title: 'Contact Person', content: 'Mr.Steven Dai' },
    { title: 'E-mail', content: 'sales@drift-wheel.com' },
    { title: 'Mobile', content: '186 6853 8030' },
  ]

  return (
    <section className={classnames(styles.wrapper)}>
      <div className={classnames(styles.container)}>
        <dl>
          <dt>
            <img src="/images/section-04.png" alt="" />
          </dt>
          <dd className={styles.desc}>Our Product/Service: audi alloy wheels,<br />mercedes alloy wheels, bmw alloy wheels</dd>
          <dd className={styles.more}>
            <Link href="/about-drift-wheel">Learn More &gt;</Link>
          </dd>
        </dl>
        <dl className={styles.info}>
          <dt>Company Profile</dt>
          {
            profile.map((item, index) => (
              <dd key={index}>
                <span className='g-fs-0'>{item.title}:</span>
                <i>{item.content}</i>
              </dd>
            ))
          }
        </dl>
        <dl className={styles.info}>
          <dt>Contact Us</dt>
          {
            contactUs.map((item, index) => (
              <dd key={index}>
                <span className='g-fs-0'>{item.title}:</span>
                <i>{item.content}</i>
              </dd>
            ))
          }
        </dl>
      </div>
    </section>
  )
}
export default App