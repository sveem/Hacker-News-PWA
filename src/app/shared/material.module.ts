import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
