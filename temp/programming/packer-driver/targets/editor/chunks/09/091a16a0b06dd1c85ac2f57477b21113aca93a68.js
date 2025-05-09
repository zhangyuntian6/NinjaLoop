System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function clone(value) {
    switch (typeof value) {
      case 'object':
        if (Array.isArray(value)) return value.map(v => clone(v));
        const newObj = {};

        for (const key in value) newObj[key] = clone(value[key]);

        return newObj;

      default:
        return value;
    }
  }

  function max(...arr) {
    return Math.max(...arr.flat());
  }

  function min(...arr) {
    return Math.min(...arr.flat());
  }

  function sum(...arr) {
    let s = 0;
    arr.flat().forEach(v => s += v);
    return s;
  }

  function average(...arr) {
    const s = sum(...arr);
    return s / arr.flat().length;
  }

  function weightRandom(list) {
    let totalWeights = 0;

    for (const [, weight] of list) totalWeights += weight;

    let random = Math.random() * totalWeights;

    for (const [id, weight] of list) if ((random -= weight) < 0) return id;

    return list[list.length - 1];
  }

  function listRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  _export({
    clone: clone,
    max: max,
    min: min,
    sum: sum,
    average: average,
    weightRandom: weightRandom,
    listRandom: listRandom
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cbaaf06ZhFAdKhR7JtE1ykV", "util", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=091a16a0b06dd1c85ac2f57477b21113aca93a68.js.map