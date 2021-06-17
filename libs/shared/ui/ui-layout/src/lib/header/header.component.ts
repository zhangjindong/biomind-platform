import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  links = [
    { path: './user', title: 'UserList' },
    { path: './dept', title: 'DeptList' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
