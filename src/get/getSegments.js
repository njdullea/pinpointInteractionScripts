import AWS from "aws-sdk";
import getSegments from "../../templates/get/getSegments";

AWS.config.update({
  region: 'us-east-1'
});

const pinpoint = new AWS.Pinpoint({apiVersion: '2016-12-01'});

const GetSegments = async (params) => {
  try {
    const data = await pinpoint.getSegments(getSegments).promise();
    const items = data.SegmentsResponse.Item;
    return items;
  } catch (error) {
    console.log('Error getting segments: ', error);
  }
}

export default GetSegments;