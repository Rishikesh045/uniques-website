import React from 'react';
import backgroundImage from '../Assets/GDG.jpg'; // Import your background image

const Hero = () => {
    const heroStyle = {
        position: 'relative', // Add relative positioning to the section
        width: '100%',
        height: '65vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'whitesmoke',
        fontSize: '1.1em',
        textAlign: 'center',
    };

    const overlayStyle = {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity and color as needed
    };

    return (
        <div>
            <section style={heroStyle}>
                <div style={overlayStyle}></div> {/* Add the overlay */}
                <img
                    src={backgroundImage}
                    alt="Background"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                />
                <h2 style={{ fontSize: '1.1em', color: "white" }}>Google Developer Students Club</h2>
                <h3 style={{ fontSize: '0.7em' }}>SVIET</h3>
            </section>
        </div>
    );
};

export default Hero;
