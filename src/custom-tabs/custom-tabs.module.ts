import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { CustomTabsComponent } from './custom-tabs.component';
import { CustomTabComponent } from './custom-tab.component';

@NgModule({
  imports: [CommonModule, MatTabsModule],
  declarations: [CustomTabsComponent, CustomTabComponent],
  exports: [CustomTabsComponent, CustomTabComponent],
})
export class CustomTabsModule {}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
