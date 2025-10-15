import React from 'react'
import './HeroFive.css'

import logo from '../../assets/hero-five-img.jpg'
import boximg1 from '../../assets/hero-five-box-img1.png'
import boximg2 from '../../assets/hero-five-box-img2.png'
import boximg3 from '../../assets/hero-five-box-img3.png'
import boximg4 from '../../assets/hero-five-box-img4.png'
import boximg5 from '../../assets/hero-five-box-img5.png'
import boximg6 from '../../assets/hero-five-box-img6.png'
import boximg7 from '../../assets/hero-five-box-img7.png'
import boximg8 from '../../assets/hero-five-box-img8.png'

const HeroFive = () => {
    return (
        <div className='HeroFive'>
            <img src={logo} alt="" />
            <div className="hero-five-box">
                <div className="hero-five-box-content">
                    <div className="hero-five-box-content-head">
                        <h2>Trusted Among Industry Leaders</h2>
                    </div>
                    <div className="hero-five-box-content-para">
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>
                    <div className="hero-five-box-img">
                        <div className="hero-five-box-img-container-one">
                            <img src={boximg1} alt="" />
                            <img src={boximg2} alt="" />
                            <img src={boximg3} alt="" />
                            <img src={boximg4} alt="" />
                        </div>
                        <div className="hero-five-box-img-container-two">
                            <img src={boximg5} alt="" />
                            <img src={boximg6} alt="" />
                            <img src={boximg7} alt="" />
                            <img src={boximg8} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroFive