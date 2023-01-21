"use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import portrait from '../../assets/aboutMe1.jpeg'
import portrait1 from '../../assets/aboutMe2.jpg'
import portrait2 from '../../assets/aboutMe3.jpg'
import portrait3 from '../../assets/aboutMe4.jpg'
import portrait4 from '../../assets/aboutMe5.png'
import styles from '../../app/page.module.css'
import '../../app/globals.css'
import bg from '../assets/patternBackground.png'
import Link from 'next/link'
import { motion } from "framer-motion";


export default function Home() {

  return (
    <body className={styles.everything}>
  <main className={styles.main}>
    <div className={styles.menuDiv}>
      <div className={styles.menuBar}>
      <Link href="/contact" className={styles.menuButtons}>
          Contact
      </Link>
      <Link href="/projects" className={styles.menuButtons}>       
          Projects
      </Link>
      <Link href="/aboutMe" style={{['backgroundColor']:'rgb(215, 215, 177)'}} className={styles.menuButtons}>
          About Me
      </Link>
      <Link href="/" className={styles.menuButtons}>
          Home 
      </Link>
      </div>
    </div>
      <div className={styles.imageHeader}>
        <motion.div initial="hidden" animate="visible" variants={{hidden: {scale: 0.2,opacity: 0},visible: {scale: 1,opacity: 1,transition: {delay: 0.2}},}}>
            { <Image 
            className={styles.homeImage}
            src={portrait}
            alt="Picture of Arjun"
            width={228.9}
            height={240.1333}
            />}
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={{hidden: {scale: 0.2,opacity: 0},visible: {scale: 1,opacity: 1,transition: {delay: 0.4}},}}>
            {<Image 
            className={styles.homeImage}
            src={portrait1}
            alt="Picture of Arjun"
            width={201.9}
            height={240.1333}
            />}
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={{hidden: {scale: 0.2,opacity: 0},visible: {scale: 1,opacity: 1,transition: {delay: 0.6}},}}>
            {<Image 
            className={styles.homeImage}
            src={portrait2}
            alt="Picture of Arjun"
            width={248.9}
            height={240.1333}
            />}
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={{hidden: {scale: 0.2,opacity: 0},visible: {scale: 1,opacity: 1,transition: {delay: 0.8}},}}>
            {<Image 
            className={styles.homeImage}
            src={portrait3}
            alt="Picture of Arjun"
            width={409.83}
            height={240.1333}
            />}
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={{hidden: {scale: 0.2,opacity: 0},visible: {scale: 1,opacity: 1,transition: {delay: 1}},}}>
            {<Image 
            className={styles.homeImage}
            src={portrait4}
            alt="Picture of Arjun"
            width={259.83}
            height={240.1333}
            />}
        </motion.div>
      </div> 

      <p style={{paddingTop:"1500px"}}></p>
    </main>
    </body>


  )
}
