import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Love1 from '@/sussets/love1.jpeg'
import Love2 from '@/sussets/love2.jpeg'
import Love3 from '@/sussets/love3.jpeg'
import Love4 from '@/sussets/love4.jpeg'
import Love5 from '@/sussets/love5.jpeg'
import Love6 from '@/sussets/love6.jpeg'
import Love7 from '@/sussets/love7.jpeg'
import Love8 from '@/sussets/love8.jpeg'
import Love9 from '@/sussets/love9.jpeg'
import Love10 from '@/sussets/love10.jpeg'
import Love12 from '@/sussets/love12.jpeg'
import Love13 from '@/sussets/love13.jpeg'
import { Balls } from '@/widgets/photo-gallery/balls'

export function PhotoGallery() {
  const [scrollPosition, setScrollPosition] = React.useState(0)
  const [windowHeight, setWindowHeight] = React.useState(1080)
  const progress = Math.max(0, Math.min(1, (scrollPosition - windowHeight * (5-1)) / (windowHeight * 2)))

  React.useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [setScrollPosition])

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)
      const listener = () => {
        setWindowHeight(window.innerHeight)
      }
      window.addEventListener('resize', listener)
      return () => window.removeEventListener('resize', listener)
    }
  }, [typeof window])

  

  return (
    <div className={styles.photoGallery} style={{ '--progress': progress }}>
      <div className={styles.row1}>
        <Image src={Love1} alt='' />
        <Image src={Love2} alt='' />
        <Image src={Love3} alt='' />
        <Image src={Love4} alt='' />
        <Image src={Love5} alt='' />
        <Image src={Love6} alt='' />
      </div>
      <div className={styles.row2}>
        <Image src={Love7} alt='' />
        <Image src={Love8} alt='' />
        <Image src={Love9} alt='' />
        <Image src={Love10} alt='' />
        <Image src={Love12} alt='' />
        <Image src={Love13} alt='' />
      </div>
      <Balls />
    </div>
  )
}