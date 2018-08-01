const log   = require('../lib/log').app;

module.exports = async (mongoose) => {
    try {
        const conn = await mongoose.connect('mongodb://localhost/rotter');
        log('success');
    } catch (error) {
        log('fail!!', error.stack);
    }
};