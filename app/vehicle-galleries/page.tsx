"use client"

import styles from './index.module.css'
import classnames from "classnames";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Image, Empty, Pagination } from 'antd'

function Page() {

  const [data, setData] = useState([] as any[]);
  const [pager, setPager] = useState({
    currentPage: 1,
    pageSize: 20,
    total: 0,
    totalPage: 1
  });

  const getList = (currentPage: number = 1, pageSize: number = 20) => {
    fetch(`/api/show?queryValue=&pageIndex=${currentPage}&pageSize=${pageSize}`)
      .then(res => res.json())
      .then(res => {
        const data = (res.data || []).map((item: any) => {
          const showInfo = item.showInfo?.[0] || {};
          return {
            ...item,
            ...showInfo
          }
        })

        setData(data)
        setPager(res.pager)
      })
  }


  useEffect(() => {
    getList()
  }, [])

  const onChange = (currentPage: number, pageSize: number) => {
    setPager((data) => ({
      ...data,
      currentPage,
      pageSize,
    }))
    getList(currentPage, pageSize)
  }

  return (
    <>
      <section className='g-fs-16 g-c-w g-p-tb-16 g-p-lr-20 g-bc-c8351c'>
        <div className='container-auto'>VEHICLE GALLERY</div>
      </section>
      <section className={classnames(styles.wrapper)}>
        {
          data.length ?
            <div className={classnames('container-auto', styles.container)}>
              {
                data.map((item: any, index: number) => (
                  <dl key={index}>
                    <dt>
                      <Image
                        width={'100%'}
                        src={process.env.NEXT_PUBLIC_IMG + item.image}
                      />
                    </dt>
                    <dd className='g-p-t-18 g-p-lr-10 g-p-b-6 g-fs-20 g-fw-b g-e-1 g-ta-c'>{item.carModel}</dd>
                    <dd className='g-ta-c g-p-lr-10 g-fs-12 g-e-1' style={{ color: '#999' }}>{item.categoryId}</dd>
                    <dd className='g-ta-c g-p-lr-10 g-fs-14 g-e-1 g-lh-30 g-p-b-30'>{item.productId}</dd>
                  </dl>
                ))
              }
            </div>
            : <div className='g-p-t-50 g-p-b-50 g-jc-ai-c'><Empty /></div>

        }
      </section>
      {
        pager.totalPage > 1 &&
        <section className='g-jc-c g-p-t-20 g-p-b-40'>
          <Pagination
            pageSize={pager.pageSize}
            current={pager.currentPage}
            total={pager.total}
            onChange={onChange}
          />
        </section>
      }
    </>
  )
}

export default Page