import GetCampaigns from "../get/getCampaigns";

const RunGetCampaigns = async () => {
  const campaigns = await GetCampaigns();
  console.log('Campaigns: ', campaigns);
}

RunGetCampaigns();