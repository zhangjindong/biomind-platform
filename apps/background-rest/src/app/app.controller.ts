import { Controller, Get } from '@nestjs/common';
import { of } from 'rxjs';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  @Get('depts')
  getDepts() {
    return of([
      { id: 1, name: 'PD', description: '产品研发' },
      {
        id: 2,
        name: 'PMO',
        description: '项目管理',
      },
      {
        id: 3,
        name: 'MS',
        description: '市场销售',
      },
    ]);
  }
}
