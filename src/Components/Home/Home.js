import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeReviews from '../HomeReviews/HomeReviews';
import './Home.css';


const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="">
            <div className="header-container">
                <div className='header-info'>
                    <h1>It's better to light a candle <br /> <span id="header-title">Than curse the darkness.</span></h1>
                    <p>It’s an exotic island escape in the beautiful mix of bright citrus, sweet florals, and spicy vanilla. Top: Citrus, Melon, Berry. Mid: Osmanthus. Base: Spicy Vanilla, Musk, Woody Notes. Top note is the initial impression of the fragrance, middle note is the main body of the scent and base is its final impression.</p>
                </div>
                <div>
                    <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8ec2a2fb/crop/026458604_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_" alt="" />
                </div>


            </div>
            <div>
                <h2 className="review-title">Customer Review(3)</h2>
                <HomeReviews></HomeReviews>


                <div className="btn-container">
                    <button onClick={() => navigate('/reviews')} className="review-btn">
                        <p>See All Reviews </p>
                        <svg id="arrow-icon" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg></button>
                </div>
            </div>
        </div>
    );
};

export default Home;