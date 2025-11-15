import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/header.jsx'
import MobileHeader from './components/header/mobile-header.jsx'
import Author from './components/author/author.jsx'
import Navbar from './components/navbar/navbar.jsx'

function App() {
  return (
    <section className='container dark:bg-zinc-700 bg-primary flex lg:flex-row flex-col justify-between font-MorabbaMedium mt-10'>
      <MobileHeader></MobileHeader>
      <Author></Author>
      <Header></Header>
      <Navbar></Navbar>
    </section>
  )
}

export default App
