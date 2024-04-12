import styles from './index.module.css'
import classnames from "classnames";
import { Carousel, Button } from 'antd'
import Link from 'next/link';

async function App() {

  let data = []
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/service/product/page?queryKey=all&pageSize=4&pageIndex=1`, { cache: 'no-cache', })
      .then(res => res.json())
    data = (res.data || []).map(({ imgList, title, productId }: any) => {
      const img = process.env.NEXT_PUBLIC_IMG + imgList?.bigPic?.[0];
      return {
        img,
        title,
        productId
      }
    })
  } catch (error) {
    // console.log('error', error)
  }

  if (data.length > 0 && data.length < 4) {
    data = [...data, ...data, ...data, ...data]
    data = data.slice(0, 4)
  } else {
    data = data.slice(0, 4)
  }

  return (
    <section className={classnames(styles.wrapper, 'g-c-b g-ta-c')}>
      <h2 className='g-fw-b'>High End Alloy Wheels to Support Your Business</h2>
      <p>DRIFTWHEEL can always be your reliable partner in China, to rocket your business with quality alloy wheels ( 8 years warranty)</p>
      <div className={classnames(styles.product)}>
        {
          data.map((item: any, index: number) => (
            <dl key={item.productId + index}>
              <dt>
                <Link href="" className='g-d-b g-t-i'>
                  <img src="https://wheelshome.com/wp-content/uploads/2022/02/1-Replica-Alloy-wheels.jpg" alt="" />
                </Link>
              </dt>
              <dd className={styles.title}>
                <Link href="" className='g-ta-l g-d-b'>{item.title}</Link>
              </dd>
              {/* <dd className={styles.desc}>Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size</dd> */}
            </dl>
          ))
        }
      </div>
    </section>
  )
}

export default App