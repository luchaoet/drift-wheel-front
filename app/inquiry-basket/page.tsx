import styles from './index.module.css'
import classnames from "classnames";
import ProductsList from '../components/ProductsList'
import BlogTitle from '@/app/components/Document/BlogTitle'
import { Empty } from 'antd';

async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/product/page?queryKey=in_basket&pageSize=50&pageIndex=1`).then(res => res.json())
  const data = res.data || [];

  return (
    <>
      <BlogTitle title="Inquiry Basket" />
      <section className='container-auto g-p-t-50 g-p-b-50'>
        {
          !!data.length
            ? <ProductsList data={data} basket={data} />
            : <div className='g-p-t-50 g-p-b-50'><Empty /></div>
        }
      </section>
    </>
  )
}

export default Page