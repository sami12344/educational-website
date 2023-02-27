import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/common/heading/Header'
import Hero from '@/components/Home/hero/Hero'



export default function Home() {
  return (
    <>
      <Head>
        <title>Academia</title>
        <meta name="description" content="Created by Sami Islam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
<Header />
<Hero />
      </main>
    </>
  )
}
