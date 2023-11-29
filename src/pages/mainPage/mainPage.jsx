import React from 'react';
import './mainPage.css';
import { DATA } from '../../constants/data';
import { CatCard } from '../../features/catCard/catCard';
import { FeedingTheCat } from '../../shared/feedingTheCat/feedingTheCat';

export const MainPage = () => {
    const card = DATA.map((products) => <CatCard product={products} key={products.id} /> )
    return (
        <div className="mainApp">
            <FeedingTheCat />
            <div className='mainContainer'>{card}</div>
        </div>
    )
}