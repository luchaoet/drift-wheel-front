import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Menu from './components/Menu'
import Copyright from './components/Copyright'
import Footer from './components/Footer'
import { ConfigProvider } from 'antd'
import enUS from 'antd/locale/en_US';

import "./globals.css";
import '@luchao/base-css';

// const inter = Inter({ subsets: ["latin"] });

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
    const res = await fetch("https://api.solinkup.com/console/connector/notInMeta/list?connectorScope=all&versionType=current&excludeHidden=true&connectorTag=oa").then(res => res.json());
    data = res.data
  } catch (error) { }

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
          {children}
          <Footer />
          <Copyright />
        </body>
      </html>
    </ConfigProvider>
  );
}