import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';

const SHARED_COMPONENT = [SidebarComponent, HomeComponent];

@NgModule({
  declarations: [...SHARED_COMPONENT],
  imports: [CommonModule],
  exports: [...SHARED_COMPONENT],
})
export class SharedModule {}
