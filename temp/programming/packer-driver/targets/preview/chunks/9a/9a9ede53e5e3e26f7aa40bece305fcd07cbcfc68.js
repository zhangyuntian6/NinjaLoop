System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function parseCondition(condition) {
    var conditions = [];
    var length = condition.length;
    var stack = [];
    stack.unshift(conditions);
    var cursor = 0;

    var catchString = i => {
      var str = condition.substring(cursor, i).trim();
      cursor = i;
      if (str) stack[0].push(str);
    };

    for (var i = 0; i < length; i++) {
      switch (condition[i]) {
        case ' ':
          continue;

        case '(':
          catchString(i);
          cursor++;
          var sub = [];
          stack[0].push(sub);
          stack.unshift(sub);
          break;

        case ')':
          catchString(i);
          cursor++;
          stack.shift();
          break;

        case '|':
        case '&':
          catchString(i);
          catchString(i + 1);
          break;

        default:
          continue;
      }
    }

    catchString(length);
    return conditions;
  }

  function checkCondition(property, condition) {
    var conditions = parseCondition(condition);
    return checkParsedConditions(property, conditions);
  }

  function checkParsedConditions(property, conditions) {
    if (!Array.isArray(conditions)) return checkProp(property, conditions);
    if (conditions.length == 0) return true;
    if (conditions.length == 1) return checkParsedConditions(property, conditions[0]);
    var ret = checkParsedConditions(property, conditions[0]);

    for (var i = 1; i < conditions.length; i += 2) {
      switch (conditions[i]) {
        case '&':
          if (ret) ret = checkParsedConditions(property, conditions[i + 1]);
          break;

        case '|':
          if (ret) return true;
          ret = checkParsedConditions(property, conditions[i + 1]);
          break;

        default:
          return false;
      }
    }

    return ret;
  }

  function checkProp(property, condition) {
    var length = condition.length;
    var i = condition.search(/[><\!\?=]/);
    var prop = condition.substring(0, i);
    var symbol = condition.substring(i, i += condition[i + 1] == '=' ? 2 : 1);
    var d = condition.substring(i, length);
    var propData = property.get(prop);
    var conditionData = d[0] == '[' ? JSON.parse(d) : Number(d);

    switch (symbol) {
      case '>':
        return propData > conditionData;

      case '<':
        return propData < conditionData;

      case '>=':
        return propData >= conditionData;

      case '<=':
        return propData <= conditionData;

      case '=':
        if (Array.isArray(propData)) return propData.includes(conditionData);
        return propData == conditionData;

      case '!=':
        if (Array.isArray(propData)) return !propData.includes(conditionData);
        return propData == conditionData;

      case '?':
        if (Array.isArray(propData)) {
          for (var p of propData) if (conditionData.includes(p)) return true;

          return false;
        }

        return conditionData.includes(propData);

      case '!':
        if (Array.isArray(propData)) {
          for (var _p of propData) if (conditionData.includes(_p)) return false;

          return true;
        }

        return !conditionData.includes(propData);

      default:
        return false;
    }
  }

  function extractMaxTriggers(condition) {
    // Assuming only age related talents can be triggered multiple times.
    var RE_AGE_CONDITION = /AGE\?\[([0-9\,]+)\]/;
    var match_object = RE_AGE_CONDITION.exec(condition);

    if (match_object == null) {
      // Not age related, single trigger.
      return 1;
    }

    var age_list = match_object[1].split(",");
    return age_list.length;
  }

  _export({
    checkCondition: checkCondition,
    extractMaxTriggers: extractMaxTriggers
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4613dzQqvlAubehIlfH/Drl", "condition", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a9ede53e5e3e26f7aa40bece305fcd07cbcfc68.js.map