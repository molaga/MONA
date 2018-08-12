import { app as log } from '../lib/log';

export function JsonApi (Function, Location, ReturnStack: boolean): Promise<any> {
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