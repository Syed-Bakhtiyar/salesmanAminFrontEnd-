import { RequestOptions, RequestMethod, Headers } from '@angular/http';

export function getRequestOptions(): RequestOptions {
    const headerOptions = new Headers({'Content-Type': 'application/x-www-form-urlencoded', 'cache-control': 'no-cache'});
    const requestOption = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
    return requestOption;
}