import { CapacitorConfig } from '@capacitor/cli';
import ip from 'ip'

import projectConfig from './project.json'

const config: CapacitorConfig = {
  appId: 'io.taepper.screentime',
  appName: 'PS Bildschirmzeit',
  webDir: '../../dist/apps/screentime',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

if (process.env.SERVE_LOCAL === 'true') {
  const port = projectConfig.targets.serve.options.port
  config.server = {
    url: `http://${ip.address()}:${port}`,
    cleartext: true
  }
} else {
  Reflect.deleteProperty(config, 'server')
}
export default config;
