import AWS from "aws-sdk";
import getCampaigns from "../../templates/get/getCampaigns";

AWS.config.update({
  region: 'us-east-1'
});

const pinpoint = new AWS.Pinpoint({apiVersion: '2016-12-01'});

const GetCampaigns = async (params) => {
  const activeCampaigns = [];
  const TESTcampsAndStatus = [];
  try {
    const data = await pinpoint.getCampaigns(getCampaigns).promise();
    const items = data.CampaignsResponse.Item;
    for (let i = 0; i < items.length; i++) {
      const campaign = items[i];

      const TESTitem = {
        id: campaign.Id,
        status: campaign.State.CampaignStatus
      }
      TESTcampsAndStatus.push(TESTitem);

      if (campaign.State.CampaignStatus !== 'DELETED') {
        activeCampaigns.push(campaign.Id);
      }
    }
    console.log('Campaigns and status: ', TESTcampsAndStatus);
    return activeCampaigns;
  } catch (error) {
    console.log('Error getting campaigns: ', error);
  }
}

export default GetCampaigns;