System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, data;

  function summary(type, value) {
    var length = data[type].length;

    while (length--) {
      var {
        min,
        judge,
        grade
      } = data[type][length];
      if (min == void 0 || value >= min) return {
        judge,
        grade
      };
    }
  }

  _export("summary", summary);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ea86yHpORGZ7iSw1xGvH8J", "summary", undefined);

      data = {
        "CHR": [{
          "judge": "地狱",
          "grade": 0
        }, {
          "min": 1,
          "judge": "折磨",
          "grade": 0
        }, {
          "min": 2,
          "judge": "不佳",
          "grade": 0
        }, {
          "min": 4,
          "judge": "普通",
          "grade": 0
        }, {
          "min": 7,
          "judge": "优秀",
          "grade": 1
        }, {
          "min": 9,
          "judge": "罕见",
          "grade": 2
        }, {
          "min": 11,
          "judge": "逆天",
          "grade": 3
        }],
        "MNY": [{
          "judge": "地狱",
          "grade": 0
        }, {
          "min": 1,
          "judge": "折磨",
          "grade": 0
        }, {
          "min": 2,
          "judge": "不佳",
          "grade": 0
        }, {
          "min": 4,
          "judge": "普通",
          "grade": 0
        }, {
          "min": 7,
          "judge": "优秀",
          "grade": 1
        }, {
          "min": 9,
          "judge": "罕见",
          "grade": 2
        }, {
          "min": 11,
          "judge": "逆天",
          "grade": 3
        }],
        "SPR": [{
          "judge": "地狱",
          "grade": 0
        }, {
          "min": 1,
          "judge": "折磨",
          "grade": 0
        }, {
          "min": 2,
          "judge": "不幸",
          "grade": 0
        }, {
          "min": 4,
          "judge": "普通",
          "grade": 0
        }, {
          "min": 7,
          "judge": "幸福",
          "grade": 1
        }, {
          "min": 9,
          "judge": "极乐",
          "grade": 2
        }, {
          "min": 11,
          "judge": "天命",
          "grade": 3
        }],
        "INT": [{
          "judge": "地狱",
          "grade": 0
        }, {
          "min": 1,
          "judge": "折磨",
          "grade": 0
        }, {
          "min": 2,
          "judge": "不佳",
          "grade": 0
        }, {
          "min": 4,
          "judge": "普通",
          "grade": 0
        }, {
          "min": 7,
          "judge": "优秀",
          "grade": 1
        }, {
          "min": 9,
          "judge": "罕见",
          "grade": 2
        }, {
          "min": 11,
          "judge": "逆天",
          "grade": 3
        }, {
          "min": 21,
          "judge": "识海",
          "grade": 3
        }, {
          "min": 131,
          "judge": "元神",
          "grade": 3
        }, {
          "min": 501,
          "judge": "仙魂",
          "grade": 3
        }],
        "STR": [{
          "judge": "地狱",
          "grade": 0
        }, {
          "min": 1,
          "judge": "折磨",
          "grade": 0
        }, {
          "min": 2,
          "judge": "不佳",
          "grade": 0
        }, {
          "min": 4,
          "judge": "普通",
          "grade": 0
        }, {
          "min": 7,
          "judge": "优秀",
          "grade": 1
        }, {
          "min": 9,
          "judge": "罕见",
          "grade": 2
        }, {
          "min": 11,
          "judge": "逆天",
          "grade": 3
        }, {
          "min": 21,
          "judge": "凝气",
          "grade": 3
        }, {
          "min": 101,
          "judge": "筑基",
          "grade": 3
        }, {
          "min": 401,
          "judge": "金丹",
          "grade": 3
        }, {
          "min": 1001,
          "judge": "元婴",
          "grade": 3
        }, {
          "min": 2001,
          "judge": "仙体",
          "grade": 3
        }],
        "AGE": [{
          "judge": "胎死腹中",
          "grade": 0
        }, {
          "min": 1,
          "judge": "早夭",
          "grade": 0
        }, {
          "min": 10,
          "judge": "少年",
          "grade": 0
        }, {
          "min": 18,
          "judge": "盛年",
          "grade": 0
        }, {
          "min": 40,
          "judge": "中年",
          "grade": 0
        }, {
          "min": 60,
          "judge": "花甲",
          "grade": 1
        }, {
          "min": 70,
          "judge": "古稀",
          "grade": 1
        }, {
          "min": 80,
          "judge": "杖朝",
          "grade": 2
        }, {
          "min": 90,
          "judge": "南山",
          "grade": 2
        }, {
          "min": 95,
          "judge": "不老",
          "grade": 3
        }, {
          "min": 100,
          "judge": "修仙",
          "grade": 3
        }, {
          "min": 500,
          "judge": "仙寿",
          "grade": 3
        }],
        "SUM": [{
          "judge": "地狱",
          "grade": 0
        }, {
          "min": 41,
          "judge": "折磨",
          "grade": 0
        }, {
          "min": 50,
          "judge": "不佳",
          "grade": 0
        }, {
          "min": 60,
          "judge": "普通",
          "grade": 0
        }, {
          "min": 80,
          "judge": "优秀",
          "grade": 1
        }, {
          "min": 100,
          "judge": "罕见",
          "grade": 2
        }, {
          "min": 110,
          "judge": "逆天",
          "grade": 3
        }, {
          "min": 120,
          "judge": "传说",
          "grade": 3
        }]
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=851c95e969a43de454439f2a46a87b32080f4266.js.map