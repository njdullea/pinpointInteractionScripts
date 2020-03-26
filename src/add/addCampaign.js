import AWS from "aws-sdk";
import moment from 'moment';

AWS.config.update({
  region: 'us-east-1'
});

const pinpoint = new AWS.Pinpoint({apiVersion: '2016-12-01'});

const AddCampaign = async (params) => {
  try {
    const data = await pinpoint.createCampaign(params).promise();
  } catch (error) {
    console.log('Error creating campaign: ', error);
  }
}

export default AddCampaign;