import React from 'react'
import Hero from '../Components/Hero'
import Company from '../Components/Company'
import Capabilities from '../Components/Capabilities'
import Content from '../Components/Vision'
import Uzone from '../Components/Uzone'
import Objectives from '../Components/Objectives'
import Clients from '../Components/Clients'
import Gif from "../Components/Gif"
import HomeHeader from '../Components/HomeHeader'
// import PastEvents from '../Components/PastEvents'


const Home = () => {
    return (
        <div>
            <HomeHeader />
            {/* <Hero /> */}
            <Gif />
            <Company />
            <Capabilities />
            <Content />
            <Uzone />
            <Objectives />
            <Clients />
            {/* <PastEvents /> */}

        </div>
    )
}

export default Home