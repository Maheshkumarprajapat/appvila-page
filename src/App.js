import React, { useState, useEffect } from 'react'
import Call from './components/Call'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Ourachievement from './components/Ourachievement'
import Pricing from './components/Pricing'
import JsonData from './data/Data.json'
export default function App() {
  const [PageData, setPageData] = useState({})
  useEffect(() => {
    setPageData(JsonData)

  }, [])
  return (
    <React.Fragment>
      <Header />
      <Home data={PageData.Home} />
      <Features data={PageData.Features}/>
      <Ourachievement data={PageData.Ourachievement}/>
      <Pricing data={PageData.Pricing}/>
      <Call data={PageData.Call}/>
      <Footer/>
    </React.Fragment>
  )
}
