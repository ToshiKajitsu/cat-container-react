import React from 'react';
import './catCard.css';
import { useState } from 'react';

export const CatCard = ({product}) => {
    const [selected, setSelected] = useState(false);

    const select = () => selected ? 'Selected' : 'Default';
    const compound = () => selected ? 'Default' : 'Selected';

    const handleClick = () => {
        setSelected((currentValue) => !currentValue);
    };
    return (
        <div className='catCard' >
            <div className={`catCard_${select()}`}  onClick={handleClick}>
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
            </div>    
                <p className='catCardComment'>
                    {product.isAvailable && (
                        <span className={`prodectAvailable_${compound()}`} >Чего cидишь. порадуй котэ, <a href='./'>купи</a></span>
                    )}
                    {product.isAvailable && selected && (<span className={`prodectAvailable_${select()}`} >{product.comment}</span>)}
                    {!product.isAvailable && (
                        <span>
                            Печалька, {product.title} закончился.
                        </span>
                    )}
                </p>
        </div>
    )
}