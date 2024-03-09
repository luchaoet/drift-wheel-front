import styles from './index.module.css'
import classnames from "classnames";
import data from './dataSource'
import BlogTitle from './BlogTitle'

function Page({ id, tootip }: any) {

  const d: any = data.find(item => item.id == id)

  return (
    <>
      {tootip && <BlogTitle title={`${tootip}${d.title}`} />}
      <section className={classnames('g-p-t-50 g-p-b-50 g-bc-w', styles.wrapper)}>
        <div className='container-auto'>
          <h1 className='g-fw-b g-m-b-20'>{d.title}</h1>
          {
            d.time && <p className='g-c-c8351c g-m-b-10 g-lh-20 g-fs-16'>{d.time}</p>
          }
          {
            d.content.map((item: any, index: number) => {
              switch (item.type) {
                case 'title': return <p key={index} className='g-fs-16 g-m-b-20 g-lh-26 g-c-b'>{item.value}</p>
                case 'image': return (
                  <p className='g-ta-c g-m-t-40 g-m-b-20' key={index}>
                    <img className='g-d-ib g-w-100per' src={item.value} style={item.style} alt="" />
                  </p>
                )
                case 'text': return <p key={index} className='g-m-b-20 g-lh-26 g-c-b'>{item.value}</p>

              }
            })
          }
        </div>
      </section>
    </>
  )
}
export default Page