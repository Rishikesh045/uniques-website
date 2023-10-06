import React from 'react'

const Map = () => {
    return (
        <div className='contaienr-fluid'>
            <section class="iframe">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.858705313294!2d76.81301447638533!3d30.637939390206284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb263d849a5b%3A0xdc7959b98f0394e!2sVIP%20Rd%2C%20Zirakpur%2C%20Punjab%20140603!5e0!3m2!1sen!2sin!4v1684844745369!5m2!1sen!2sin"
                    width="100%" height="600" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>
    )
}

export default Map