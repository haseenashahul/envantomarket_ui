import React from 'react'
import './Home.css'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import slide1 from '../assets/slide1.jpg'
import cup from '../assets/cupcake.jpg'
import candle from '../assets/candle_cake.png'
import love from '../assets/love_cake.png'
import apple from '../assets/apple_cake.png'
import tab1 from '../assets/tab1.jpg'
import blog1 from '../assets/blogprev1.jpg'
import blog2 from '../assets/blogprev2.jpg'
import blog3 from '../assets/blogprev3.jpg'
import admin from '../assets/admin.png'
import msg from '../assets/message.png'
import two_cup from '../assets/two_cup.png'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="home" style={{ backgroundImage: `url(${slide1})` }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,128L720,320L1440,160L1440,320L720,320L0,320Z"></path></svg>
        <div className="home_inside">
          <h2>
            <span>Welcome to</span>
            <br />Cake & Bake
          </h2>
          <p>We offer high quality , delicious , "from scratch" cakes! See our menu for more information</p>
          <button>OUR MENU</button>
        </div>
      </div>

      <section className='madesec'>
        <div className="madesectop">
          <div className="madesectop_left">
            <h2>Made with love</h2>
            <p className='high_p'>High Quality services since 2001, qui fabulas definitiones at, ei nibh offendit mel. Eius comprehensam ex est.Pri ei laudem invenire, has ex regione sapientem</p>
            <p className='lorem_p'>Lorem ipsum dolor sit amet, per no malorum aliquam utroque, vim legere eleifend an, malis delicatissimi vel te. Pro fuisset splendide vulputate an, quo eu eripuit nominati. Sit enim eius laoreet te, qui fabulas definitiones at, ei nibh offendit mel. Eius comprehensam ex est.Pri ei laudem invenire, has ex regione sapientem.</p>
          </div>
          <div className="madesectop_right">
            <img src={cup} alt="" />
          </div>

        </div>
        <div className="madesecbottom">
           <div className="bottom_card">
            <img src={candle} alt="" />
            <h5>Birthday Cakes</h5>
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing etit.Integer dictum malesuada.</p>
            <button>READ MORE</button>
           </div>
           <div className="bottom_card">
            <img src={love} alt="" />
            <h5>Special Cakes</h5>
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing etit.Integer dictum malesuada.</p>
            <button>READ MORE</button>
           </div>
           <div className="bottom_card">
            <img src={apple} alt="" />
            <h5>Cupcakes & Sweets</h5>
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing etit.Integer dictum malesuada.</p>
            <button>READ MORE</button>
           </div>
        </div>
      </section>

     <div className="inside_page">
        <div className="inside_wrapper_container">
          <div className="ul_nav">
            <button className='btnn1'>Why Choose Us?</button>
            <button className='btnn2'>Our Philosophy</button>
            <button className='btnn3'>Quality Ingredients</button>


          </div>
         <div className="tab_content">
          <div className="col_md">
             <img className='img31' src={tab1} alt="" />

          </div>
          <div className="right_contnt">
            <h3>Why Choose us?</h3>
            <p>Aliquam erat volutpat In id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In  aliquet magna nec  lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
            <strong>Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas at arcu risus scelerisque laoree.</strong>
            <p>Felis tiam non metus Placerat a ultricies a, posuere lorem ipseut lincas psuiem t volut pat phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem minus id omnis a nibh fusce mollis viverra elit</p>

          </div>

         </div>
         
        </div>

      </div>

      <section className='latest_blogsec'>
        <div className="latest_inside">
          <h2>Latest Blog Posts</h2>
          <div className="latest_inside_top">
             <div className="latest_box">
                <div className="latest_box_top">
                  <img src={blog1} alt="" />
                  <div class="text-overlay">
                    <span className='date'>13</span>
                    <span className='month'>JAN</span>
                  </div>
                </div>
                <div className="latest_box_bottom">
                  <h5>The Best pastries for easter time</h5>
                  <div className="admin_div">
                    <img src={admin} alt="" />
                    <span>admin</span>
                    <img src={msg} alt="" />
                    <span>7</span>
                  </div>
                  <div className="line_div"></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ad magni, nesciunt obcaecati possimus...</p>
                  <button>READ MORE</button>
                </div>
             </div>
             <div className="latest_box">
                <div className="latest_box_top">
                  <img src={blog2} alt="" />
                  <div class="text-overlay">
                    <span className='date'>07</span>
                    <span className='month'>FEB</span>
                  </div>
                </div>
                <div className="latest_box_bottom">
                  <h5>Order our new Red Velvet Cake</h5>
                  <div className="admin_div">
                    <img src={admin} alt="" />
                    <span>admin</span>
                    <img src={msg} alt="" />
                    <span>7</span>
                  </div>
                  <div className="line_div"></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ad magni, nesciunt obcaecati possimus...</p>
                  <button>READ MORE</button>
                </div>
             </div>
             <div className="latest_box">
                <div className="latest_box_top">
                  <img src={blog3} alt="" />
                  <div class="text-overlay">
                    <span className='date'>13</span>
                    <span className='month'>FEB</span>
                  </div>
                </div>
                <div className="latest_box_bottom">
                  <h5>Order your Valentines day Cake</h5>
                  <div className="admin_div">
                    <img src={admin} alt="" />
                    <span>admin</span>
                    <img src={msg} alt="" />
                    <span>7</span>
                  </div>
                  <div className="line_div"></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ad magni, nesciunt obcaecati possimus...</p>
                  <button>READ MORE</button>
                </div>
             </div>
          </div>
          <div className="latest_inside_bottom">
            <div className="latest_bottom_left">
              <h5>Custom Orders</h5>
              <p>Laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
              <p>Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas at arcu risus scelerisque laoree.</p>
              <button>CONTACT US</button>
            </div>
            <div className="latest_bottom_right">
              <img src={two_cup} alt="" />
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default Home