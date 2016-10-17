import {Component, Inject} from '../../../lqp/decorators';

import {app} from '../../lll.main.module';

@Service(app, 'mainService')
@Inject('$http')
export class MainService {

  constructor() { }

}
