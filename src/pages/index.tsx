import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { KissingMeAndDima } from '@/widgets/kissing-me-and-dima'
import { Birthday } from '@/widgets/birthday'
import { PhotoGallery } from '@/widgets/photo-gallery'
import { Footer } from '@/widgets/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>🏳️‍🌈 Vitya + Dima = ❤️ 🏳️‍🌈</title>
        <meta name="description" content="🏳️‍🌈 Vitya + Dima = ❤️ 🏳️‍🌈" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <KissingMeAndDima />
      <Birthday />
      <PhotoGallery />
      <Footer />
    </>
  )
}
