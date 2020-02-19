import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.cluster = {
    listen: {
      port: 7001,
      hostname: '127.0.0.1',
    },
  };
  config.typeorm = {
    client: {
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'cool',
      password: 'G82jWr7t4YfkMnBs',
      database: 'cool',
      synchronize: false,
      logging: false,
    },
  };
  return config;
};
