import { resources } from 'cc';
import ConfigManager from './Utils/ConfigManager';

export const Message = {
    TalentSelectEnd: 'TalentSelectEnd',
    DistributePropEnd: 'DistributePropEnd',
    Replay: 'Replay',
    StartGame: 'StartGame',
    Achievement: 'Achievement',
    StartMenu: 'StartMenu'
}

/* 保留枚举定义，因为它被用于类型检查
export enum ConfigProp {
    CHR, // 颜值 charm CHR
    INT, // 智力 intelligence INT
    STR, // 体质 strength STR
    MNY, // 家境 money MNY
    SPR, // 快乐 spirit SPR
}*/

// 从json文件中读取配置
export let PropNameMap: { [key: string]: string } = {};

// 初始化配置
ConfigManager.readJson('defines').then((config: any) => {
    PropNameMap = config.PropNameMap;
}).catch(err => {
    console.error('Failed to load PropNameMap from defines.json:', err);
});
