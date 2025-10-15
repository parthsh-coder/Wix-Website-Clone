import React from 'react'
import './HeroSeven.css'
import img from '../../assets/hero-seven-img.png'
const HeroSeven = () => {
    return (
        <>
            <div className='HeroSeven'>
                <div className='hero-seven-container'>
                    <div className='hero-seven-text'>
                        <div className="hero-seven-text-head">
                            <h2>Explore Our Pricing Options</h2>
                        </div>
                        <div className="hero-seven-text-para">
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                        <div className="hero-seven-text-button">
                            <button>See More</button>
                        </div>
                    </div>
                    <div className='hero-seven-card'>
                        <div className="hero-seven-card-box1">
                            <div className="best-value">Best Value</div>
                            <h2>Premium</h2>
                            <h3>US$</h3>
                            <span>50</span>
                            <p>Every month</p>
                            <p>Use this area to describe one of your memberships.</p>
                            <p>Valid for 12 months</p>
                            <button>Get Started</button>
                        </div>
                        <div className="hero-seven-card-box2">
                            <ul>
                                <li>I'm a benefit</li>
                                <li>I'm a benefit</li>
                                <li>I'm a benefit</li>
                                <li>I'm a benefit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <img src={img} alt="" />
        </>
    )
}
export default HeroSeven