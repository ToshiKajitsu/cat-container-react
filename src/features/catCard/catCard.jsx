import React from 'react';
import './catCard.css';
import { useState } from 'react';

export const CatCard = ({product}) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        if (product.isAvailable) {
            setSelected((state) => !state)
        };
    };
    return (
        <div className='catCard' >
            <div className="catCardMain" onClick={handleClick}>
                <p>Сказочное заморское явство</p>
                <h2>Нямушка</h2>
                <h3>{product.title}</h3>
                <div className="catCardDescription">
                    {product.description}
                </div>
                <div className="catCardValue">
                    <p className="catCardWeight">{product.weight}</p>
                    <p className="catCardMeasure">кг</p>
                </div>
                {/* <p className='catCardComment'>
                    {product.isAvailable && !selected (
                        <span>Чего cидишь. порадуй котэ, <a href='./'>купи</a></span>
                    )}
                    {product.isAvailable && selected && <span>{product.comment}</span>}
                    {!product.isAvailable && (
                        <span>
                            Печалька, {product.title} закончился.
                        </span>
                    )}
                </p> */}
            </div>
        </div>
    )
}