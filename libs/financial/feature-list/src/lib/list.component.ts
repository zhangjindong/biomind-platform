import { Component, OnInit} from '@angular/core';
import { ListFacade, loadNews } from '@biomind-platform/financial/domain';

@Component({
  selector: 'financial-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    
    
    newsList$ = this.listFacade.newsList$;


    constructor(private listFacade: ListFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.listFacade.dispatch(loadNews());
    }

}

