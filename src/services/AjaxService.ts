export class AjaxService {

    public send(url: string, options: RequestInit = {}): Promise<Response> {
        return fetch(encodeURI(url), options)
    }
}