import { Component, OnInit } from '@angular/core';
import { QrService } from 'src/app/service/qr.service';
import { QrDTO } from 'src/app/data/qr';

@Component({
  selector: 'app-lqr',
  templateUrl: './lqr.component.html',
  styleUrls: ['./lqr.component.scss']
})
export class LqrComponent implements OnInit {

 lqr: QrDTO[] = [];

  constructor(private qrService: QrService) { }

  ngOnInit() {
    this.qrService.getOneListQuestionReponse().subscribe(
      (lqr) => {this.lqr = lqr;} 
      )
  }
  

}
