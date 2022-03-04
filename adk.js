const adsSdk = require('facebook-nodejs-business-sdk');
const accessToken = 'EAANeR7EHC2ABAMtZA33zZAk0KlgP52AhtWqxZAO734xL3FZCoZBNZBiDhafZAqqpwMeVPCjqZCIlN5BjUCzM0Pn7Ha0ovqUUrLWczDOGKmcU0ZBmf0qTrepxnKFWUUMHVRPJKw9s7n9ilcHpXDyy1i8zGZCGYGb9Qvj90wbntTKOFE969Y86WMV3EqTjWtEmSSWX4o2iUazNuqA8zTZCaBtM361';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
const account = new AdAccount('948086935849824');

console.log(account.id) // fields can be accessed as properties
account
    .createCampaign(
        [Campaign.Fields.Id],
        {
            [Campaign.Fields.name]: 'Page likes campaign', // Each object contains a fields map with a list of fields supported on that object.
            [Campaign.Fields.status]: Campaign.Status.paused,
            [Campaign.Fields.objective]: Campaign.Objective.page_likes
        }
    )
    .then((result) => {
    })
    .catch((error) => {
    });
console.log(account);