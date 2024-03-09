import styles from './index.module.css'
import classnames from "classnames";

function Page() {
  return (
    <>
      <img src="/images/contact-banner.png" className='g-w-100per' />
      <section className='g-bc-w g-p-t-50 g-p-b-50'>
        <div className='container-auto'>
          <p className={classnames(styles.title)}>Products (4)</p>
          <ul>
            <li>
              <img src="//img.hisupplier.com/var/userImages/2020-08/15/100336451_240.jpg" alt="" srcset="" />
              <p>18 19 20 INCH BMW M2 COMPETITION WHEEL RIM BOLT PATTERN 5X120 5X112</p>
            </li>
            <li></li>
          </ul>

          <div className='g-p-t-50'>

            <div>
              <p className={classnames(styles.title)}>Contact Us</p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Page