import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

const SHARED_COMPONENT = [
  SidebarComponent,
  SearchBoxComponent,
  LoadingSpinnerComponent,
];
@NgModule({
  declarations: [...SHARED_COMPONENT],
  imports: [CommonModule, RouterModule],
  exports: [...SHARED_COMPONENT],
})
export class SharedModule {}
