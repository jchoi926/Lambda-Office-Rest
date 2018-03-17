exports.handler = (event, context, callback) => {
    console.log("EVENT", event);
	console.log("RECORDS", event.Records);
	console.log("RECORD", event.Records[0]);
	console.log("PAYLOAD", event.Records[0].Sns);
	const payload = JSON.parse(event.Records[0].Sns.Message);
	config = payload.config;
    // TODO implement
    callback(null, 'Hello from Lambda');
};
