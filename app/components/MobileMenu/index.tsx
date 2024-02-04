"use client"
import styles from './index.module.css'
import classnames from "classnames";
import Link from 'next/link'
import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react';

function ChildrenRender(props: any) {
  const [open, setOpen] = useState(false)
  const data: any = props.data;
  return (
    <>
      <div className="g-w-100per">
        <div className={classnames('g-jc-sb-ai-c', styles.children)} onClick={() => setOpen(!open)}>
          <span>{data.name}</span>
          <span className={classnames('g-t-i g-d-if', { 'g-t-rz-180': open })}>
            <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{ color: 'currentcolor' }}>
              <path fillRule="evenodd" clipRule="evenodd" d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z" fill="currentColor"></path>
            </svg>
          </span>
        </div>
        {
          data.children && <ul style={{ height: open ? 'auto' : 0 }} className={classnames('g-t-i g-o-h g-fs-16 g-p-l-10', styles['children-list'])}>
            {
              data.children.map((d: any, i: number) => (
                <li key={i}>
                  <Link href={d.href || 'javascript:;'} style={{ height: 48 }} className='g-w-100per g-h-100per g-ai-c'>{d.name}</Link>
                  {
                    d.children && (
                      <ul className='g-p-l-20'>
                        {
                          d.children.map((dc: any, idx: number) => (
                            <li style={{ height: 32 }} key={idx} className='g-ai-c g-fs-14'>{dc.name}</li>
                          ))
                        }
                      </ul>
                    )
                  }
                </li>
              ))
            }
          </ul>
        }
      </div>

    </>
  )
}

function MobileMenu(props: any) {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    const res = !open;
    const body = document.querySelector('body')
    if (res) {
      body?.setAttribute('style', 'overflow: hidden;')
    } else {
      body?.removeAttribute("style");
    }
    setOpen(res)
  }
  const data: any[] = props.data || [];
  console.log(data)
  return (
    <>
      <button data-expanded={open} className={classnames(styles.button, props.className, 'g-c-p')} onClick={toggle}>
        <div className={styles.toggle_bar} data-position="top"></div>
        <div className={styles.toggle_bar} data-position="bottom"></div>
      </button>
      <div data-expanded={open} className={classnames(props.className, styles.fixed_menu, 'g-p-f g-w-100vw g-bc-w g-zi-99 g-p-24')}>
        <ul>
          {
            data.map((item, index: number) => {
              const hasChildren = !!item.children?.length;
              return (
                <li key={index} className={classnames({ [styles['has-children']]: hasChildren, 'g-t-i': !hasChildren }, 'g-c-p g-w-100per g-ai-c')}>
                  {
                    hasChildren
                      ? <ChildrenRender data={item} />
                      : <Link onClick={toggle} className='g-w-100per g-h-100per g-ai-c' href={item.href}>{item.name}</Link>
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default MobileMenu