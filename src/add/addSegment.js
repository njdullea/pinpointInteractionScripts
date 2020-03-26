import AWS from "aws-sdk";

AWS.config.update({
  region: 'us-east-1'
});

const pinpoint = new AWS.Pinpoint({apiVersion: '2016-12-01'});

const AddSegment = async (params) => {
  try {
    const data = await pinpoint.createSegment(params).promise();
    const id = data.SegmentResponse.Id;
    return id;
  } catch (error) {
    console.log('Error creating segment: ', error);
  }
}

export default AddSegment;