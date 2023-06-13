const midtransClient = require("midtrans-client");
const OrderKelas = require('../models/order-kelas');

let coreApi = new midtransClient.CoreApi({
  isProduction : false,
  serverKey : 'SB-Mid-client-7GzpI7ovEK7EqsKa',
  clientKey : 'SB-Mid-server-YNLQZcrYZ0xDlFVP5AB_OUdD'
});


exports.getOrderKelas = async function(req, res, next) {
  try {
    const data = await OrderKelas.findAll();
    res.json({
      status: true,
      pesan: 'berhasil tampil',
      data: data
    });
  } catch (err) {
    res.json({
      status: false,
      pesan: 'gagal tampil' + err.message,
      data: []
    });
  }
};

exports.charge = async function(req, res, next) {
  try {
    const chargeResponse = await coreApi.charge(req.body);
    console.log('chargeResponse:', JSON.stringify(chargeResponse));

    const dataOrder = {
      id: chargeResponse.id,
      fullName: req.body.fullName,
      email: req.body.email,
      noPhone: req.body.noPhone,
      birthPlace: req.body.birthPlace,
      birthDate: req.body.birthDate,
      gender: req.body.gender,
      school: req.body.school,
      instagram: req.body.instagram,
      address: req.body.address,
      midtransResponse: JSON.stringify(req.body.midtransResponse),
      userId: req.body.userId
    };

    const data = await OrderKelas.create(dataOrder);
    res.json({
      status: true,
      pesan: "Berhasil Order",
      data: data
    });
  } catch (err) {
    res.json({
      status: false,
      pesan: "Gagal Order: " + err.message,
      data: []
    });
  }
};





