/// <amd-dependency path="financialTerminalApp/lqv.main.module"/>
/// <amd-dependency path="architectureService"/>

import {module} from 'angular';
import {ArchitectureService} from '../lqp/shared/';
import {CommonConfig} from './config/lll.common.cfg';
import {Config} from './config/config-env/lll.env.cfg';

export let app: ng.IModule = module('lll', [
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'lqv'])
  .run((architectureService: ArchitectureService) => {
    let envConfig: Config = new Config();
    let commonConfig: CommonConfig = new CommonConfig();
    architectureService.loadProperties(commonConfig, envConfig);
  });