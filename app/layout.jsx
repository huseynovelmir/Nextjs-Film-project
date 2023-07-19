import "@/styles/reset.css"
import global from "@/styles/global.module.css"
import { Inter } from 'next/font/google';
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import Head from "next/head";


export const metadata = {
  title: 'Findmovie.com',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <Head>
        <link rel='icon' href='/play.png' />
      </Head>
      <body className={global.container}>
        <Header/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>

  )
}
