import React from 'react'
import { Footer, Navbar } from './components'
import runningpine from '../images/running-pineapple (1).webp'
import pine from '../images/Pineapple background.webp'
import subheader from '../images/logo.png'
import cup from '../images/base-1.png'
function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <div className='home-body'>
            <div className="subheader">
                {/* <img src={subheader} alt="" /> */}
                <h3>Pine Twist</h3>
            </div>

            <div className="home-item">
                <div className='img-container'>
                <img src={runningpine} alt="" />
                </div>
                <div className='unique-item'>
                    <h3>Enjoy Organic Perfect Juice Experience</h3>
                    <p>Nestled In The City Of Kumasi, Ghana, Our Expertise Lies In The Art Of Meticulously Handcrafting Exquisite And Rejuvenating Organic Pineapple Juice, Ensuring Each Sip Is A Delightful Journey Of Flavor And Freshness.</p>
                    
                </div>
            </div>
    <br />
  
            <h2>Riddles Index Pineapple</h2>
            <div className="home-item">
                <div className='img-container'>
                    <img src={pine} alt="" />
                </div>
                <div className='unique-item'>
                    {/* <h3>Enjoy Organic Perfect Juice Experience</h3> */}
                    <div className='item-info'>
                        <div className="item-icon">
                         <img src={cup} alt="" />
                        </div>
                        <div className='item-text'>
                            <span>I Am Pineapple</span>
                            <p>Golden Exterior, Crowned On Top, Sweet And Tangy, You Can't Stop. Cut Me Open, Taste My Core, What Am I? You'll Want More!.</p>
                            
                        </div>
                        
                    </div>



                    <div className='item-info'>
                        <div className="item-icon">
                        <img src={cup} alt="" />

                        </div>
                        <div className='item-text'>
                            <span>I Am Pineapple</span>
                            <p>I'm Spiky On The Outside, Sweetness On The Inside Resides. Tropical Treasure, Delicious And Fine, Guess My Name, It's Quite Divine!.</p>

                        </div>
                        
                    </div>


                    <div className='item-info'>
                        <div className="item-icon">
                        <img src={cup} alt="" />

                        </div>
                        <div className='item-text'>
                            <span>I Am Pineapple</span>
                            <p>Crowned With Leaves, I Stand Tall, Juicy Goodness, I'll Enthrall. Not An Apple, Nor A Pear, What Am I? Do You Dare?</p>

                        </div>
                        
                    </div>

                </div>
            </div>

        </div>


        <Footer/>
    </div>
  )
}

export default Home