const midtransClient = require("midtrans-client");
const { v4: uuid } = require("uuid");

exports.paymentSiswa = async (req) => {
  const { body } = req;

  let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: "YOUR_SERVER_KEY"
  });

  let parameter = {
    transaction_details: {
      order_id: uuid(),
      gross_amount: body.harga,
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: "budi",
      last_name: "pratama",
      email: "budi.pra@example.com",
      phone: "08111222333",
    },
    item_details: [
      {
        id: "ITEM_ID",
        price: body.harga,
        quantity: 1,
        name: "Nama Produk",
      },
    ],
  };

  try {
    const transactionToken = await snap.createTransaction(parameter);
    return { token: transactionToken.token };
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};
