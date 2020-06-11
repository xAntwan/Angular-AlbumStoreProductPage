import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }
  private _albumUrl: string = '../assets/album.json';

  getAlbum(){
    id: Number;
    return this._http.get(this._albumUrl).pipe(map);
  }
}
