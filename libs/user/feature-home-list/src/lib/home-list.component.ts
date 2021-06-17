import { Component, OnInit} from '@angular/core';
import { HomeListFacade } from '@biomind-platform/user/domain';

@Component({
  selector: 'user-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {
    


    constructor(private homeListFacade: HomeListFacade) {
    }


    ngOnInit() {
    }

}

