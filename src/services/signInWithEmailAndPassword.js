
const signInWithEmailAndPassword = async (email, password) => {
  var raw = JSON.stringify({
    nxsApp: "1",
    publicKey: "53fe22c842b5cd516d9f9840f3edb27cf539e0db",
    user: email,
    pass: password,
  });
  
  var requestOptions = {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: raw,
  };
  
  await fetch("https://api.genomax.co/NXSAPI/v1.0/auth/logIn/", requestOptions)
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.log('error', error));
    
};

export default signInWithEmailAndPassword