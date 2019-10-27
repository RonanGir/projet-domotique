import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-new-appareil',
  templateUrl: './new-appareil.component.html',
  styleUrls: ['./new-appareil.component.scss']
})
export class NewAppareilComponent implements OnInit {

  status: boolean = false;

  constructor(private appareilService: AppareilService,
              private router: Router) { }

  ngOnInit() {
  }

  defaultOnOff = false;

  onSubmit(form: NgForm) {
    const name   = form.value['name'];
    const status = form.value['status'];
    this.appareilService.addAppareil(name, status);
    form.resetForm({ status: this.status });
    this.appareilService.saveAppareilsToServer();
    this.router.navigate(['/appareils']);
  }

}
