import firebase from 'firebase';


const config={
    apiKey: "AIzaSyCr77Ll96FZhKzg9o_7-tnnNTvmKa7VM0k",
    authDomain: "kreasimed-88d09.firebaseapp.com",
    databaseURL: "https://kreasimed-88d09.firebaseio.com",
    projectId: "kreasimed-88d09",
    storageBucket: "kreasimed-88d09.appspot.com",
    messagingSenderId: "224355159540",
    appId: "1:224355159540:web:b19f3e729e060a8662fda1"


}

const Firebase = firebase.initializeApp(config);

export default Firebase;