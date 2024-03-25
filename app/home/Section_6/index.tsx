import styles from './index.module.css'
import classnames from "classnames";
import Slick from './Slick';

async function App() {
  let data = []
  try {

    const res = await fetch(`/api/product/page?queryKey=all&queryValue=`)
      .then(res => res.json())
    data = res.data || []
  } catch (error) { }
  if (!data.length) {
    data = [
      { img: '//img.hisupplier.com/var/userImages/2020-05/16/152313467_240.jpg', title: '1Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size', productId: '1' },
      { img: '//img.hisupplier.com/var/userImages/2020-05/16/152313467_240.jpg', title: '1Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size', productId: '1' },
      { img: '//img.hisupplier.com/var/userImages/2020-05/16/152313467_240.jpg', title: '1Replica Alloy Wheels', desc: 'Over 30,000 wheels in stock, full range car models, you can choose directly based on brand or size', productId: '1' },
    ]
  }

  let sliderData = [[], [], []]
  data.forEach((item: any, index: number) => {
    sliderData[index % (sliderData.length)].push(item as never)
  });

  return (
    <section className={styles.wrapper}>
      <h2 className='g-fw-b g-ta-c'>High End Alloy Wheels to Support Your Business</h2>
      <p className='g-ta-c'>Wheelshome can always be your reliable partner in China, to rocket your business with quality alloy wheels ( 8 years warranty)</p>
      <Slick speed={1000} data={sliderData[0]} />
      <Slick speed={1500} data={sliderData[1]} />
      <Slick speed={1000} data={sliderData[2]} />
    </section>
  )
}

export default App