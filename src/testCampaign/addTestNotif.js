import AddCampaign from "../add/addCampaign";
import AddSegment from "../add/addSegment";
import testCampaignTemplate from "./testCampaignTemplate";
import testSegmentTemplate from "./testSegmentTemplate";
import moment from 'moment';


const addTestNotif = async () => {
  try {
    const segId = await AddSegment(testSegmentTemplate);
    const time = moment().add(1, 'd').format('YYYY-MM-DDTHH:mm:ss');
    console.log('Time: ', time);
    const campaign = testCampaignTemplate;
    campaign.WriteCampaignRequest.SegmentId = segId;
    campaign.WriteCampaignRequest.Schedule.StartTime = time;
    await AddCampaign(campaign);
  } catch (error) {
    console.log('Error adding test notif: ', error);
  }
}


addTestNotif();

