import { TestProps } from '@/src/pages'
import { UIEvent } from 'react'
import s from './Main.module.css'

const fishText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur rerum eius iste, illo molestias, nequequis distinctio dicta accusamus rem voluptatibus. Esse praesentium voluptates incidunt laboriosam harumipsum minus expedita similique ea nostrum, debitis velit blanditiis cumque placeat sequi unde teneturrerum doloremque sunt modi fuga iusto porro asperiores corporis. Blanditiis modi exercitationem doloressunt mollitia eius nesciunt quo incidunt minima sit? Animi distinctio asperiores voluptate earum nostrumconsectetur ea inventore explicabo itaque sed dicta eos dolor, reiciendis maxime quae, debitis quidem atlaboriosam doloribus, voluptatem voluptatum et eaque aspernatur. Maxime totam, perspiciatis in nequesimilique, magni voluptas vel recusandae, et ab laborum id! Eius vel, maxime numquam mollitia obcaecatiblanditiis dolore tenetur ipsam soluta alias sit sequi facilis consequatur rem aliquid maiores ea namodio officia molestias ad sapiente aliquam veritatis! Temporibus tenetur hic deserunt nesciunt? Culpadelectus dolorem sapiente perferendis illum, et accusantium cumque modi, odit corrupti laboriosameligendi fugiat quod error placeat? Perferendis sed tempora provident hic? Inventore quo placeat undetenetur alias officiis commodi in neque, explicabo ipsam eum voluptate voluptatem. Molestias doloremqueab labore veniam quasi dolor modi dolore totam eius animi quibusdam voluptatem vitae dolorum eum,corporis dignissimos cupiditate dolorem unde laboriosam explicabo aspernatur? Illo blanditiis voluptatemdicta dolores quod. Animi fugiat, soluta aut atque cumque debitis voluptatem eaque dolores alias mollitiaeligendi fuga nam voluptatum laboriosam accusamus, provident explicabo perferendis voluptas similiqueesse? Dolore, ipsa distinctio dignissimos, similique doloremque voluptate quia consequatur quibusdam,laborum ipsam tempora voluptatem unde dicta hic quas nobis assumenda? Voluptatum, iusto iste! Enim itaquequaerat modi ut ullam natus laudantium veniam? Quis quae adipisci velit, saepe ex consequatur cumqueeveniet praesentium reiciendis voluptates alias quia soluta natus amet nihil quibusdam asperiores eumautem sed nesciunt harum et consectetur facilis. Aperiam beatae similique harum exercitationem minimatotam? Esse architecto distinctio vel nobis sapiente dolore, odio quibusdam omnis quos! Excepturicorrupti impedit iste illo tenetur inventore dolores! Nesciunt accusamus dicta accusantium distinctioeos. Doloremque nostrum provident commodi fugiat rem in assumenda quos consequatur, possimus error!Repudiandae eos facilis quia sed vel nemo magni fugit deserunt eaque iusto est neque ea fugiat quibusdam,commodi quod voluptatum vero ducimus voluptatibus laboriosam! Dolorum nesciunt delectus tempora molestiaedistinctio dolorem unde suscipit id nam repellat totam, hic nisi quis modi magnam deleniti ex sapiente,harum iure, similique veniam! Iste totam sint debitis quasi voluptate consequuntur. Assumenda isteprovident similique eaque veritatis temporibus possimus quisquam nesciunt doloribus vel officia atqueeius libero recusandae reiciendis sequi neque autem unde iusto, quos ad illum! Cum, placeat ex doloriusto fugiat nobis! Earum saepe, sit ipsa ullam neque nulla veritatis sunt perferendis consequatur.Similique impedit, delectus in beatae eligendi deleniti! Quasi, minus quas adipisci itaque reiciendisnostrum quam quidem natus. Quidem officiis odio deserunt possimus fugit minima quae molestiae similique,est libero exercitationem dolorem cupiditate assumenda. Quibusdam debitis aperiam molestias, repellendusdolor cupiditate assumenda eius est reiciendis necessitatibus unde quia beatae harum nobis doloribus enimitaque! Non sit fuga vitae voluptatum, blanditiis accusamus, voluptates explicabo at error, officiisreprehenderit.`


export default function Main(props: TestProps) {

   function scrollHandler(e: UIEvent<HTMLElement>) {
      const scrollTop = e.target.scrollTop
      if (scrollTop > 1010 && scrollTop < 2030) {
         props.setActiveItem('general-about-me')
      } else if (scrollTop > 2030 && scrollTop < 3050) {
         props.setActiveItem('tehnical-skills')
      } else if (scrollTop > 3050 && scrollTop < 4070) {
         props.setActiveItem('english-level')
      } else if (scrollTop > 4070 && scrollTop < 5090) {
         props.setActiveItem('soft-skills')
      } else if (scrollTop > 5090 && scrollTop < 6110) {
         props.setActiveItem('work-experience')
      } else {
         props.setActiveItem('')
      }
   }

   return (
      <main className={s.test} onScroll={scrollHandler}>
         <div></div>
         <div>{fishText}</div>
         <div id='general-about-me'>About me</div>
         <div>{fishText}</div>
         <div id='tehnical-skills'>Tehnical skills</div>
         <div>{fishText}</div>
         <div id='english-level'>English-level</div>
         <div>{fishText}</div>
         <div id='soft-skills'>Soft-skills</div>
         <div>{fishText}</div>
         <div id='work-experience'>Work-experience</div>
         <div>{fishText}</div>
      </main>
   )
}
