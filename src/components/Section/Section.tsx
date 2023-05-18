import { ReactNode } from 'react'
import s from './Section.module.css'

export const Section = ({ children }: { children: ReactNode }) =>

   <section className={s.section}>
      {children}
   </section>
// export const Section = ({ title, description, images, listItems, sliderData }: SectionPropsType) =>

//    <section className={s.section}>
//       <h2 className={s.sectionTitle}>{title}</h2>
//       {description.includes('pre-intermediate') ? (
//          <p className={s.sectionDescription}>
//             My level of English is <em>pre-intermediate.</em>
//          </p>
//       ) : (
//          <p className={s.sectionDescription}>{description}</p>
//       )}
//       <SectionImageBlock images={images} />
//       <SectionList listItems={listItems} />
//       <SectionProjectBlock sliderData={sliderData} />
//    </section>
