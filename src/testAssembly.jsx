fetch("https://api.assemblyai.com/v2/transcript", {
	method: "POST",
	headers: {
		authorization: "YOUR_API_KEY_HERE",
		"content-type": "application/json",
	},
	body: JSON.stringify({
		audio_url:
			"https://storage.googleapis.com/aai-web-samples/espn-basketball.mp3",
	}),
})
	.then((res) => res.json())
	.then(console.log)
	.catch(console.error);
