import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MagazineComponent } from './magazine/magazine.component';
import { ManagingComponent } from './managing/managing.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'magazine', component: MagazineComponent },
  { path: 'managing', component: ManagingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
