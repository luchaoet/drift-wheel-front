"use client"
import styles from './index.module.css'
import classnames from "classnames";
import { Carousel } from 'antd'
import { useRef } from 'react'

function Page({ params }: any) {
  // {params.id}
  const images = [
    '//img.hisupplier.com/var/userImages/2018-11/14/155931285_75.jpg',
    '//img.hisupplier.com/var/userImages/2018-11/14/155931457_240.jpg',
    '//img.hisupplier.com/var/userImages/2018-11/14/155931619_240.jpg',
    '//img.hisupplier.com/var/userImages/2018-11/14/155931774_240.jpg'
  ]
  const carouselRef: any = useRef()
  function slider(index: number) {
    carouselRef?.current.goTo(index)
  }
  return (
    <section className={classnames(styles.wrapper)}>
      <div className="container-auto g-d-f">
        <div className={classnames(styles.left, 'g-fs-0 g-mw-0')}>
          <div className='g-m-b-30'>
            <Carousel autoplay={false} ref={carouselRef}>
              {
                images.map((item: string, index: number) => (
                  <div key={index}>
                    <img className='g-w-100per g-h-100per g-of-cover' src={item} alt="aa" />
                  </div>
                ))
              }
            </Carousel>
          </div>
          <ul>
            {
              images.map((item: string, index: number) => (
                <li key={index} onClick={() => slider(index)}>
                  <img className='g-w-100per g-h-100per g-of-cover' src={item} alt="aa" />
                </li>
              ))
            }
          </ul>
        </div>
        <div className={classnames(styles.right, 'g-fg-1')}>
          <h1>21 INCH PORSCHE NEW CAYENNE WHEEL RIM FRONT AND REAR</h1>
          <ul>
            <li className='g-ai-c'>
              <i className='g-fw-b'>Model: </i>
              <span className='g-m-l-4'>2023</span>
            </li>
            <li className='g-ai-c'>
              <i className='g-fw-b'>Place of Origin: </i>
              <span className='g-m-l-4'>china</span>
            </li>
            <li className='g-ai-c'>
              <i className='g-fw-b'>Place of Origin:</i>
              <span className='g-m-l-4'>china</span>
            </li>
            <li className='g-ai-c'>
              <i className='g-fw-b'>Place of Origin:</i>
              <span className='g-m-l-4'>china</span>
            </li>
            <li className='g-ai-c'>
              <i className='g-fw-b'>Place of Origin:</i>
              <span className='g-m-l-4'>china</span>
            </li>
            <li className='g-ai-c'>
              <i className='g-fw-b'>Place of Origin:</i>
              <span className='g-m-l-4'>china</span>
            </li>
          </ul>
          <p className={classnames(styles.buttons, 'g-d-f')}>
            <button className={classnames(styles['contact-btn'], 'g-fg-1 g-jc-ai-c g-c-w')}>
              <span>1</span>
              <span>Contact Now</span>
            </button>
            <button className={classnames(styles['add-btn'], 'g-fg-1 g-jc-ai-c g-c-b')}>
              <span>1</span>
              <span>Add to Basket</span>
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
export default Page