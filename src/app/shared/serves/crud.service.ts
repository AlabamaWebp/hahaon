import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http: HttpClient
  ) { }

  url: string = 'localhost';

  postPh(photo: any){
    this.http.post(this.url, {photo}).subscribe(
      (res: any) => {
        alert('photo otpravleno')
      }
    )
  }

  asd(el: any){
    this.http.post('https://apd/api/upload', el)
      .subscribe(response => {
        console.log('Фото отправлено', response);
      }, error => {
        console.error('Ошибка при отправке', error);
      });
  }
}
