import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDomainModule } from '@biomind-platform/news/domain';
import { ListComponent } from './list.component';

@NgModule({
  imports: [CommonModule, NewsDomainModule],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class NewsFeatureListModule {}
