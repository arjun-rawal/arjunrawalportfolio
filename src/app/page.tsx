"use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import portrait from '../assets/homeArjun.jpg'
import styles from './page.module.css'
import '../app/globals.css';
import bg from '../assets/patternBackground.png'
import Link from 'next/link'
import { useState } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";


export default function Home() {

  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    
    <body className={styles.everything}>
    <main className={styles.main}>
      <div className={styles.menuDiv}>
        
        <motion.div initial="hidden" animate="visible" variants={{hidden: {scale: 0.2,opacity: 0},visible: {scale: 1,opacity: 1,transition: {delay: 1.5}},}}className={styles.menuBar}>
        <Link href="/contact" className={styles.menuButtons}>
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
        </motion.div>
      </div>
      <div className={styles.texts}>
        <div className={styles.description}>
        <motion.div initial="hidden" animate="visible" variants={{hidden: {scale: 0.2,opacity: 0},visible: {scale: 1,opacity: 1,transition: {delay: 0.5}},}}>
          <h1 className={styles.name}>
            Arjun Rawal
          </h1>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={{hidden: {scale: 0.2,opacity: 0},visible: {scale: 1,opacity: 1,transition: {delay: 1}},}}>
            <h3 className={styles.headline}>
              Passion for Computer Science and Education
            </h3>
          </motion.div>
            {/* <Image 
            className={styles.homeImage}
            src={portrait}
            alt="Picture of Arjun"
            width={506.7}
            height={722.34}
            />      */}
        </div>
      </div>
      

    </main>
    </body>


  )
}
