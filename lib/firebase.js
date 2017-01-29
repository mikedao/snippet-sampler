const firebase = require('firebase');

// Paste the configuration you copied from the Firebase Console above here.
const config = {
  apiKey: "AIzaSyCopZE54cCm73irb0nstwEYZKoEYRc8-Xg",
  authDomain: "snippet-sampler-c4397.firebaseapp.com",
  databaseURL: "https://snippet-sampler-c4397.firebaseio.com",
  storageBucket: "snippet-sampler-c4397.appspot.com",
  messagingSenderId: "504143964866"
};

firebase.initializeApp(config);

module.exports = firebase;
