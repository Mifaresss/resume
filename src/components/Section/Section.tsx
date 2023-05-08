import { SectionPropsType } from '@/src/Types/PropsTypes'
import s from './Section.module.css'
import { SectionImageBlock } from './SectionImageBlock/SectionImageBlock'
import { SectionList } from './SectionList/SectionList'
import { SectionProjectBlock } from './SectionProjectBlock/SectionProjectBlock'

export const Section = ({ title, description, images, listItems, sliderData }: SectionPropsType) =>

   <section className={s.section}>
      <h2 className={s.sectionTitle}>{title}</h2>
      {description.includes('pre-intermediate') ? (
         <p className={s.sectionDescription}>
            My level of English is <em>pre-intermediate.</em>
         </p>
      ) : (
         <p className={s.sectionDescription}>{description}</p>
      )}
      <SectionImageBlock images={images} />
      <SectionList listItems={listItems} />
      <SectionProjectBlock sliderData={sliderData} />
   </section>
