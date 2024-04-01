import styles from './index.module.css'
import classnames from "classnames";
import Slick from './Slick';

async function App() {
  let data = []
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/service/product/page?queryKey=all&pageSize=50&pageIndex=1`, { cache: 'no-cache', })
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

  let sliderData = [[], [], []]
  data.forEach((item: any, index: number) => {
    sliderData[index % (sliderData.length)].push(item as never)
  });

  return (
    <section className={styles.wrapper}>
      <h2 className='g-fw-b g-ta-c'>High End Alloy Wheels to Support Your Business</h2>
      <p className='g-ta-c'>DRIFTWHEEL can always be your reliable partner in China, to rocket your business with quality alloy wheels ( 8 years warranty)</p>
      <Slick speed={1000} data={sliderData[0]} />
      <Slick speed={1500} data={sliderData[1]} />
      <Slick speed={1000} data={sliderData[2]} />
    </section>
  )
}

export default App