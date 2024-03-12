
import styles from './index.module.css'
import classnames from "classnames";

function App({ placeholder, onChange, value, status }: any) {
  return (
    <div className={classnames(styles.wrapper, 'g-w-100per g-p-r')}>
      <img style={{ width: 24 }} src="/images/icon-12.png" className='g-p-a' />
      <textarea value={value} onChange={onChange} placeholder={placeholder} className={classnames({ [styles.error]: status === 'error' }, 'g-t-i g-fs-14')} />
    </div>
  )
}
export default App