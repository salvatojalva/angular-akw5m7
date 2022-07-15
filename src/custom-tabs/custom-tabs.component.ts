import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewChild,
} from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

import { CustomTabComponent } from './custom-tab.component';

@Component({
  selector: 'custom-tabs',
  template: `
    <mat-tab-group #tabGroup>
      <ng-content #outlet></ng-content>
    </mat-tab-group>
  `,
})
export class CustomTabsComponent {
  @ViewChild(MatTabGroup)
  public tabGroup: MatTabGroup;

  @ContentChildren(CustomTabComponent)
  protected tabs: QueryList<CustomTabComponent>;

  public ngAfterViewInit() {
    const matTabsFromQueryList = this.tabs.map((tab) => {
      console.log(tab.matTab.textLabel);
      console.log(tab.matTab.position);
      return tab.matTab;
    });
    const list = new QueryList<MatTab>();

    list.reset([matTabsFromQueryList]);
    this.tabGroup._tabs = list;
    this.tabGroup.ngAfterContentInit();
  }
}
