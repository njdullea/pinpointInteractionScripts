### Using this project
- Run `yarn install`.
- Setup your own pinpoint application.
- In the templates, add the pinpoint application project id to the application id field.
- Make sure you have the aws cli configured, incuding access keys.
- When executing requests, template fields with empty strings must be filled in.
- If your pinpoint application is not us-east-1, change the AWS.configs to your region.

## Scripts
- Add Notifs: adds 96 segments and campaigns, one for each 15 minute period of the day.
- Remove Notifs: removes all segments and campaigns indiscriminately. 
- Add test notifs: adds 1 segment and 1 campaign.
- Getcamps: executes and prints out the result of the get campaigns call (which currently prints out the id and status of each campaign as well).