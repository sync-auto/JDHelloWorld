"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Jd_joy_park = /** @class */ (function (_super) {
    __extends(Jd_joy_park, _super);
    function Jd_joy_park() {
        return _super.call(this) || this;
    }
    Jd_joy_park.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_joy_park.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('https://api.m.jd.com/', "functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&_t=").concat(Date.now(), "&appid=activities_platform"), {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'User-Agent': this.user.UserAgent,
                            'Host': 'api.m.jd.com',
                            'Referer': 'https://joypark.jd.com/',
                            'Origin': 'https://joypark.jd.com',
                            'Cookie': this.user.cookie
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_joy_park.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, t, i, res_1, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.api('apTaskList', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
                    case 1:
                        res = _a.sent();
                        t = res.data[2];
                        i = t.taskDoTimes;
                        _a.label = 2;
                    case 2:
                        if (!(i < t.taskLimitTimes)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.api('apTaskTimeRecord', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "taskId": t.id })];
                    case 3:
                        res_1 = _a.sent();
                        console.log(res_1.success);
                        return [4 /*yield*/, this.wait(31000)];
                    case 4:
                        _a.sent();
                        url = "https://pro.m.jd.com/jdlite/active/3qRAXpNehcsUpToARD9ekP4g6Jhi/index.html?babelChannel=ttt6";
                        return [4 /*yield*/, this.api('apDoTask', { "channel": "4", "checkVersion": true, "itemId": encodeURIComponent(url), "linkId": "L-sOanK_5RJCz7I314FpnQ", "taskId": t.id, "taskType": t.taskType })];
                    case 5:
                        _a.sent();
                        console.log(res_1.success);
                        return [4 /*yield*/, this.wait(1000)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        i++;
                        return [3 /*break*/, 2];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_joy_park;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_joy_park().init().then();
