import { HttpHeaders } from '@angular/common/http';

export const appConstants = {

    getHeaderOptions: {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'GET',
            'Access-Control-Request-Headers': '*'
        }),
        withCredentials: false,
        params: {}
    },
    postHeaderOptions: {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': '*'
        }),
        withCredentials: false,
        params: {}
    },
    deleteHeaderOptions: {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'DELETE',
            'Access-Control-Request-Headers': '*'
        }),
        withCredentials: false,
        params: {}
    },
    putHeaderOptions: {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'PUT',
            'Access-Control-Request-Headers': '*'
        }),
        withCredentials: false,
        params: {}
    },
    loginPost: {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': '*',
            'Authorization': 'Basic ' + btoa('diva-app:diva-53cr37')
        })
    }
};


