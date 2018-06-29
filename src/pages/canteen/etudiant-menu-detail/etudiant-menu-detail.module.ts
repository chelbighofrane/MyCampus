import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EtudiantMenuDetailPage } from './etudiant-menu-detail';

@NgModule({
  declarations: [
    EtudiantMenuDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EtudiantMenuDetailPage),
  ],
})
export class EtudiantMenuDetailPageModule {}
