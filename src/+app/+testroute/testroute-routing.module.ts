import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestRouteComponent } from './testroute.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'testroute', component: TestRouteComponent }
    ])
  ]
})
export class TestRouteRoutingModule { }
