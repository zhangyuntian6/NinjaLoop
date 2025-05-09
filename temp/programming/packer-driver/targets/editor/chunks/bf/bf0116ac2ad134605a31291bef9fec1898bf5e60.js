System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ConfigManager, _crd, Message, PropNameMap;

  function _reportPossibleCrUseOfConfigManager(extras) {
    _reporterNs.report("ConfigManager", "./Utils/ConfigManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ConfigManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85642Y205BHnpSvNRHQB1ax", "Defines", undefined);

      __checkObsolete__(['resources']);

      _export("Message", Message = {
        TalentSelectEnd: 'TalentSelectEnd',
        DistributePropEnd: 'DistributePropEnd',
        Replay: 'Replay',
        StartGame: 'StartGame',
        Achievement: 'Achievement',
        StartMenu: 'StartMenu'
      });
      /* 保留枚举定义，因为它被用于类型检查
      export enum ConfigProp {
          CHR, // 颜值 charm CHR
          INT, // 智力 intelligence INT
          STR, // 体质 strength STR
          MNY, // 家境 money MNY
          SPR, // 快乐 spirit SPR
      }*/
      // 从json文件中读取配置


      _export("PropNameMap", PropNameMap = {}); // 初始化配置


      (_crd && ConfigManager === void 0 ? (_reportPossibleCrUseOfConfigManager({
        error: Error()
      }), ConfigManager) : ConfigManager).readJson('defines').then(config => {
        _export("PropNameMap", PropNameMap = config.PropNameMap);
      }).catch(err => {
        console.error('Failed to load PropNameMap from defines.json:', err);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf0116ac2ad134605a31291bef9fec1898bf5e60.js.map