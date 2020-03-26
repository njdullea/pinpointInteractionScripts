import AWS from "aws-sdk";
import AddCampaign from "./addCampaign";
import addCampaignTemplate from "../../templates/add/addCampaignTemplate";
import moment from 'moment';

const AddCampaigns = async (segmentTimesAndIds) => {
  const campaign = addCampaignTemplate;
  const startTime = moment('00:00', 'HH:mm').add(2, 'd').format('YYYY-MM-DDTHH:mm:ss');
  for (let i = 0; i < segmentTimesAndIds.length; i++) {
    const segmentTimeAndId = segmentTimesAndIds[i];
    const time = segmentTimeAndId.time;
    const id = segmentTimeAndId.id;

    campaign.WriteCampaignRequest.Name = "Camp " + time;
    campaign.WriteCampaignRequest.SegmentId = id;
    campaign.WriteCampaignRequest.Schedule.StartTime = startTime;
    await AddCampaign(campaign);
  }
}

export default AddCampaigns;