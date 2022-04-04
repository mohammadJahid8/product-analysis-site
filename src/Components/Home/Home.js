import React from 'react';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <div className="">
            <div className="header-container">
                <div className='header-info'>
                    <h1>It is better to light a candle <br /> <span id="header-title">Than curse the darkness.</span></h1>
                    <p>It’s an exotic island escape in the beautiful mix of bright citrus, sweet florals, and spicy vanilla. Top: Citrus, Melon, Berry. Mid: Osmanthus. Base: Spicy Vanilla, Musk, Woody Notes. Top note is the initial impression of the fragrance, middle note is the main body of the scent and base is its final impression.</p>
                </div>
                <div>
                    <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8ec2a2fb/crop/026458604_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_" alt="" />
                </div>


            </div>
            <div>
                <h2 className="home-review">Customer Review(3)</h2>
                <Reviews></Reviews>
                <div className="btn-container">

                    <button className="review-btn"><p>See All Reviews</p></button>
                </div>
            </div>
        </div>
    );
};

export default Home;