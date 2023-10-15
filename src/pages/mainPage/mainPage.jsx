import React, { useEffect, useState } from 'react';
import './mainPage.css';
import { DATA } from '../../constants/data';
import { CatCard } from '../../features/catCard/catCard';

export const MainPage = () => {
    const card = DATA.map((products) => <CatCard product={products} key={products.id} /> )
    return (
        <div className="mainApp">
            {card}
        </div>
    )
}