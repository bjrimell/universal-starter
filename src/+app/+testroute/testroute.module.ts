import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TestRouteComponent } from './testroute.component';
import { TestRouteRoutingModule } from './testroute-routing.module';

@NgModule({
  imports: [
    SharedModule,
    TestRouteRoutingModule
  ],
  declarations: [
    TestRouteComponent
  ]
})
export class TestRouteModule { }
