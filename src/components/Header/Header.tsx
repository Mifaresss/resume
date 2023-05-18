import myFoto from '@/public/images/avatar.jpg'
import Image from 'next/image'
import { ReactElement } from 'react'
import s from './Header.module.css'

export const Header = ({ children }: { children: ReactElement }) =>

   <header className={s.header}>
      <div className={s.headerContainer}>
         <div className={s.imageWrapper}>
            <Image className={s.image} src={myFoto} width={1862} height={1460} alt='My foto' priority={true} />
         </div>
         <div className={s.heroWrapper}>
            <h1 className={s.title}>Serafim Barey</h1>
            <span className={s.gorisontalLine}></span>
            <p className={s.description}></p>
         </div>
      </div>
      {children}
   </header>