import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { ModelService } from '../shared/model/model.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'testroute',
  styles: [`
  `],
  template: `
    <div class="testroute">
      TestRoute component
    </div>
  `
})
export class TestRouteComponent {

}
