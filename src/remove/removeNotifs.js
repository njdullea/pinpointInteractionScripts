import RemoveSegments from "./removeSegments";
import RemoveCampaigns from "./removeCampaigns";

const RemoveNotifs = async () => {
  await RemoveSegments();
  await RemoveCampaigns();
}

RemoveNotifs();
