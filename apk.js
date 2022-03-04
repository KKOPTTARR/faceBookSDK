const adsSdk = require('facebook-nodejs-business-sdk');
const accessToken = 'EAANeR7EHC2ABAMtZA33zZAk0KlgP52AhtWqxZAO734xL3FZCoZBNZBiDhafZAqqpwMeVPCjqZCIlN5BjUCzM0Pn7Ha0ovqUUrLWczDOGKmcU0ZBmf0qTrepxnKFWUUMHVRPJKw9s7n9ilcHpXDyy1i8zGZCGYGb9Qvj90wbntTKOFE969Y86WMV3EqTjWtEmSSWX4o2iUazNuqA8zTZCaBtM361';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const account = new AdAccount('948086935849824');
account
    .read([AdAccount.Fields.name, AdAccount.Fields.age])
    .then((account) => {
        console.log(account);
    })
    .catch((error) => {
    });
console.log(account);
