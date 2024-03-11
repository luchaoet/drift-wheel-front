import classnames from "classnames";
import styles from './index.module.css'
import Link from "next/link";
import ProductsList from '../../components/ProductsList'

async function Page({ params }: any) {
  const getCategoryList = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/category/list`).then(res => res.json())
    return res.data || [];
  }
  const getProductPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/product/page?queryKey=category_id&queryValue=${params.id}&pageSize=1000&pageIndex=1`).then(res => res.json())
    return res.data || [];
  }

  const [category, productPage] = await Promise.all([getCategoryList(), getProductPage()])

  function getCurrentCategory(data: any[], id: string) {
    let temp = {
      categoryDesc: '',
      name: ''
    };
    function getData(data: any[]) {
      for (const i of data) {
        if (i.categoryId === id) {
          temp = i;
          break
        }
        if (i?.children.length) {
          getData(i.children)
        }
      }
    }
    getData(data)

    return temp
  }

  const { categoryDesc, name: categoryName } = getCurrentCategory(category, params.id)

  return (
    <>
      <section className="g-p-r">
        <img src="/images/category-banner.png" className='g-w-100per' />
        <div className="container-auto g-p-a g-t-0 g-r-0 g-b-0 g-l-0 g-d-f g-ai-c g-fw-w">
          <div>
            <h1 className={classnames(styles.banner)}>Ningbo Drift Wheel Co., Ltd.</h1>
            <p className="g-fs-26 g-c-w g-lh-36">21 INCH 1-PEICE FORGED WHEEL FOR RANGE ROVER FLOATING CAP DESIGN, China 21 INCH 1-PEICE FORGED WHEEL FOR RANGE ROVER FLOATING CAP DESIGN Manufacturer</p>
          </div>
        </div>
      </section>
      <section>
        <div className="g-d-f container-auto">
          <div className={classnames(styles.left)}>
            <p>PRODUCT LIST</p>
            {
              category.map((item: any, index: number) => {
                return (
                  <dl key={item.categoryId} className={classnames("g-c-b")}>
                    <dt className={classnames("g-ai-c g-fs-17 g-c-b g-m-tb-16 g-fw-b", { [styles['is-active']]: params.id === item.categoryId })} >
                      <img style={{ width: 16 }} src="/images/arrow.png" className="g-m-r-10" />
                      <Link href={`/category/${item.categoryId}`}>{item.name}</Link>
                    </dt>
                    {
                      item.children.map((c: any, i: number) => {
                        return (
                          <dd key={c.categoryId} className={classnames("g-p-l-26 g-fs-16 g-lh-26 g-fw-400", { [styles['is-active']]: params.id === c.categoryId })}>
                            <Link href={`/category/${c.categoryId}`}>{c.name}</Link>
                          </dd>
                        )
                      })
                    }
                  </dl>
                )
              })
            }
          </div>
          <div className={classnames(styles.right, 'g-p-t-38 g-c-b')}>
            <dl>
              <dt className="g-fs-32 g-lh-40">{categoryName}</dt>
              <dd className="g-fs-18 g-lh-24 g-m-t-18">{categoryDesc}</dd>
            </dl>
            <ProductsList data={productPage} />
          </div>

        </div>
      </section>
    </>
  )
}

export default Page