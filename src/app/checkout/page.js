'use client'
import React, {useState} from 'react'
import { subFont } from '../fonts'
import DropIn from 'braintree-web-drop-in-react'
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
          'Content-Type': 'application/json'
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
    <>
      <div className="check-out-main">
        <div className="check-out-container">
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

          <div className="check-out-form-container">
            <DropIn
              options={{ authorization: 'sandbox_rzb5h5vm_2ww4vphrxx7n58db'}}
            />
            <button type='submit' onClick={handleSubmit}>Pay</button>
          </div>

          
        </div>
      </div>

    </>
  )
}

export default CheckOutPage
