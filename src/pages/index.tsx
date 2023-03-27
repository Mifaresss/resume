import Header from '../components/Header/Header'
import Head from 'next/head'
import Main from '../components/Main/Main'
import { AppProps } from 'next/app'

export interface TestProps {
   activeItem: string
   setActiveItem: Function
}

export default function Home(props: TestProps) {

   return (
      <>
         <Head>
            <title>Resume | Serafim Barey</title>
            <meta name='description' content='This is resume of Serafim Barey' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <link rel='icon' href='./favicon.svg' />
         </Head>
         <Header activeItem={props.activeItem} />
         <Main activeItem={props.activeItem} setActiveItem={props.setActiveItem} />
      </>
   )
}
