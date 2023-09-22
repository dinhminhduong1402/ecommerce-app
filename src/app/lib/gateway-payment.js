import braintree from 'braintree'

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox, // Sử dụng môi trường sandbox
  merchantId: '2ww4vphrxx7n58db',
  publicKey: "t8wbw8hrjf8vkbdz",
  privateKey: "9abc6cb74ae3ca2eff7f54c07497f4a1",
});

export {gateway}