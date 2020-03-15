import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QrDTO } from '../data/qr';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QrService {


  constructor(private http: HttpClient,
    @Inject('BACKEND_URL') private baseUrl: string) {}

getOneListQuestionReponse(): Observable<QrDTO[]> {
    return this.http.get<QrDTO[]>(`${this.baseUrl}/qr`);
}

getOneQuestionReponse(qrid:number): Observable<QrDTO> {
  console.log('qrid ' + qrid) ;
  return this.http.get<QrDTO>(`${this.baseUrl}/qr/${qrid}`);
}

updateOneQestionReponse(qr: QrDTO): Observable<QrDTO> {
  console.log(qr);
  return this.http.put<QrDTO>(`${this.baseUrl}/qr`, qr);
}

saveOneQuestionReponse(qr: QrDTO): Observable<QrDTO> {
  return this.http.post<QrDTO>(`${this.baseUrl}/qr`, qr);
}

}
