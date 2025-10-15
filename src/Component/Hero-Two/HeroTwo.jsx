import React from 'react'
import './HeroTwo.css'
import img from '../../assets/hero-two-img.jpg'
const HeroTwo = () => {
    return (
        <>
            <div className='herotwo'>
                <img src={img} alt="" />
                <div className="herotwo-box">
                    <div className="hero-big-text">
                        <h2>With the Right Software, Great Things Can Happen</h2>
                    </div>
                    <div className="hero-p-text">
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroTwo