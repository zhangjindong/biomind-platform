import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsEffects } from './+state/news/news.effects';
import * as fromNews from './+state/news/news.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(fromNews.NEWS_FEATURE_KEY, fromNews.reducer), EffectsModule.forFeature([NewsEffects])],
})
export class FinancialDomainModule {}
