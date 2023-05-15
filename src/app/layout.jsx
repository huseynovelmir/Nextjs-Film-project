import "./styles/reset.css"
import global from "./styles/global.module.css"
import { Inter } from 'next/font/google';
import Header from   "./components/header/index";
import Footer from "./components/footer/index";
import Main from "./components/main";


export const metadata = {
  title: 'Film.com',

}
const inter = Inter({
  subsets: ['latin'],
  
 });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
     
      <body className={global.container}>
        <Header />
        <Main/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  )
}
