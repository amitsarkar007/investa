import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AssetClassPage from './pages/AssetClassPage'
import Learning from './pages/Learning'
import Start from './pages/Start'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Contact from './pages/Contact'
import Ethics from './pages/Ethics'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start" element={<Start />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ethics" element={<Ethics />} />

            <Route path="/asset/:id" element={<AssetClassPage />} />
            <Route path="/bonds" element={<AssetClassPage assetId="bonds" />} />
            <Route path="/stocks" element={<AssetClassPage assetId="stocks" />} />
            <Route path="/funds" element={<AssetClassPage assetId="funds" />} />
            <Route path="/etf" element={<AssetClassPage assetId="etf" />} />
            <Route path="/realestate" element={<AssetClassPage assetId="realestate" />} />
            <Route path="/commodities" element={<AssetClassPage assetId="commodities" />} />
            <Route path="/crypto" element={<AssetClassPage assetId="crypto" />} />
            <Route path="/p2plending" element={<AssetClassPage assetId="p2plending" />} />
            <Route path="/collectibles" element={<AssetClassPage assetId="collectibles" />} />
            <Route path="/pension" element={<AssetClassPage assetId="pension" />} />
            <Route path="/isa" element={<AssetClassPage assetId="isa" />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
