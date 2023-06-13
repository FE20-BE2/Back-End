const midtransClient = require("midtrans-client");

const Kelas = require('../models/order-kelas');

let coreApi = new midtransClient.CoreApi({
  isProduction : false,
  serverKey : 'SB-Mid-client-7GzpI7ovEK7EqsKa',
  clientKey : 'SB-Mid-server-YNLQZcrYZ0xDlFVP5AB_OUdD'
});



router.get('/', function(req, res, next) {
  Kelas.findAll().then(data => {
    res.json({
      status: true,
      pesan: 'berhasil tampil',
      data: data
    });
  }).catch(err => {
    res.json({
      status: false,
      pesan: 'gagal tampil' + e.message,
      data: []
    });
  });
});

router.post('/charge', function(req,res,next){

  coreApi.charge(req.body).then((chargeResponse)=>{
      console.log('chargeResponse:',JSON.stringify(chargeResponse));

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

      Order.create(dataOrder).then( data=>{
      res.json({
        status:true,
        pesan:"Berhasil Order",
        data:data
      });
      }).catch( err=>{
        res.json({
        status: false,
        pesan: "Gagal Order: " + err.message,
        data:[]
      });
      });
       

  }).catch((e)=>{
      res.json({
        status: false,
        pesan: 'gagal order' + e.message,
        data: []
      });
  });;

});




