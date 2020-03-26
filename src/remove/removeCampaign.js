import AWS from "aws-sdk";

AWS.config.update({
  region: 'us-east-1'
});

const pinpoint = new AWS.Pinpoint({apiVersion: '2016-12-01'});

const RemoveCampaign = async (params) => {
  try {
    const data = await pinpoint.deleteCampaign(params).promise();
    const deletedId = data.CampaignResponse.Id;
    return deletedId;
  } catch (error) {
    console.log('Error deleting segment: ', error);
  }
}

export default RemoveCampaign;