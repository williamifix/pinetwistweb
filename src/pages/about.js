import React from 'react'
import { Navbar, Footer } from './components'
import subheader from '../images/logo.png'
import icon1 from '../images/icon-1.png'
import icon2 from '../images/story-2.png'
import icon3 from '../images/woman-drinking.jpg'
import icon4 from '../images/vitaminC.png'
import icon5 from '../images/home1-bg.jpg'
import icon6 from '../images/snapchat_logo.png'
function About() {
  return (
    <div className='home about'>
        <Navbar/>
        <div className='home-body'>
            <div className="subheader">
                {/* <img src={subheader} alt="" /> */}
                <h3>What, Who, Where, How</h3>
            </div>

            <div className="about-items">
                <div className="item">
                    <img src= {icon1} alt="" />
                    <span className='item-name'>
                        Something
                    </span>
                    <div className="icons"> 
                        <span>XXXXXXX</span>
                    </div>
                    <p>Savor The Taste Of Ghana With Our Organic Pineapple Juice, Crafted In Kumasi. We Source Locally And Prioritize Purity For A Refreshing And Authentic Experience.</p>

                </div>
                <div className="item">
                    <div className='item-img-container'>
                    <img src= {icon2} alt="" />

                    </div>
                    <span className='item-name'>
                        Something
                    </span>
                    <div className="icons"> 
                        <span>XXXXXXX</span>
                    </div>
                    <p>We Serve Ghanaian Customers From North To South But Especially In The Central Regions. We Believe In The Philosophy Of Feeding Our Customers With The Best Pure & Organic Natural Juice For A Healthy Life</p>


                </div>
                <div className="item">
                <div className='item-img-container'>
                    <img src= {icon3} alt="" />

                </div>
                    <span className='item-name'>
                        Something
                    </span>
                    <div className="icons"> 
                        <span>XXXXXXX</span>
                    </div>
                    <p>We Take Pride In Using Only The Finest Ingredients In Our Products. Our Organic Pineapple Juice Is Crafted Using Locally Sourced Pineapples, Clean Water, And Absolutely No Added Sugar. Occasionally, We Enhance Our Offerings With The Invigorating Zest Of Ginger For Our Mixed Products. Rest Assured, Each Sip Embodies The Essence Of Purity And Natural Goodness.</p>

                </div>
                <div className="item">
                <div className='item-img-container'>
                    <img src= {icon4} alt="" />

                </div>
                    <span className='item-name'>
                        Something
                    </span>
                    <div className="icons"> 
                        <span>XXXXXXX</span>
                    </div>
                    <p>As Part Of Our Commitment To Upholding The Highest Standards Of Product Quality And Safety, We Would Like To Remind Everyone Of The Importance Of Adhering To Good Practices And Thorough Inspection Protocols. Our Customers Trust Us To Deliver Products Of Exceptional Quality, And It Is Our Collective Responsibility To Ensure That Every Item Leaving Our Facilities Meets Or Exceeds Their Expectations.</p>

                </div>
                <div className="item">
                <div className='item-img-container'>
                    <img src= {icon5} alt="" />

                </div>
                    <span className='item-name'>
                        Something
                    </span>
                    <div className="icons"> 
                        <span>XXXXXXX</span>
                    </div>
                    <p>Our Packaging Involves Filling Neat Bottles With Our Premium Product, Tightly Sealing Each One For Freshness, And Attaching Our Distinctive Logo, Ensuring Quality And Brand Integrity.</p>

                </div>
                <div className="item">
                <div className='item-img-container'>
                    <img src= {icon6} alt="" />

                </div>
                    <span className='item-name'>
                        Something
                    </span>
                    <div className="icons"> 
                        <span>XXXXXXX</span>
                    </div>
                    <p>We Are Committed To Providing Prompt Assistance And Ensuring Your Needs Are Met Efficiently. Thank You For Choosing Us.
For Urgent Orders, Please Do Not Hesitate To Reach Out To Us Via The Following Links:
. WhatsApp ` Snapchat</p>

                </div>
            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default About