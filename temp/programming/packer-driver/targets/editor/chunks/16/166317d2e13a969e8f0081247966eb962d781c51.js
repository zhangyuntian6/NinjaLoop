System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, ConfigManager, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75637qSsT9DBJznyRJRalfo", "ConfigManager", undefined);

      __checkObsolete__(['_decorator', 'loader', 'resources']);

      _export("default", ConfigManager = class ConfigManager {
        static readJson(path) {
          return new Promise((resolve, reject) => {
            resources.load(path, function (err, jsonObj) {
              if (err) {
                console.error(err);
                reject(err);
              } else {
                resolve(jsonObj.json);
              }
            });
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=166317d2e13a969e8f0081247966eb962d781c51.js.map