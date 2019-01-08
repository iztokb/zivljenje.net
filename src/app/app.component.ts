import { Component, OnInit } from '@angular/core';

import { ApplicationInitService } from './core/services';
@Component({
  selector: 'ziv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zivljenje';

  constructor(private _applicationInitService: ApplicationInitService) {}

  ngOnInit() {
    this._applicationInitService.initModule();
  }
}
