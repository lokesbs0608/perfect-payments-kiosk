import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/Component/Header'
import ProductsCard from '@/Component/ProductsCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='theme_bg'>
    <div className='homePage_contaniner'>
      <Header/>
      <ProductsCard/>
    </div>
   </div>
  )
}
