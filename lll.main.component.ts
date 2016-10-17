import {Component, Inject} from '../lqp/decorators';

import {app} from './lll.main.module';

@Component(app, {
  selector: 'lllMain',
  templateUrl: '/lll/lll.main.index.html',
})

@Inject()
export class MainController {

  constructor() {}
}

 	
