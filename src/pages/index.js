import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Gallery from './qcomps/gallery_props.js'
import ProfileMistake from './qcomps/profile_mistake.js'
import FirstComp from './qcomps/firstComp.js'
import Bios from './qcomps/bios.js'
import TodoList from './qcomps/todos.js'

export default function Home() {
  return (
    <div className={styles.main}>
        <Gallery />
        <ProfileMistake />
        <FirstComp />
        <Bios />
        <TodoList />
    </div>
  )
}
