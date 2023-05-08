import { MainPropsType } from '@/src/Types/PropsTypes'
import { useState } from 'react'
import { Section } from '../Section/Section'
import s from './Main.module.css'

export const Main = ({ mainData }: MainPropsType) => {

   const [gifAnimation, setGifAnimation] = useState(true)

   return (
      <main className={s.main}>
         <div className={s.mainContainer}>
            {mainData.map(({ id, title, description, images, listItems, sliderData }) => (
               <Section key={id} title={title} description={description} images={images} listItems={listItems} sliderData={sliderData} />
            ))}
         </div>
         {/* <button onClick={() => { toggleGifAnimation(); setGifAnimation(!gifAnimation) }} style={{ margin: '0px auto', cursor: 'pointer', padding: '10px 10px', border: '3px solid orange', borderRadius: '10px' }}>Stop / run animation</button> */}
      </main>
   )
}