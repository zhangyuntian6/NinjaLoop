System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function clone(value) {
    switch (typeof value) {
      case 'object':
        if (Array.isArray(value)) return value.map(v => clone(v));
        var newObj = {};

        for (var key in value) newObj[key] = clone(value[key]);

        return newObj;

      default:
        return value;
    }
  }

  function max() {
    for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
      arr[_key] = arguments[_key];
    }

    return Math.max(...arr.flat());
  }

  function min() {
    for (var _len2 = arguments.length, arr = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arr[_key2] = arguments[_key2];
    }

    return Math.min(...arr.flat());
  }

  function sum() {
    var s = 0;

    for (var _len3 = arguments.length, arr = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      arr[_key3] = arguments[_key3];
    }

    arr.flat().forEach(v => s += v);
    return s;
  }

  function average() {
    for (var _len4 = arguments.length, arr = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      arr[_key4] = arguments[_key4];
    }

    var s = sum(...arr);
    return s / arr.flat().length;
  }

  function weightRandom(list) {
    var totalWeights = 0;

    for (var [, weight] of list) totalWeights += weight;

    var random = Math.random() * totalWeights;

    for (var [id, _weight] of list) if ((random -= _weight) < 0) return id;

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