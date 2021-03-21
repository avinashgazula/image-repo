import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAVIA3JtsyA1giABEg2KBOgn1gc0s4W1QQ",
    authDomain: "image-repo-fd12d.firebaseapp.com",
    projectId: "image-repo-fd12d",
    storageBucket: "image-repo-fd12d.appspot.com",
    messagingSenderId: "299030935537",
    appId: "1:299030935537:web:40e308a357b6107992b650",
    measurementId: "G-K1H5SHG08R"
};
// Initialize Firebase
export const firebaseInstance = firebase.initializeApp(firebaseConfig);
export const firebaseAnalytics = firebase.analytics();
