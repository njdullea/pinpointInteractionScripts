import AWS from "aws-sdk";

AWS.config.update({
  region: 'us-east-1'
});

const pinpoint = new AWS.Pinpoint({apiVersion: '2016-12-01'});

const RemoveSegment = async (params) => {
  try {
    const data = await pinpoint.deleteSegment(params).promise();
    const deletedId = data.SegmentResponse.Id;
    return deletedId;
  } catch (error) {
    console.log('Error deleting segment: ', error);
  }
}

export default RemoveSegment;