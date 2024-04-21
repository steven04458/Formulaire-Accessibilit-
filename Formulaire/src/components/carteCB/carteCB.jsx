import React, { useEffect, useState } from 'react';
import "./carteCB.css";
import CardLogo from "../../assets/card-logo.svg";

const CardFront = ({ cardNumber , cardName, expiryDateMM, expiryDateYY}) => {
    const [displayedCardNumber, setDisplayedCardNumber] = useState('0000 0000 0000 0000');

    useEffect(() => {
        let timeout;
        if (cardNumber && cardNumber.length > 0) {
            for (let i = 0; i < cardNumber.length; i++) {
                timeout = setTimeout(() => {
                    setDisplayedCardNumber(prevNumber => {
                        const newNumber = prevNumber.slice(0, i) + cardNumber[i] + prevNumber.slice(i + 1);
                        return newNumber;
                    });
                }, (i + 1) * 10); // Change every 500 milliseconds (adjust as needed)
            }
        }
        return () => clearTimeout(timeout);
    }, [cardNumber]);
    return (
        <div className="card-background flex-wrap" aria-hidden='true'>
            <div className='cardLogoFront'>
                <img src={CardLogo} alt="" />
            </div>
            <div className='flex-wrap cardNumberFront'>
                <p className='cardNumberFront'>{displayedCardNumber}</p>
                <div className='cardLogoFront'>
                    <p>{cardName || 'Jane Appleseed'}</p>
                    <p>{expiryDateMM || '00'}/{expiryDateYY || '00'}</p>
                </div>
            </div>
        </div>
    )
};

export default CardFront;