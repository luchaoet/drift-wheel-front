'use client'

import styles from './index.module.css'
import classnames from "classnames";
import { Modal } from 'antd'
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={classnames(styles.wrapper, 'g-c-p')} onClick={() => setIsModalOpen(true)}>
        <img className='g-w-100per' src="/images/section-05.jpeg" alt="" />
      </section>
      <Modal destroyOnClose footer={null} title="Introduction of Drift Wheel" open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
        <video className='g-w-100per' autoPlay src="/images/video.mp4"></video>
      </Modal>
    </>
  )
}

export default App