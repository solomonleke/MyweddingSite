import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ScrollPage from '../Pages/ScrollPage'
import OurLoveStory from '../Pages/OurLoveStory'
import Faq from '../Pages/Faq'
import GiftUs from '../Pages/GiftUs'
import WeddingInfo from '../Pages/WeddingInfo'
import Moments from '../Pages/capturedMoments/Moments'
import PreWedding from '../Pages/capturedMoments/PreWedding'
import Proposal from '../Pages/capturedMoments/Proposal'
import Ourfriends from '../Pages/OurFriendsExpanded/Ourfriends'



export default function IndexRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/our-love-story' element={<OurLoveStory/>}/>
            <Route path='/faqs' element={<Faq/>}/>
            <Route path='/gift-us' element={<GiftUs/>}/>
            <Route path='/moments' element={<Moments/>}/>
            <Route path='/wedding-info' element={<WeddingInfo/>}/>
            <Route path='/moments' element={<Moments/>}/>
            <Route path='/preWedding' element={<PreWedding/>}/>
            <Route path='/proposal' element={<Proposal/>}/>
            <Route path='/Ourfriend/:id' element={<Ourfriends/>}/>
        </Routes>
    </BrowserRouter>
  )
}
