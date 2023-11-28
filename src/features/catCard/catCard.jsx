import React from 'react';
import './catCard.css';
import { useState } from 'react';

export const CatCard = ({product}) => {
    const [selected, setSelected] = useState(false);
    const [hovered, setHovered] = useState(true);

    const select = () => selected ? 'Selected' : 'Default';
    const compound = () => selected ? 'Default' : 'Selected';
    const handleMouseEvent = () => {
        if (selected) {
            setHovered((currentValue) => !currentValue);
        }
    };
    const handleClick = () => {
        setSelected((currentValue) => !currentValue);
        setHovered((currentValue) => currentValue = true);
        
    };
    return (
        <div className='catCard' >
            <div className={`${product.isAvailable ? '' : 'notAvailable'} catCard_${select()}`}  onClick={handleClick} onMouseLeave={handleMouseEvent}>
                <p className={`catCurdSubtitle ${hovered ? 'activePgaragraph' : 'nonePgaragraph'}`}>Сказочное заморское явство</p>
                <p className={`catCurdSubtitle redPgaragraph ${hovered ? 'nonePgaragraph' : 'activePgaragraph'}`} >Котэ на одобряет?</p>
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
                        <span className={`productAvailable_${compound()}`} >Чего cидишь. порадуй котэ, <a href='./'>купи</a></span>
                    )}
                    {product.isAvailable && selected && (<span className={`productAvailable_${select()}`} >{product.comment}</span>)}
                    {!product.isAvailable && (
                        <span className='productNotAvailable'>
                            Печалька, {product.title} закончился.
                        </span>
                    )}
                </p>
        </div>
    )
}