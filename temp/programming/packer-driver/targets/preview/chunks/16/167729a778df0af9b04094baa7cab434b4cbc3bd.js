System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function getRate(type, value) {
    switch (type) {
      case 'times':
        if (value >= 100) return {
          2: 6
        };
        if (value >= 70) return {
          2: 5
        };
        if (value >= 50) return {
          2: 4
        };
        if (value >= 30) return {
          2: 3
        };
        if (value >= 10) return {
          2: 2
        };
        return {
          2: 1
        };

      case 'achievement':
        if (value >= 100) return {
          3: 6
        };
        if (value >= 70) return {
          3: 5
        };
        if (value >= 50) return {
          3: 4
        };
        if (value >= 30) return {
          3: 3
        };
        if (value >= 10) return {
          3: 2
        };
        return {
          3: 1
        };

      default:
        return {};
    }
  }

  function getGrade(type, value) {
    switch (type) {
      case 'times':
      case 'achievement':
        if (value >= 100) return 3;
        if (value >= 50) return 2;
        if (value >= 10) return 1;
        return 0;

      case 'talentRate':
        if (value >= 0.9) return 3;
        if (value >= 0.6) return 2;
        if (value >= 0.3) return 1;
        return 0;

      case 'eventRate':
        if (value >= 0.6) return 3;
        if (value >= 0.4) return 2;
        if (value >= 0.2) return 1;
        return 0;

      default:
        return 0;
    }
  }

  _export({
    getRate: getRate,
    getGrade: getGrade
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a123czcsKZN+b5TK2RsPs0c", "addition", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=167729a778df0af9b04094baa7cab434b4cbc3bd.js.map