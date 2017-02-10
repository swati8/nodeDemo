module.exports = function (app) {
    app.use('/rest/v1/posts',require('../rest/posts'));
    //app.use('/*')
};