import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
    typeorm: {
        enable: true,
        package: 'egg-ts-typeorm',
    },
    jwt: {
        enable: true,
        package: 'egg-jwt',
    },
    oss: {
        enable: false,
        package: 'egg-oss',
    },
    redis: {
        enable: true,
        package: 'egg-redis',
    },
    coolTask: {
        enable: true,
        package: 'egg-cool-task',
    },
    nunjucks: {
        enable: true,
        package: 'egg-view-nunjucks',
    },
};

export default plugin;
