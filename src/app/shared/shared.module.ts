import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const SHARED_COMPONENT = [
  SidebarComponent,
  HomeComponent,
  AboutComponent,
  ContactComponent,
];
@NgModule({
  declarations: [...SHARED_COMPONENT],
  imports: [CommonModule, RouterModule],
  exports: [...SHARED_COMPONENT],
})
export class SharedModule {}
