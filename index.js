/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import Screen1 from './src/screens/screen1'
import Screen2 from './src/screens/screen2'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Screen2);
