import React from 'react'
import Hero from '../Components/Hero'
import Map from '../Components/Map'
import Form from '../Components/Form'
import Contacthead from '../Components/Contacthead'
// import Baat from '../Components/Baat'
// import NewsLetter from '../Components/NewsLetter'

const Contact = () => {
    return (
        <div>
            <Contacthead />
            <Form />
            {/* <NewsLetter /> */}
            <Map />
        </div>
    )
}

export default Contact