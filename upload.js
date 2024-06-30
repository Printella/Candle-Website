var admin = require("firebase-admin");

var serviceAccount = require("C:\\Users\\KIIT\\Desktop\\candeller-html-template-free-version.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://candle-website-1d508-default-rtdb.asia-southeast1.firebasedatabase.app"
});
