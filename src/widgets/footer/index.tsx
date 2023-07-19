import Link from 'next/link'
import styles from './styles.module.scss'
import Heart from '@/sussets/heart.png'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href='https://instagram.com/vityaczech'>🐱 я</Link>
      <Image src={Heart} height={20} quality={100} alt='love' />
      <Link href='https://instagram.com/devio.10'>ты 🐰</Link>
    </footer>
  )
}