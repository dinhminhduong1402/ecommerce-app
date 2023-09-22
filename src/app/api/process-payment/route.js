import { NextResponse, NextRequest } from "next/server";
import { gateway } from "@/app/lib/gateway-payment";

export async function POST(request) {
  // lấy dữ liệu client gửi lên
  const requestBody = await request.json()
  const { cardNumber, expirationDate, cvv } = requestBody

  // gửi yêu cầu đến braintree tạo giao dịch
  gateway.transaction.sale(
    {
      amount: "10.00",
      paymentMethodNonce: "fake-valid-nonce",
      options: {
        submitForSettlement: true,
      },
    },
    (error, result) => {
      // xử lí phản hồi về client
      if (result && result.success) {
        console.log("Giao dịch thành công!");
        console.log("ID giao dịch:", result.transaction.id);
      } else {
       
      }
    }
  );

  
}
