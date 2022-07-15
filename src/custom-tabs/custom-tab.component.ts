import { Component, Input, ViewChild } from '@angular/core';
import { MatTab } from '@angular/material/tabs';

@Component({
  selector: 'custom-tab',
  template: `
    <mat-tab [label]="label">
      <ng-content></ng-content>
    </mat-tab>
  `,
})
export class CustomTabComponent {
  @Input() label: string;

  @ViewChild(MatTab)
  public matTab: MatTab;
}
