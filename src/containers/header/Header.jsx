import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text">Decrease returns and 
            increase sales
            </h1>
            <p>
                Lets's find out how we can incrimentally drive sales in your
                retail organization. We use state of the art technology to allow 
                your customers to measure themselves from home. 
            </p>

            <div className="gpt3__header-content__input">
                <input type="email" placeholder="Your email address" />
                <button type="button">Apply</button>
            </div>

            <div className="gpt3__header-content__people">
                <img src={people} alt="people"/>
                <p>900 people applied within the last 2 weeks</p>
            </div>
        </div>

        <div className="gpt3__header-image">
            <img src={ai} alt="ai"/>
        </div>
    </div>
);

export default Header;
