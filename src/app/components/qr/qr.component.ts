import { Component, OnInit } from '@angular/core';
import { QrDTO } from 'src/app/data/qr';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QrService } from 'src/app/service/qr.service';



@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent implements OnInit {

  qr: QrDTO = null;
  updateqr: QrDTO;
  qrForm: FormGroup; 
  qrid: number;
  saveOK = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private activeRoute: ActivatedRoute,
              private qrService: QrService) { }

  ngOnInit() {
    
    this.qrid = Number(this.activeRoute.snapshot.paramMap.get('qrid'));
    this.qrService.getOneQuestionReponse(this.qrid).subscribe(qr => this.qr = qr);
    console.log('ici');

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

    if (this.qrid) {
      this.qrService.getOneQuestionReponse(this.qrid).subscribe (
        qr => this.qrForm = this.fb.group ({
          application: [qr.application],
          auteurdelaquestion: [qr.auteurdelaquestion],
          format: [qr.format],
          datedelaquestion: [qr.datedelaquestion],
          severite: [qr.severite],
          objet: [qr.objet],
          version: [qr.version],
          libelledelaquestion: [qr.libelledelaquestion],
          datedelareponse: [qr.datedelareponse],
          ecart: [qr.ecart],
          auteurdelareponse: [qr.auteurdelareponse],
          libelledelareponse: [qr.libelledelareponse],
          statutquestion: [qr.statutquestion],

         })
        
        );
      }

  }

  saveQr() {
    this.updateqr = new QrDTO (
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
    this.qrService.updateOneQestionReponse(this.updateqr).subscribe();
    this.saveOK = true;
  }

}
