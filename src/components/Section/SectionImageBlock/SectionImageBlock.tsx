import { SectionImageBlockPropsType } from '@/src/Types/PropsTypes'
import Image from 'next/image'
import s from './SectionImageBlock.module.css'

export const SectionImageBlock = ({ images }: SectionImageBlockPropsType) =>

   images ?
      <ul className={s.list}>
         {images.map(({ id, src }) => (
            <li className={s.listItem} key={id}>
               {/* <Image className={s.image} src={src} width={120} height={120} alt='' /> */}
               <img className={s.image} src={src} width='120' height='120' alt='' />
            </li>
         ))}
      </ul>
      :
      <></>