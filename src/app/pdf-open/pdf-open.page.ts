import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdf-open',
  templateUrl: './pdf-open.page.html',
  styleUrls: ['./pdf-open.page.scss'],
})
export class PdfOpenPage implements OnInit {

  constructor(public _act:ActivatedRoute) { }

  pdf_file:string;
  ngOnInit() {
    this.pdf_file=this._act.snapshot.params['pdf'];
    console.log(this.pdf_file);
  }

}
