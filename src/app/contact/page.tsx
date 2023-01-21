import Image from 'next/image'
import { Inter } from '@next/font/google'
import portrait from '../assets/homeArjun.jpg'
import styles from '../../app/page.module.css'
import '../../app/globals.css'
import bg from '../assets/patternBackground.png'
import Link from 'next/link'
export default function Home() {

  return (
    <body className={styles.everything}>
  <main className={styles.main}>
    <div className={styles.menuDiv}>
      <div className={styles.menuBar}>
      <Link href="/contact" style={{['backgroundColor']:'rgb(215, 215, 177)'}} className={styles.menuButtons}>
          Contact
      </Link>
      <Link href="/projects" className={styles.menuButtons}>       
          Projects
      </Link>
      <Link href="/aboutMe" className={styles.menuButtons}>
          About Me
      </Link>
      <Link href="/" className={styles.menuButtons}>
          Home 
      </Link>
      </div>
    </div>
     
    </main>
    </body>


  )
}
