import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatTab } from '@angular/material/tabs';

@Component({
  selector: 'custom-tab',
  template: `
    <mat-tab [label]="label">
      <ng-content></ng-content>
    </mat-tab>
  `,
})
export class CustomTabComponent implements OnInit {
  @Input() label: string;

  @ViewChild(MatTab)
  public matTab: MatTab;

  ngOnInit(): void {
    console.log('tab group inits');
  }
}
