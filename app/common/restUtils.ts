// todo: try promises
/* 
function request2<Request, Response>(
    method: 'GET' | 'POST',
    url: string,
    content?: Request
): Promise<Response> {
    return new Promise<Response>((resolve, reject) => {
        request(method, url, content, resolve, reject);
    });
}
*/ 

export function sendRequest<Request, Response>(
    method: 'GET' | 'POST', 
    url: string, 
    callback?: (response: Response) => void, 
    content?: Request, 
    errorCallback?: (error: any) => void
) {
    const request = new XMLHttpRequest();
    request.open(method, url, true);
    
    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            console.log("status: " + this.status);
            // const data = this.response as Response;
            const data = JSON.parse(this.response) as Response;
            callback && callback(data);
        } else {
            console.log("ERROR: We reached our target server, but it returned an error; status " + this.status);
        }
    }

    request.timeout = 400;

    request.ontimeout = function(error) {
        console.log("ERROR: timeout ", error);
    };

    request.onerror = function(error) {
        errorCallback && errorCallback(error);
    };

    request.onloadstart = function() {
        // console.log("request load started");
    }

    request.onloadend = function() {
        // console.log("request load ended");
    }

    if (method === 'POST') {
        request.setRequestHeader(
            'Content-type',
            'application/x-www-form-urlencoded; charset=UTF-8'
        );
    }

    request.send(); // todo: body (content)
}