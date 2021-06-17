import { Component, OnInit} from '@angular/core';
import { HomeListFacade, loadDept } from '@biomind-platform/dept/domain';

@Component({
  selector: 'dept-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {
    
    
    deptList$ = this.homeListFacade.deptList$;


    constructor(private homeListFacade: HomeListFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.homeListFacade.dispatch(loadDept());
    }

}

