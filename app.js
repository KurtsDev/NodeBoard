const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const PORT = config.get('port');
const MONGO_URI = config.get('mongoUri');

const app = express();

(async () => {
	try {
		await mongoose.connect(MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true
		})
	} catch (e) {
		console.log('Server error', e.message);
		process.exit(1);
	}
})();

app.listen(PORT, ()=> {
	console.log(`app start ${PORT}`);
})