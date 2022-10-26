var express = require("express");
var router = express.Router();

//mekanlar.js yolu
var ctrlMekanlar = require("../controllers/mekanlar");

//digerleri.js yolu
var ctrlDigerleri = require("../controllers/digerleri");

//anasayfa rotası
router.get("/", ctrlMekanlar.anaSayfa);
//mekan bilgisi rotası
router.get("/mekan", ctrlMekanlar.mekanBilgisi);
//yeni yorum rotası
router.get("/mekan/yorum/yeni", ctrlMekanlar.yorumEkle);
//hakkinda rotasi
router.get("/hakkinda", ctrlDigerleri.hakkinda);

module.exports = router;