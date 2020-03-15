import { Component, OnInit } from '@angular/core';
import { QrDTO } from 'src/app/data/qr';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { QrService } from 'src/app/service/qr.service';


@Component({
  selector: 'app-creerqr',
  templateUrl: './creerqr.component.html',
  styleUrls: ['./creerqr.component.scss']
})
export class CreerqrComponent implements OnInit {

  qr: QrDTO = null;
  saveqr: QrDTO;
  qrForm: FormGroup; 
  qrid: number;
  saveOK = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private activeRoute: ActivatedRoute,
              private qrService: QrService) { }

  ngOnInit() {

    this.qrForm = this.fb.group ({
      application: [],
      auteurdelaquestion: [],
      format: [],
      datedelaquestion: [],
      severite: [],
      objet: [],
      version: [],
      libelledelaquestion: [],
      datedelareponse: [],
      ecart: [],
      auteurdelareponse: [],
      libelledelareponse: [],
      statutquestion: [],
    }); 

  }


  saveQr() {
    this.saveqr = new QrDTO (
      {
       id: this.qrid,
       application: this.qrForm.get('application').value,
       auteurdelaquestion: this.qrForm.get('auteurdelaquestion').value,
       format: this.qrForm.get('format').value,
       datedelaquestion: this.qrForm.get('datedelaquestion').value,
       severite: this.qrForm.get('severite').value,
       objet: this.qrForm.get('objet').value,
       version: this.qrForm.get('version').value,
       libelledelaquestion: this.qrForm.get('libelledelaquestion').value,
       datedelareponse: this.qrForm.get('datedelareponse').value,
       ecart: this.qrForm.get('ecart').value,
       auteurdelareponse: this.qrForm.get('auteurdelareponse').value,
       libelledelareponse: this.qrForm.get('libelledelareponse').value,
       statutquestion: this.qrForm.get('statutquestion').value       
     });
    this.qrService.saveOneQuestionReponse(this.saveqr).subscribe();
    console.log(this.saveqr);
    this.saveOK = true;
  }

}
