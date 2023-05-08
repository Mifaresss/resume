import { SectionListPropsType } from '@/src/Types/PropsTypes'
import s from './SectionList.module.css'

export const SectionList = ({ listItems }: SectionListPropsType) =>

   listItems ?
      <ol className={s.sectionList}>
         {listItems.map(({ id, skill }) => (
            <li key={id} className={s.sectionItem}>
               {skill}
            </li>
         ))}
      </ol>
      :
      <></>
