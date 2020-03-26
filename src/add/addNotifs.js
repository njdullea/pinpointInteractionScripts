import AddSegments from "./addSegments";
import AddCampaigns from "./addCampaigns";

const AddNotifs = async () => {
  const timesAndIds = await AddSegments();
  await AddCampaigns(timesAndIds);
}

AddNotifs();
