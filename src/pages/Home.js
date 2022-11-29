import React from 'react'
import Banner from '../components/Banner'
import FindSites from '../components/FindSites'
import Footer from '../components/Footer'
import GetInTouch from '../components/GetInTouch'
import Header from '../components/Header'
import HowItWorks from '../components/Howitworks'
import Navbar from '../components/Navbar'
import Services from '../components/Services'

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
                <Header />
                <Services />
                <HowItWorks/>
                <FindSites/>
                <Banner/>
                <GetInTouch/>
                <Footer/>
                
            </div>

        </>
    )
}

export default Home