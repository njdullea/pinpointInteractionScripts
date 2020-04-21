import AWS from "aws-sdk";

AWS.config.update({
  region: 'us-east-1'
});

const pinpoint = new AWS.Pinpoint({apiVersion: '2016-12-01'});

const params = {
	ApplicationId: '0958ea3dddb1436aa2de6b39f79f3de4',
	SendUsersMessageRequest: {
		MessageConfiguration: {
			DefaultPushNotificationMessage: {
				Title: "Patch Medication Reminder.",
				Body: "This is a reminder to take your medication.",
				Action: "OPEN_APP",
			}
		},
		Users: {
			// 'us-east-1:0a97e556-3553-4495-ad23-d5b5cf9bd810': {}
		}
	}
};

const testNotif = async (params) => {
  try {
		// const data = await pinpoint.createCampaign(params).promise();
		const notif = {
			ApplicationId: '0958ea3dddb1436aa2de6b39f79f3de4',
			SendUsersMessageRequest: {
				MessageConfiguration: {
					DefaultPushNotificationMessage: {
						Title: "Patch Medication Reminder.",
						Body: "This is a reminder to take your medication.",
						Action: "OPEN_APP",
					}
				},
				Users: {
					// 'us-east-1:0a97e556-3553-4495-ad23-d5b5cf9bd810': {}
					'us-east-1:e0af3fb5-59ab-479a-9400-7b09ddb39515': {}
				}
			}
		};
		console.log('Here: ', notif);
		const result = await pinpoint.sendUsersMessages(notif).promise();
		console.log('Result: ', result);
  } catch (error) {
    console.log('Error creating campaign: ', error);
  }
}

// export default AddCampaign;
testNotif();