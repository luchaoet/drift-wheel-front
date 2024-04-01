import type { Metadata } from "next";
import Basket from "./components/Basket";
import Menu from './components/Menu'
import Copyright from './components/Copyright'
import Footer from './components/Footer'
import { ConfigProvider } from 'antd'
import enUS from 'antd/locale/en_US';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import "./globals.css";
import '@luchao/base-css';

export const metadata: Metadata = {
  title: "China Forged Wheel Manufacturer, Die Casting and Flow Forming Rim Supplier and Factory",
  description: "Ningbo Drift Wheel Co., Ltd. is one of the leading audi alloy wheels, mercedes alloy wheels, bmw alloy wheels manufacturers and suppliers in China. Welcome to import audi alloy wheels at competitive price here.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let data = []
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API + "/service/category/list", {
      cache: 'no-cache',
    }).then(res => res.json());
    data = res.data;
  } catch (error) {
  }

  return (
    <ConfigProvider
      locale={enUS}
      theme={{
        token: {
          colorPrimary: '#c8351c',
        },
        components: {
          Carousel: {
            dotActiveWidth: 30,
            dotHeight: 10,
            dotWidth: 20
          }
        }
      }}
    >
      <html lang="en">
        <body>
          <Menu data={data} />
          <AntdRegistry>{children}</AntdRegistry>
          <Footer />
          <Copyright />
          <Basket />
        </body>
      </html>
    </ConfigProvider>
  );
}