function onScanSuccess(qrCodeMessage) {
    var database = firebase.database();
    var postKey = firebase.database().ref('qr-codes/').push().key;
  
    var postData = {
      message: qrCodeMessage,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    };
    var updates = {};
    updates['/qr-codes/' + postKey] = postData;
    updates['/user-posts/' + firebase.auth().currentUser.uid + '/' + postKey] = postData;
  
    firebase.database().ref().update(updates);
  
    alert(qrCodeMessage);
  }