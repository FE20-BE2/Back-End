const midtransClient = require("midtrans-client");
const OrderKelas = require('../models/order-kelas');
const uuid = require("uuid");

exports.getClassOrder = async function(req, res, next) {
  try {

    const data = await OrderKelas.find();
    
    res.json({
      status: true,
      pesan: 'berhasil tampil',
      data: data
    });
  } catch (err) {
    res.json({
      status: false,
      pesan: 'gagal tampil: ' + err.message,
      data: [],
      orderData: []
    });
  }
};

exports.orderKelas = async function(req,res,next){
  try {
    const portfolioUser = await cloudinary.uploader.upload(req.file.path, {
      folder: 'remedial-app/portfolio-users',
  });

    const orderKelas = new DataOrderKelas({
      fullName: req.body.fullName,
      email: req.body.email,
      noPhone: req.body.noPhone,
      birthPlace: req.body.birthPlace,
      birthDate: req.body.birthDate,
      gender: req.body.gender,
      school: req.body.school,
      instagram: req.body.instagram,
      address: req.body.address,
      motivation: req.body.motivation,
      portfolioFile: portfolioUser.public_id,
      portfolioUrl: portfolioUser.secure_url,
      userId: req.user.userId
    });

    await orderKelas.save();

    res.status(200).json({ message: 'Berhasil mendaftar kelas' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.payment = async function(req, res, next) {

  const { body } = req;

  let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey : 'SB-Mid-server-9rzsQI5YO0ZarUcJloumxYyq'
  });
  
  let parameter = {
    transaction_details: {
      order_id: uuid.v4(),
      gross_amount: body.harga,
    },
    credit_card: {
      secure: true,
    }, 
    customer_details: {
      fullName: "Haqil",
      email: "Haqil@example.com",
      noPhone: "1234567890",
      birthPlace: "Cianjur",
      birthDate: "2002-01-01T00:00:00.000Z",
      gender: "male",
      school: "SMAN 1 COIMAS",
      instagram: "@haqiljosh",
      address: "Dramaga",
      motivation: "I am motivated to succeed in my chosen field."
    },
  };

  const transactionToken = await snap.createTransactionToken(parameter);

  return { token: transactionToken.token };
};
