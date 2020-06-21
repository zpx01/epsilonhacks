 // Your web app's Firebase configuration
  
  var firebaseConfig = {
    apiKey: "AIzaSyCamsifrN7CQYIS_HJ2I0eKPyynHCWvVGw",
    authDomain: "d-bot-6c007.firebaseapp.com",
    databaseURL: "https://d-bot-6c007.firebaseio.com",
    projectId: "d-bot-6c007",
    storageBucket: "d-bot-6c007.appspot.com",
    messagingSenderId: "1002059730049",
    appId: "1:1002059730049:web:c0593f4cc0efc52756d180"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



firebase.auth().signOut();
function login(){
    console.log('logging in')
    console.log(self.email, self.pass)
    firebase.auth().signInWithEmailAndPassword(self.email, self.pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        location.replace('../main.html')

    });
      
}

// ! delete later
  // firebase.auth().sign

function signup(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    console.log('signing up')
    console.log(email,pass)
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        location.replace('../main.html')

      });
}

// ? get login btn
let loginBtn = document.getElementById("btn-login")
if(loginBtn !=undefined){
    console.log('login btn found')
    loginBtn.addEventListener("click",login);
}else{
    console.log('login btn not found')
}

// * get signup btn
let signupBtn = document.getElementById("btn-signup")
if(signupBtn != undefined){
    console.log('signup btn found')
    signupBtn.addEventListener("click",signup);
}else{
    console.log('signup btn not found')
}


$('#google').on("click", function() {
  console.log("image clicked");
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  firebase.auth().signInWithRedirect(provider);

});
$('#facebook').on("click", function() {
  console.log("image clicked");
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().languageCode = 'fr_FR';
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  firebase.auth().signInWithRedirect(provider);

});


// ? detect user code:

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...

    window.location.replace('file:///Users/darhart/Desktop/Repositories/Darrow_Projects/supplychat.io/main.html')
    console.log(user)
  } else {
    // User is signed out.
    // ...
  }
});

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});


