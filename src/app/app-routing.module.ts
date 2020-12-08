import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MagazineComponent } from './magazine/magazine.component';
import { ManagingComponent } from './managing/managing.component';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './auth/auth.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home'} },
  { path: 'auth', component: AuthComponent, data: { animation: 'Auth'} },
  { path: 'profile', component: ProfileComponent, data: { animation: 'Profile' } },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'magazine', component: MagazineComponent },
  { path: 'managing', component: ManagingComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
