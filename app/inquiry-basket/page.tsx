"use client"
import styles from './index.module.css'
import classnames from "classnames";
import ProductsList from '../components/ProductsList'
import BlogTitle from '@/app/components/Document/BlogTitle'
import { Empty, Button } from 'antd';
import { useEffect, useState } from 'react';
import basket from '../../utils/basket'

function Page() {
  const [data, setData] = useState([] as any[])

  const getList = () => {
    // fetch(`/api/basket/get`).then(res => res.json()).then(res => {
    //   const data = res?.data || [];
    //   setData(data)
    // })
    const res = basket.get()
    setData(res)
  }

  useEffect(() => {
    basket.init()
    getList()
  }, [])

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