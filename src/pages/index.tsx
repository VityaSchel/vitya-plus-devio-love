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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <KissingMeAndDima />
      <Birthday />
      <PhotoGallery />
      <Footer />
    </>
  )
}
