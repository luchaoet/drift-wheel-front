import styles from './index.module.css'
import classnames from "classnames";
import data from '@/app/components/Document/dataSource'
import Link from 'next/link';

function Page() {
  const ids = [705199, 705198, 646760, 603030, 596235];
  const d = data.filter(i => ids.includes(i.id))
  return (
    <section className={classnames('g-p-t-50 g-p-b-50', styles.wrapper)}>
      <ul className='container-auto'>
        {
          d.map((item: any, index) => (
            <li key={index}>
              <img src={item.image} className='g-w-100per' alt="" />
              <Link className='g-d-b g-ta-c g-c-999 g-fs-14 g-lh-20 g-m-t-10 g-c-p' href={`/doc/${item.id}`}>{item.title}</Link>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Page