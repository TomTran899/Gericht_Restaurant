import React from 'react'
import { SubHeading } from '../../components'

import { images } from '../../constants'
import './Header.css'

const Header = () => (
    <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
            <SubHeading title="Chase the new flavour" />
            <h1 className="app__header-h1">The Key to Fine Dining</h1>
            <p className="p__opensans" style={{ margin: '2rem 0' }}>
                A centrally located Indian restaurant, perfect for eating before or after the cinema or a show. In
                summer enjoy your meal in the beautiful garden. The most popular dishes are lamb and chicken cooked with
                mild, medium or hot spices. For brave customers there is extra hot!
            </p>
            <button className="custom__button" type="button">
                Explore menu
            </button>
        </div>
        <div className="app__wrapper_img">
            <img src={images.welcome} alt="header img" />
        </div>
    </div>
)

export default Header
