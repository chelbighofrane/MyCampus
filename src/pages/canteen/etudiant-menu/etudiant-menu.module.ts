import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EtudiantMenuPage } from './etudiant-menu';

@NgModule({
  declarations: [
    EtudiantMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(EtudiantMenuPage),
  ],
})
export class EtudiantMenuPageModule {}
