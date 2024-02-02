import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menu from './components/Menu'
import Copyright from './components/Copyright'

import "./globals.css";
import '@luchao/base-css';
import { ConfigProvider } from 'antd'
import enUS from 'antd/locale/en_US';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "China MONOBLOCK FORGED Manufacturer, one peice forged wheels Supplier and Factory",
  description: "China MONOBLOCK FORGED manufacturers and  one peice forged wheels suppliers. Welcome to import quality MONOBLOCK FORGED at competitive price from our factory here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <body className={inter.className}>
          <Menu />
          {children}
          <Copyright />
        </body>
      </html>
    </ConfigProvider>
  );
}