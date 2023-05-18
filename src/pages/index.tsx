import { mainData } from '@/src/mainData'
import Head from 'next/head'
import { Address } from '../components/Address/Address'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { MyLink } from '../components/UI/MyLink/MyLink'
import { ThemeSwitcher } from '../components/UI/ThemeSwitcher/ThemeSwitcher'

export default function Home() {

   return (
      <>
         <Head>
            <title>Resume | Serafim Barey</title>
            <meta name='description' content='This is resume of Serafim Barey' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <link rel='icon' href='./favicon.svg' />
         </Head>
         <Header>
            <ThemeSwitcher />
         </Header>
         <Main mainData={mainData} />
         <Address>
            <MyLink href='https://t.me/mifaress' color='beta'>Telegram</MyLink>
            <MyLink href='mailto:9803211@gmail.com' color='beta'>Email</MyLink>
         </Address>
      </>
   )
}
