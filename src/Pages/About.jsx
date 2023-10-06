import React from 'react'
import Hero from '../Components/Hero'
import Team from '../Components/Team'
import Carousel from '../Components/Carousel'
import Trainer from '../Components/Trainer'
import Clients from '../Components/Clients'
import Uzone from '../Components/Uzone'
import Founder from '../Components/Founder'
import Sviet from '../Components/Sviet'
import Vision from '../Components/Vision'
import Top from '../Components/Top'
import Step from "../Components/Step"
import Aboutheader from '../Components/Aboutheader'


// import Clients from '../Components/Clients'


const About = () => {
    return (
        <div>
            <Aboutheader />
            <Sviet />
            <Vision />
            <Uzone />
            <Founder />
            <Step />
            <Top />
            <Team />
            <Carousel />
            <Clients />

            {/* <Clients /> */}


        </div>
    )
}

export default About