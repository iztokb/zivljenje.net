import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ziv-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss']
})
export class NavigationListComponent implements OnInit {
  @Input() navigationList:unknown[];

  constructor() { }

  ngOnInit() {
  }

}
