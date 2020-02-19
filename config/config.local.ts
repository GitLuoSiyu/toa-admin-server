import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
    const config: PowerPartial<EggAppConfig> = {};
    config.cluster = {
        listen: {
            port: 7001,
            hostname: '0.0.0.0',
        },
    };
    config.typeorm = {
        client: {
            type: 'mysql',
            host: '47.112.101.42',
            port: 3306,
            username: 'cool',
            password: 'G82jWr7t4YfkMnBs',
            database: 'cool',
            synchronize: true,
            logging: false,
        },
    };
    return config;
};
