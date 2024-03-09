import styles from './index.module.css'
import classnames from "classnames";
import data from './data.json'
import Link from 'next/link'
import BlogTitle from '@/app/components/Document/BlogTitle'

function Page() {
  return (
    <>
      <BlogTitle title="Blog" />
      <section className={classnames('g-p-t-50 g-p-b-50 g-bc-f5f5f5')}>
        <div className='container-auto'>
          {
            data.map((item, index) => (
              <article key={index} className={classnames('g-p-34 g-bc-w g-c-b', styles.article)}>
                <h2>{item.title}</h2>
                <p className='g-m-tb-20 g-fs-16 g-lh-26'>{item.desc}</p>
                <Link href={`/blog/${item.id}`} className='g-d-b'>
                  <button className='g-d-b g-w-100per g-bc-c8351c g-fs-16 g-c-w g-br-4 g-c-p'>Read More »</button>
                </Link>
              </article>
            ))
          }
        </div>
      </section>
    </>
  )
}
export default Page