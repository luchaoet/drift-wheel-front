import classnames from "classnames";
import styles from './index.module.css'
import Link from "next/link";
import ProductsList from '../../components/ProductsList'
import { Empty } from "antd";

async function Page({ params }: any) {
  // 分类树
  const getCategoryList = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/service/category/list`).then(res => res.json())
    return res.data || [];
  }
  let searchKey = '';
  // 列表 分类id or 搜索词
  const getProductPage = async () => {
    if (params.id.indexOf('key') === 0) {
      // 搜索词
      const key = params.id.replace(/^key/, '');
      searchKey = key;
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/service/product?queryKey=category_id&searchKey=${key}`).then(res => res.json())
      return res.data || [];
    } else {
      // 分类id
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/service/product/page?queryKey=category_id&queryValue=${params.id}&pageSize=100&pageIndex=1`).then(res => res.json())
      return res.data || [];
    }
  }
  // 购物车
  const getBasket = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/service/product/page?queryKey=in_basket&pageSize=50&pageIndex=1`).then(res => res.json())
    return res.data || [];
  }

  const [category, productPage, basket] = await Promise.all([getCategoryList(), getProductPage(), getBasket()])

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
        <img src="/images/category-banner.png" className='g-w-100per g-banner-cover' />
        <div className="container-auto g-p-a g-t-0 g-r-0 g-b-0 g-l-0 g-d-f g-ai-c g-fw-w">
          <div className={classnames(styles.banner)}>
            <h1>Ningbo Drift Wheel Co., Ltd.</h1>
            <p className="g-fs-26 g-c-w g-lh-36">21 INCH 1-PEICE FORGED WHEEL FOR RANGE ROVER FLOATING CAP DESIGN, China 21 INCH 1-PEICE FORGED WHEEL FOR RANGE ROVER FLOATING CAP DESIGN Manufacturer</p>
          </div>
        </div>
      </section>
      <section>
        <div className={classnames("g-d-f container-auto", styles.container)}>
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
            {
              // 搜索展示 分有数据 无数据 提示
              // 分类 显示分类名和分类描述
              !!searchKey
                ? productPage.length > 0 ? (
                  <dl>
                    <dt className="g-fs-32 g-lh-40">{`Results for ${searchKey}: ${productPage.length} Products`}</dt>
                    <dd className="g-fs-18 g-lh-24 g-m-t-18">View more specifications {searchKey} for you</dd>
                  </dl>
                ) : (
                  <dl>
                    <dt className="g-fs-32 g-lh-40 g-c-c8351c">Sorry, no matching results were found for the keyword(s): {searchKey}</dt>
                    <dd className="g-fs-18 g-lh-24 g-m-t-18 g-c-c8351c">Please check your keyword(s) spelling.</dd>
                    <dd className="g-fs-18 g-lh-24 g-m-t-8 g-c-c8351c">Use more general keyword(s).</dd>
                  </dl>
                )
                : (
                  <dl>
                    <dt className="g-fs-32 g-lh-40">{categoryName}</dt>
                    <dd className="g-fs-18 g-lh-24 g-m-t-18">{categoryDesc}</dd>
                  </dl>
                )
            }
            {
              !!productPage.length
                ? <ProductsList data={productPage} basket={basket} />
                : <Empty className="g-p-t-50" />
            }

          </div>

        </div>
      </section>
    </>
  )
}

export default Page