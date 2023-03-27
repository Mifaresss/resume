import '@/src/styles/globals.css'
import '@/src/styles/reset.css'
import type { AppProps } from 'next/app'
import FuturaPT from 'next/font/local'
import { useState } from 'react'

const FUTURA_PT = FuturaPT({
   src: [
      {
         path: '../../public/fonts/FuturaPT-Book.woff2',
         weight: '400',
         style: 'normal',
      },
      {
         path: '../../public/fonts/FuturaPT-Medium.woff2',
         weight: '500',
         style: 'normal',
      },
      {
         path: '../../public/fonts/FuturaPT-Bold.woff2',
         weight: '700',
         style: 'normal',
      },
      {
         path: '../../public/fonts/FuturaPT-ExtraBold.woff2',
         weight: '800',
         style: 'normal',
      },
   ],
})

export default function App({ Component, pageProps }: AppProps) {

   const [activeItem, setActiveItem] = useState('');


   return (
      <div className={['wrapper', FUTURA_PT.className].join(' ')}>
         <Component {...pageProps} activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>
   )
}
