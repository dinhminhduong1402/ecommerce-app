'use client'
import React, {useState} from 'react'
import { subFont } from '../fonts'
import '../styles/CheckOutPage.scss'

const CheckOutPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  // xử lí submit form thanh toán
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Tạo một đối tượng chứa thông tin thanh toán
    const paymentInfo = {
      cardNumber,
      expirationDate,
      cvv,
    }

    // Gửi thông tin thanh toán đến máy chủ của bạn
      fetch('/api/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentInfo),
      }).then(res => res.json()).then(data => console.log(data))
  }

  // const handlFecth = async () => {
  //   gateway.transaction.sale(
  //     {
  //       amount: "10.00",
  //       paymentMethodNonce: "fake-valid-nonce",
  //       options: {
  //         submitForSettlement: true,
  //       },
  //     },
  //     (error, result) => {
  //       if (result && result.success) {
  //         console.log("Giao dịch thành công!");
  //         console.log("ID giao dịch:", result.transaction.id);
  //       } else {
  //         console.error("Lỗi giao dịch:", error);
  //       }
  //     }
  //   );
  // }

  return (
    <div className="check-out-main">
      <div className="cart-page-container">
        <div className="banner">
          <div className="text-wrapper">
            <p className="path">Home / Check Out</p>
            <h1 className={subFont.className}>Check Out</h1>
            <p className="decs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
              Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>
        </div>

        {/* <button onClick={handlFecth}>test fetch</button> */}

        <div className="check-out-form-container">
          <form onSubmit={handleSubmit}>
            <label>
              Card Number:
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </label>
            <label>
              Expiration Date:
              <input
                type="text"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
            </label>
            <label>
              CVV:
              <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
            </label>
            <button type="submit">Pay with Paypal</button>
          </form>
        </div>

        
      </div>
    </div>
  )
}

export default CheckOutPage
