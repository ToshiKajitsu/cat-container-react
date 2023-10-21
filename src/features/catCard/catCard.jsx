import React from 'react';
import './catCard.css';
import { useState } from 'react';

export const CatCard = ({product}) => {
    const [selected, setSelected] = useState(false);

    // const handleClick = () => {
    //     if (product.isAvailable) {
    //         setSelected((state) => !state)
    //     };
    // };
    const setClass = () => {

    }
    return (
        <div className='catCard' >
            <div className="catCardMain" onClick={setClass}>
                <p className='catCurdSubtitle'>Сказочное заморское явство</p>
                <h2 className='catCardTitle'>Нямушка</h2>
                <h3 className='catCardType'>{product.title}</h3>
                <div className="catCardDescription">
                    {product.description.map((str) => <p key={str}>{str}</p>)}
                </div>
                <div className="catCardValue">
                    <p className="catCardWeight">{product.weight}</p>
                    <p className="catCardMeasure">кг</p>
                </div>
                {/* <p className='catCardComment'>
                    {product.isAvailable (
                        <span>Чего cидишь. порадуй котэ, <a href='./'>купи</a></span>
                    )}
                    {product.isAvailable && <span>{product.comment}</span>}
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