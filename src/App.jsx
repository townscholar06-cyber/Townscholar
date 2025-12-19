import React from 'react'
import Hero from './components/Hero'
import Daddy from './components/Daddy'
import Story from './components/Story'
import cursor from '../src/assets/images/cursor.png'
import Cursor from './components/Cursor'
import Price from './components/Price'
import Footer from './components/Footer'
import Header from './components/Header'
import { Dummy } from './components/Dummy'

export default function App() {
  return (
    <div className="bg-slate-50 overflow-hidden">
      <Header/>
      <Hero />
      <Daddy />
      <Story />
      <Cursor />
      <Price />
      <Footer/>

      {/* <Dummy/> */}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        * {
          cursor:
            url(${cursor.src}) 8 8,
            auto !important;
        }

        html,
        body {
          cursor:
            url(${cursor.src}) 8 8,
            auto !important;
        }

        ::selection {
          cursor:
            url(${cursor.src}) 8 8,
            auto !important;
        }

        @media (hover: none) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </div>
  )
}
