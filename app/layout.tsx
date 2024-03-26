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
  title: "China MONOBLOCK FORGED Manufacturer, one peice forged wheels Supplier and Factory",
  description: "China MONOBLOCK FORGED manufacturers and  one peice forged wheels suppliers. Welcome to import quality MONOBLOCK FORGED at competitive price from our factory here.",
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