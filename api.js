// instantiating an object
const adsSdk = require('facebook-nodejs-business-sdk');
const AdAccount = adsSdk.AdAccount;
const account = new AdAccount('948086935849824');
console.log(account.id) // fields can be accessed as properties