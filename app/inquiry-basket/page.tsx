"use client"

import styles from './index.module.css'
import classnames from "classnames";
import ProductsList from '../components/ProductsList'
import BlogTitle from '@/app/components/Document/BlogTitle'
import { Empty, Button } from 'antd';
import { useEffect, useState } from 'react';

function Page() {
  // let data = [] as any[];
  // try {
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_API}/service/product/page?queryKey=in_basket&pageSize=50&pageIndex=1`).then(res => res.json())
  //   data = res.data || [];
  // } catch (error) {

  // }

  const [data, setData] = useState([])

  const getList = () => {
    fetch(`/api/basket/get`).then(res => res.json()).then(res => {
      const data = res?.data || [];
      setData(data)
    })

  }

  useEffect(getList, [])

  return (
    <>
      <BlogTitle title="Inquiry Basket" />
      <section className='container-auto g-p-t-50 g-p-b-50'>
        {
          !!data?.length
            ? <ProductsList data={data} basket={data} onChange={getList} />
            : <div className='g-p-t-50 g-p-b-50'><Empty /></div>
        }
        {
          !!data?.length &&
          <div className="g-p-t-40 g-jc-c">
            <Button type="primary" size="large" href="/inquiry">Inquiry Now</Button>
          </div>
        }

      </section>

    </>
  )
}

export default Page