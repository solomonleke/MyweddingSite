import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ScrollPage from '../Pages/ScrollPage'
import OurLoveStory from '../Pages/OurLoveStory'
import Faq from '../Pages/Faq'
import GiftUs from '../Pages/GiftUs'
import WeddingInfo from '../Pages/WeddingInfo'



export default function IndexRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/our-love-story' element={<OurLoveStory/>}/>
            <Route path='/faqs' element={<Faq/>}/>
            <Route path='/gift-us' element={<GiftUs/>}/>
            <Route path='/wedding-info' element={<WeddingInfo/>}/>

        </Routes>
    </BrowserRouter>
  )
}
