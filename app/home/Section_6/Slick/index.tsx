'use client'
import styles from './index.module.css'
import classnames from "classnames";
import { useEffect, useRef, useState } from 'react'

function App(props: any) {
  const { speed = 10000, data = [] } = props || {};

  const wrapperRef = useRef(null) as any;

  const [dataSource, setDataSource] = useState([] as any[])

  function init() {
    const offsetWidth = wrapperRef?.current?.offsetWidth || 0;
    const order = Math.ceil(offsetWidth / (data.length * 180));

    let d = new Array()

    for (let index = 0; index < order; index++) {
      d = d.concat(data)
    }
    setDataSource(d)

  }
  useEffect(() => {
    init()
    window.addEventListener('resize', init);
    return () => {
      window.removeEventListener('resize', init)
    }
  }, [])

  if (!data?.length) return null;

  return (
    <div ref={wrapperRef} className={classnames(styles.wrapper, 'g-w-100per')}>
      <div className={styles.slick}>
        {
          [1, 2].map(v => (
            <ul key={v} className='g-d-f' style={{ '--animation-duration': speed + 'ms' }}>
              {
                dataSource.map((item: any, index: number) => (
                  <li key={index} className='g-ai-c g-fd-c g-bs-cb g-c-p'>
                    <p className='g-w-100per g-jc-ai-c'>
                      <img className='g-w-100per' src={item.img} alt="" />
                    </p>
                    <span className='g-ta-c g-e-2 g-m-t-10'>{item.title}</span>
                  </li>
                ))
              }
            </ul>
          ))
        }
      </div>
    </div>
  )
}

export default App