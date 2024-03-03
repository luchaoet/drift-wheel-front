import styles from './index.module.css'
import classnames from "classnames";
import Link from 'next/link'

function SubMenu(props: any) {
  const data = props.data || [];
  return (
    <ul className={classnames('g-c-w')}>
      {
        data.map((item: any, index: number) => {
          const hasChild = !!item.children?.length;
          return (
            <li key={index} className='g-p-r g-fs-14'>
              <Link href={item.href} className='g-p-tb-10 g-p-lr-14 g-ai-c g-h-100per g-t-i g-fw-400'>
                <div className='g-jc-sb-ai-c g-w-100per'>
                  <span className='g-lh-1'>{item.name}</span>
                  {
                    hasChild &&
                    <span className={classnames('g-t-i g-d-if g-m-l-2 g-t-rz-270')}>
                      <svg height="20" strokeLinejoin="round" viewBox="0 0 16 16" width="20" style={{ color: 'currentcolor' }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z" fill="currentColor"></path>
                      </svg>
                    </span>
                  }
                </div>
              </Link>
              {
                hasChild && <SubMenu data={item.children} />
              }
            </li>
          )
        })
      }
    </ul>
  )
}

function App(props: any) {
  const { name, children } = props.data;
  return (
    <div className={classnames('g-ai-c g-h-100per g-p-r', styles.wrapper)}>
      <span className='g-t-i'>{name}</span>
      <span className={classnames('g-t-i g-d-if g-m-l-2')}>
        <svg height="20" strokeLinejoin="round" viewBox="0 0 16 16" width="20" style={{ color: 'currentcolor' }}>
          <path fillRule="evenodd" clipRule="evenodd" d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z" fill="currentColor"></path>
        </svg>
      </span>
      <SubMenu data={children} />
    </div>
  )
}
export default App