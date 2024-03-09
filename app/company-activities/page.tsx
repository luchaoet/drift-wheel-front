import styles from './index.module.css'
import classnames from "classnames";
import BlogTitle from '@/app/components/Document/BlogTitle'
import Document from '@/app/components/Document'

function Page() {

  return (
    <>
      <BlogTitle title="Company Activities" />
      <Document id="765494" />
      {/* <section className={classnames('g-p-t-50 g-p-b-50 g-bc-f5f5f5')}>
        <div className='container-auto g-fs-16'>
          <h1 className='g-fw-b g-m-b-20'>One Day Trip to Nine Dragon Lake Scenery Zone</h1>
          <p className='g-c-c8351c g-m-b-10 g-lh-20'>2014-06-05 13:51:06</p>

          <p className='g-ta-c g-m-t-40 g-m-b-20'>
            <img className='g-d-ib' src="//img.hisupplier.com/var/userImages/2014-06/05/140346428_s.jpg" alt="" />
          </p>
          <p className='g-m-b-20 g-lh-26 g-c-b'>&nbsp;&nbsp;&nbsp; Last Friday (May 30th), we had a trip to Nine Dragon Lake Scenery Zone, which is located in Nine Dragon Lake Town in the northwest of Zhenhai District, Ningbo, Zhejiang. As one of the ten best new sceneries of Ningbo, Nine Dragon Lake Scenic Spot is surrounded by mountains on three sides with low hills as its main geographical feature. Nine Dragon Lake is made up of four lakes, namely, Peacock Lake, Phoenix Lake, Moon Lake and Swan Lake with an area of water up to 2 square kilometers. The whole scenery is superior in natural ecological environment with profound historical and cultural significance.</p>
          <h2 className='g-fw-b'>Nine Dragon Lake</h2>
          <p className='g-ta-c g-m-t-40 g-m-b-20'>
            <img className='g-d-ib' src="http://img.hisupplier.com/var/userImages/2014-06/05/134459878509.jpg" alt="" srcset="" />
          </p>
          <p className='g-ta-c g-m-t-40 g-m-b-20'>
            <img className='g-d-ib' src="http://img.hisupplier.com/var/userImages/2014-06/05/134507332997.jpg" alt="" />
          </p>
          <p className='g-ta-c g-m-t-40 g-m-b-20'>
            <img className='g-d-ib' src="http://img.hisupplier.com/var/userImages/2014-06/05/134507332997.jpg" alt="" />
          </p>
        </div>
      </section> */}
    </>
  )
}
export default Page