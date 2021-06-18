import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Dept } from '../entities/dept';

@Injectable({ providedIn: 'root' })
export class DeptDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<Dept[]> {
    // Uncomment if needed

    const url = '/api/depts';
    const params = new HttpParams().set('param', 'value');
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Dept[]>(url, { params, headers });

    // return of([
    //   { id: 1, name: 'PD', description: '产品研发' },
    //   {
    //     id: 2,
    //     name: 'PMO',
    //     description: '项目管理',
    //   },
    //   {
    //     id: 3,
    //     name: 'MS',
    //     description: '市场销售',
    //   },
    // ]);
  }
}
