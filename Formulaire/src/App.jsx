import React, { useState } from 'react';
import './App.css'
import CardFront from './components/carteCB/carteCB.jsx'
import CardBack from './assets/bg-card-back.png'
import IconCompl from './assets/icon-complete.svg'

function App() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDateMM: '',
    expiryDateYY: '',
    cvv: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };


  return (
    <>
      <div className='content'>
        <div className='left-background' aria-hidden='true'></div>
        <img src={CardBack} alt="" className='CardBack' aria-hidden='true'/>
        <CardFront cardNumber={formData.cardNumber} cardName={formData.cardName} expiryDateMM={formData.expiryDateMM} expiryDateYY={formData.expiryDateYY} />
        <div className='formulaire'>
          
          <form className="flex-wrap" onSubmit={handleSubmit} style={{ display: submitted ? 'none' : 'flex' }}>
              <div className="flex-wrap">
                <label htmlFor="card_name">Cardholder Name:</label>
                <input type="text" id="card_name" name="cardName" value={formData.cardName} onChange={handleChange} placeholder="e.g. Jane Appleseed" required/>
              </div>

              <div className="flex-wrap">
                <label htmlFor="card_number">Card Number:</label>
                <input type="number" id="card_number" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="e.g. 1234 5678 9123 0000" required aria-describedby='cardNumberDesc'/>
                <span id='cardNumberDesc'>Enter your card number</span>
              </div>
              
              <div className='expiry-date'>
                <label htmlFor="expiry_date">Exp. Date (MM/YY)</label>
                <div className='date'>
                  <input type="number" max="99" id="expiry_date_MM" name="expiryDateMM" value={formData.expiryDateMM} onChange={handleChange} placeholder="MM" required aria-describedby='expiryDateDesc'/>
                  <input type="number" max="99" id="expiry_date_YY" name="expiryDateYY" value={formData.expiryDateYY} onChange={handleChange} placeholder="YY" required aria-describedby='expiryDateDesc'/>
                  <span id='expiryDateDesc'>Enter the expiration date</span>
                </div>
              </div>

              <div className='div-cvv'>
                <label htmlFor="cvv">CVC:</label>
                <input type="number" max="999" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="e.g. 123" required aria-describedby='cvvDesc'/>
                <span id='cvvDesc'>Enter the CVV code</span>
              </div>

              <button type="submit">Confirm</button>
          </form>
        </div>
        {submitted && (
          <div className="thank-you-message flex-wrap">
            <img src={IconCompl} alt="" />
            <h2>Thank you!</h2>
            We've added your card details.
            <button type="submit">Continuer</button>
          </div>
          )}
      </div>
    </>
  )
}

export default App
