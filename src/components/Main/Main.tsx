import { MainPropsType } from '@/src/Types/PropsTypes'
import { Section } from '../Section/Section'
import s from './Main.module.css'

export const Main = ({ mainData }: MainPropsType) => {

   return (
      <main className={s.main}>
         <div className={s.mainContainer}>
            {mainData.map(({ id, title, description, images, listItems, sliderData }) => (
               <Section key={id} title={title} description={description} images={images} listItems={listItems} sliderData={sliderData} />
            ))}
         </div>
      </main>
   )
}