/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Instrumentation } from '@appdynamics/react-native-agent';

Instrumentation.start({
  appKey: 'GR-AAB-CWF',
  collectorURL: 'https://gru-col.eum-appdynamics.com',
});

AppRegistry.registerComponent(appName, () => App);
