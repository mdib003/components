import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
/* import { Button1 } from '@component/src/components/Button/Button1';
import { Button2 } from '@component/src/components/Button/Button2';
import { Button3 } from '@component/src/components/Button/Button3';
 */


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Buttons</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
       {/*  <Button1></Button1>
        <Button2></Button2>
        <Button3></Button3> */}
      </main>
    </>
  )
}
