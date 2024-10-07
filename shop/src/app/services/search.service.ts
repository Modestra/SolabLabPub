import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http: HttpClient) {

  }

  SearchLocationByString(data: string): Observable<any> {
    return this._http.post("http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", JSON.stringify({ "query": data }), {
      headers: new HttpHeaders({
        'Authorization': "Token 1d3174c5cf332c9aeff1d97382fba380c4bbb7a5",
        //'X-Secret': "28792e10269d30a1de918ccea886bcaf003c43d2",
        "Content-Type": "application/json",
        "Accept": "application/json",
      })

    })
  }
}
