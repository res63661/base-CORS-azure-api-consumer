import { Component } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import  'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic bootstrap - app works!';


  constructor(private http: Http) { }

  getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  vResults: Array<any>;
  yourURL: string = "<put your API URL here!>";

  getNew()
  {
    this.http.get(this.yourURL, { headers: this.getHeaders() })
      .map(res=>res.json())
      .subscribe(
        data=> this.vResults=data,
        err=>console.log(err),
        ()=>console.log('done')
      );
  }

  getAPI() {
    this.getNew();
  }

}

