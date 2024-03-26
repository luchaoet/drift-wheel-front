"use client"
import styles from './index.module.css'
import classnames from "classnames";
import ProductsList from '../components/ProductsList'
import { Row, Col, Input, Checkbox, Upload, Button, message } from 'antd'
import Textarea from './Textarea'
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react'

function Page(props: any) {
  const id = props.searchParams?.id;
  const [data, setData] = useState([])
  useEffect(() => {
    if (id) {
      fetch('/api/product?productId=' + id)
        .then(res => res.json())
        .then(res => {
          setData([res.data as never])
        })
    } else {
      fetch('/api/basket/get')
        .then(res => res.json())
        .then(res => {
          setData(res?.data || [])
        })
    }
  }, [id])


  const info = [
    { icon: '/images/icon-1.png', value: '86-574-89257258' },
    { icon: '/images/icon-2.png', value: '86-574-89257258' },
    { icon: '/images/icon-3.png', value: 'Mr.Steven Dai' },
    { icon: '/images/icon-4.png', value: 'sales@drift-wheel.com' },
    { icon: '/images/icon-5.png', value: '186 6853 8030' },
    { icon: '/images/icon-6.png', value: `Room 702,Yingsheng Mansion 456 Middle Tai'an Road , Yinzhou District (South CBD), Ningbo, Zhejiang, China (Mainland)/315199  ` },
  ]

  const [checked, setChecked] = useState(false);

  const [form, setForm] = useState({ subject: 'I want to know more about your company', files: [] as any[] } as any);
  const setFormData = (key: string, value: any) => {
    const data = { ...form, [key]: value };
    setForm(data);
    setStatus({
      ...status,
      [key]: value ? null : 'error'
    })
  }

  useEffect(() => {
    if (!checked) {
      setFormData('files', [])
    }
  }, [checked])

  const [status, setStatus] = useState({} as any);
  const checkStatus = () => {
    return new Promise((resolve, reject) => {
      const checkKey = ['country', 'message', 'email', 'fullName'];
      const msg = {} as any;
      for (const key of checkKey) {
        if (!form[key]) {
          msg[key] = 'error'
        }
      }
      setStatus(msg)
      if (Object.keys(msg).length) {
        reject()
      } else {
        resolve('')
      }
    })
  }

  const handleChange = (e: any) => {
    const files = e.target.files || {};
    setFormData('files', Object.values(files));
  }



  const [loading, setLoading] = useState(false);
  const sendMail = () => {
    setLoading(true)
    const products = data.map((item: any) => ({
      model: item.model,
      diameter: item.diameter,
      productId: item.productId,
      brandName: item.brandName,
    }))

    const { files, ...others } = form;

    const formData = new FormData();
    const obj = {
      ...others,
      products: JSON.stringify(products)
    }
    Object.keys(obj).forEach(key => {
      formData.append(key, obj[key])
    })
    files.forEach((f: any) => {
      formData.append('files', f)
    });

    fetch('/api/sendMail', {
      method: 'post',
      body: formData,
    })
      .then(res => res.json())
      .then((res) => {
        if (res.errorCode === '__200OK') {
          message.success('Email Sent Successfully')
          setForm({
            subject: 'I want to know more about your company',
            files: [],
            message: ''
          })
        } else {
          message.error(res.message || res.errorMsg)
        }
      }).catch(() => {
        message.error('Email Sending Failed')
      })
      .finally(() => setLoading(false))
  }

  const handleSubmit = () => {
    checkStatus().then(sendMail)
  }

  return (
    <>
      <section>
        <img src="/images/contact-banner.png" className='g-w-100per g-banner-cover' />
      </section>
      {
        !!data?.length &&
        <section className='g-bc-w g-p-t-50'>
          <div className='container-auto'>
            <p className={classnames(styles.title)}>Products ({data.length})</p>
            <ProductsList data={data} basketButton={false} />
          </div>
        </section>
      }
      <section className='g-p-b-50'>
        <div className='container-auto'>
          <div className={classnames('g-p-t-50 g-d-f', styles.contact)}>
            <div className={classnames(styles.left)}>
              <p className={classnames(styles.title)}>Contact Us</p>
              <Row>
                <Col span={10}>
                  <Input status={status.country} value={form.country} onChange={e => setFormData('country', e.target.value)} placeholder='Country' addonBefore={<img style={{ width: 24 }} src="/images/icon-7.png" />} />
                </Col>
                <Col span={10} offset={4}>
                  <Input status={status.email} value={form.email} onChange={e => setFormData('email', e.target.value)} placeholder='E-mail' addonBefore={<img style={{ width: 24 }} src="/images/icon-8.png" />} />
                </Col>
              </Row>
              <Row className='g-m-t-40'>
                <Col span={10}>
                  <Input value={form.companyName} onChange={e => setFormData('companyName', e.target.value)} placeholder='Company Name' addonBefore={<img style={{ width: 24 }} src="/images/icon-9.png" />} />
                </Col>
                <Col span={10} offset={4}>
                  <Input status={status.fullName} value={form.fullName} onChange={e => setFormData('fullName', e.target.value)} placeholder='Full Name' addonBefore={<img style={{ width: 24 }} src="/images/icon-10.png" />} />
                </Col>
              </Row>
              <Row className='g-m-t-40'>
                <Col span={10}>
                  <Input status={status.telephone} value={form.telephone} onChange={e => setFormData('telephone', e.target.value)} placeholder='Telephone' addonBefore={<img style={{ width: 24 }} src="/images/icon-11.png" />} />
                </Col>
                <Col span={10} offset={4}></Col>
              </Row>
              <Row className='g-m-t-40'>
                <Textarea status={status.message} value={form.message} onChange={(e: any) => setFormData('message', e.target.value)} placeholder='Type Your Message…' />
              </Row>
              <p className='g-ai-c g-m-tb-22'>
                <span className='g-m-r-10 g-c-333'>if you want upload file, Please switch</span>
                <Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>{''}</Checkbox>
              </p>
              {
                checked &&
                <div>
                  {/* <Upload
                    action="/api/uploadFile"
                    listType="picture-card"
                    multiple
                    fileList={form.files}
                    onChange={handleChange}
                  >
                    <button style={{ border: 0, background: 'none' }} type="button">
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </button>
                  </Upload> */}
                  <input type="file" multiple onChange={handleChange}></input>
                  <p className='g-c-999 g-lh-16 g-fs-12'>Format & Size-：jpg, jpeg, gif, txt, doc, xls or pdf format； Max. size of 500KB</p>
                </div>
              }
              <div className='g-m-t-40 g-ta-r'>
                <Button loading={loading} type="primary" size='large' shape="round" onClick={handleSubmit}>Submit</Button>
              </div>
            </div>
            <div className={classnames(styles.right)}>
              <p>Ningbo Drift Wheel Co., Ltd.</p>
              <ul>
                {
                  info.map((item: any, index: number) => (
                    <li key={index} className='g-ai-c'>
                      <img src={item.icon} alt="" />
                      <span className='g-fs-14 g-m-l-10'>{item.value}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Page