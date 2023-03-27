import { TestProps } from '@/src/pages'
import s from './Header.module.css'

export default function Header(props: TestProps) {
   console.log(props.activeItem)
   return (
      <header className={s.header}>
         <nav className={s.nav}>
            <ul className={s.navList}>
               <li className={s.navItem}>
                  <a href='#general-about-me' className={props.activeItem === 'general-about-me' ? `${s.active}` : ''}>
                     About me
                  </a>
               </li>
               <li className={s.navItem}>
                  <a href='#tehnical-skills' className={props.activeItem === 'tehnical-skills' ? `${s.active}` : ''}>
                     Technical skills
                  </a>
               </li>
               <li className={s.navItem}>
                  <a href='#english-level' className={props.activeItem === 'english-level' ? `${s.active}` : ''}>
                     English level
                  </a>
               </li>
               <li className={s.navItem}>
                  <a href='#soft-skills' className={props.activeItem === 'soft-skills' ? `${s.active}` : ''}>
                     Soft skills
                  </a>
               </li>
               <li className={s.navItem}>
                  <a href='#work-experience' className={props.activeItem === 'work-experience' ? `${s.active}` : ''}>
                     Work experience
                  </a>
               </li>
            </ul>
         </nav>
      </header>
   )
}
