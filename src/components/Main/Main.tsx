import { MainPropsType } from '@/src/Types/PropsTypes'
import { Section } from '../Section/Section'
import { SectionImageBlock } from '../Section/SectionImageBlock/SectionImageBlock'
import { SectionList } from '../Section/SectionList/SectionList'
import { SectionProjectBlock } from '../Section/SectionProjectBlock/SectionProjectBlock'
import { SectionDescription } from '../UI/SectionDescription/SectionDescription'
import { SectionTitle } from '../UI/SectionTitle/SectionTitle'
import s from './Main.module.css'

export const Main = ({ mainData }: MainPropsType) => {

   return (
      <main className={s.main}>
         <div className={s.mainContainer}>
            <Section>
               <SectionTitle>About me</SectionTitle>
               <SectionDescription>
                  I am {new Date().getFullYear() - 2002} years old. Frontend developer with a degree in Computer Engineering. During my 12-month web development intensive course, frontend development became my key focus and main area of interest. Additionally, being a lifelong perfectionist, I aim to write clean, reliable,  efficient code even in a time pressured environment. I strive to follow general programming principles such as SOLID, KISS, and DRY.
               </SectionDescription>
            </Section>
            <Section>
               <SectionTitle>Technical skills</SectionTitle>
               <SectionDescription>
                  Here are the main technologies I am proficient in (without various additional ones such as Sass, Git, etc.):
               </SectionDescription>
               <SectionImageBlock images={mainData[1].images} />
            </Section>
            <Section>
               <SectionTitle>English level</SectionTitle>
               <SectionDescription>My level of English is <em>pre-intermediate</em>.</SectionDescription>
            </Section>
            <Section>
               <SectionTitle>Work experience</SectionTitle>
               <SectionDescription>
                  I worked for 2 years at SEO company, during which time I made significant progress in the field and was promoted to the position of Senior SEO specialist (Note: within a small company).
               </SectionDescription>
            </Section>
            <Section>
               <SectionTitle>Soft skills</SectionTitle>
               <SectionDescription>I can highlight the following soft skills:</SectionDescription>
               <SectionList listItems={mainData[4].listItems} />
            </Section>
            <Section>
               <SectionTitle>My Projects</SectionTitle>
               <SectionProjectBlock sliderData={mainData[5].sliderData} />
            </Section>
         </div>
      </main>
   )
}
