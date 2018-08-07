const log = require('./../lib/log').app;

exports.JsonApi = (Function, Location, ReturnStack = false) => {
    const responseJson = {
        Success: false,
        Data: null
    };

    return async function (Request, Response) {
        try {
            responseJson.Data = (await Function(Request, Response));
            responseJson.Success = true;
        } catch (error) {
            responseJson.Data = ReturnStack ? error.stack : 'Something wrong happend';
            responseJson.Success = false;
            log(Location, Request.path, error.stack);
        }

        return Response.json(responseJson);
    };
};