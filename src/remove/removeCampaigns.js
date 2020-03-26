import RemoveCampaign from "./removeCampaign";
import removeCampaignTemplate from "../../templates/remove/removeCampaignTemplate";
import GetCampaigns from "../get/getCampaigns";

const RemoveCampaigns = async ()  => {
  const campaigns = await GetCampaigns();
  const removeCampaign = removeCampaignTemplate;
  for (let i = 0; i < campaigns.length; i++) {
    const id = campaigns[i];
    removeCampaign.CampaignId = id;
    await RemoveCampaign(removeCampaign);
  }
}

export default RemoveCampaigns;