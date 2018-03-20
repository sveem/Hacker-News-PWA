import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatDialogModule
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
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
