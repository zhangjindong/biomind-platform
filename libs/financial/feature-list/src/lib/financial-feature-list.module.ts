import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialDomainModule } from '@biomind-platform/financial/domain';
import { ListComponent } from './list.component';

@NgModule({
  imports: [CommonModule, FinancialDomainModule],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class FinancialFeatureListModule {}
