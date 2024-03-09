import styles from './index.module.css'
import classnames from "classnames";

function Page() {
  return (
    <>
      <section className="g-p-r">
        <img src="/images/about-banner.png" className='g-w-100per' />
        <div className="container-auto g-p-a g-t-0 g-r-0 g-b-0 g-l-0 g-d-f g-ai-c">
          <p className={classnames(styles.banner)}>Ningbo Drift Wheel Co., Ltd.</p>
        </div>
      </section>
      <section className={classnames('g-p-tb-38 container-auto', styles.content)}>
        <h2>Company Info</h2>
        <p>Founded in 2001, our company is one of the largest Alloy Wheel wholesalers in China, delivering uncompromising quality to the owners of every type of vehicles on the road and on the track. For over 10 years, we have won a great reputation among worldwide customers for our professional service on the foundation of superior quality, excellence in engineering and the introduction of innovative styling to our customers from around the world. </p>
        <p>As a leading company in Replica wheel series and After-market wheel series, we have over 1000 designs and 3000 different specifications available from 13 to 24 inch. Our main export markets are Latin America, Europe, Middle East and Australia, ect.</p>
        <p>Our Advantages: <br />
          1, Easy Transport: 20 minutes drive from our buffer warehouse to seaport Ningbo China. <br />
          2, Certified Manufacture: All wheels are from big scale manufacture which is certificated by ISO9001-2000, ISO/TS16949, VIA, JWL and TUV, ect. <br />
          3, Full Range Stock: More than 50,000 pieces both in replica wheel and after-market wheel, we can ship stock wheels in short time. <br />
          4, High Level Quality Control: Specialized QC team, Strict control in process, Full testing. <br />
          5, Professional Sales Team: We have senior sales team familiar with wheel technology and wheel world markets, who are able to handle every request from customer within 12 hours. <br />
          6, Integrated After-sale Service: We have a strict system in company ERP programe for wheel guarantee and after-sale service, we have three staff ready to receive and follow up feedback from customers. <br />
          7, Active development centre: We always share fresh designs and developing idea with our distributors. Every month, we will have over 30 new designs updated.</p>
      </section>
    </>
  )
}

export default Page