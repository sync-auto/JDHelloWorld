"use strict";
/**
 * 小程序-赚京豆
 * cron: 15,30,45 0 * * *
 * export ZJD_OPEN=5  // 前n个账号开团, 默认全开
 * CK1 优先助力HW.ts
 */
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var h5st_pro_1 = require("./utils/h5st_pro");
var shareCodeSelf = [], shareCode = [], shareCodeHW = [];
var Zjd = /** @class */ (function (_super) {
    __extends(Zjd, _super);
    function Zjd() {
        var _this = _super.call(this) || this;
        _this.openNum = 0;
        return _this;
    }
    Zjd.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(this, this.help, this.tips)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Zjd.prototype.tips = function () {
        this.zjd_open = Number(process.env.ZJD_OPEN) || 10;
        process.env.ZJD_OPEN ? console.log('自定义', this.zjd_open, '个账号开团') : '';
    };
    Zjd.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait(1000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.h5stTool.__genH5st({
                                appid: 'vipMiddle',
                                body: JSON.stringify(body),
                                client: 'tjj_m',
                                clientVersion: '3.1.3',
                                functionId: fn
                            })];
                    case 2:
                        h5st = _a.sent();
                        return [2 /*return*/, this.post("https://api.m.jd.com/api", "functionId=".concat(fn, "&h5st=").concat(h5st, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&appid=vipMiddle&client=tjj_m&clientVersion=3.1.3"), {
                                'cookie': this.user.cookie,
                                'origin': 'https://h5platform.jd.com',
                                'referer': 'https://h5platform.jd.com/',
                                'user-agent': this.user.UserAgent
                            })];
                }
            });
        });
    };
    Zjd.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var fp, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user = user;
                        this.user.UserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1");
                        return [4 /*yield*/, this.getFp()];
                    case 1:
                        fp = _a.sent();
                        console.log(fp, typeof fp);
                        this.h5stTool = new h5st_pro_1.H5ST('aea1e', this.user.UserAgent, fp, 'https://h5platform.jd.com/swm-static/exchange-equity/index.html#/pages/divideBean/divideBean?activeId=779241835423588352', 'https://h5platform.jd.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.api('distributeBeanActivityInfo', { "paramData": { "channel": "FISSION_BEAN" } })];
                    case 3:
                        res = _a.sent();
                        if (!(res.data.assistStatus === 1)) return [3 /*break*/, 4];
                        // 已开，没满
                        console.log('已开团，', res.data.assistedRecords.length, '/', res.data.assistNum, '，剩余', Math.round(res.data.assistValidMilliseconds / 1000 / 60), '分钟');
                        shareCodeSelf.push({
                            assistStartRecordId: res.data.assistStartRecordId,
                            encPin: res.data.encPin,
                            id: res.data.id
                        });
                        return [3 /*break*/, 17];
                    case 4:
                        if (!(res.data.assistStatus === 2 && res.data.canStartNewAssist && this.openNum < this.zjd_open)) return [3 /*break*/, 10];
                        // 没开团
                        this.openNum++;
                        this.h5stTool = new h5st_pro_1.H5ST('82703', this.user.UserAgent, fp, 'https://h5platform.jd.com/swm-static/exchange-equity/index.html#/pages/divideBean/divideBean?activeId=779241835423588352', 'https://h5platform.jd.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.api('vvipclub_distributeBean_startAssist', { "activityIdEncrypted": res.data.id, "channel": "FISSION_BEAN" })];
                    case 6:
                        res = _a.sent();
                        if (!res.success) return [3 /*break*/, 8];
                        console.log("\u5F00\u56E2\u6210\u529F\uFF0C\u7ED3\u675F\u65F6\u95F4\uFF1A".concat(res.data.endTime));
                        return [4 /*yield*/, this.api('distributeBeanActivityInfo', { "paramData": { "channel": "FISSION_BEAN" } })];
                    case 7:
                        res = _a.sent();
                        shareCodeSelf.push({
                            assistStartRecordId: res.data.assistStartRecordId,
                            encPin: res.data.encPin,
                            id: res.data.id
                        });
                        return [3 /*break*/, 9];
                    case 8:
                        this.o2s(res, '开团失败');
                        _a.label = 9;
                    case 9: return [3 /*break*/, 17];
                    case 10:
                        if (!(res.data.assistedRecords.length === res.data.assistNum)) return [3 /*break*/, 16];
                        console.log('已成团');
                        if (!res.data.canStartNewAssist) return [3 /*break*/, 15];
                        this.h5stTool = new h5st_pro_1.H5ST('82703', this.user.UserAgent, fp, 'https://h5platform.jd.com/swm-static/exchange-equity/index.html#/pages/divideBean/divideBean?activeId=779241835423588352', 'https://h5platform.jd.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.api('vvipclub_distributeBean_startAssist', { "activityIdEncrypted": res.data.id, "channel": "FISSION_BEAN" })];
                    case 12:
                        res = _a.sent();
                        if (!res.success) return [3 /*break*/, 14];
                        console.log("\u5F00\u56E2\u6210\u529F\uFF0C\u7ED3\u675F\u65F6\u95F4\uFF1A".concat(res.data.endTime));
                        return [4 /*yield*/, this.api('distributeBeanActivityInfo', { "paramData": { "channel": "FISSION_BEAN" } })];
                    case 13:
                        res = _a.sent();
                        shareCodeSelf.push({
                            assistStartRecordId: res.data.assistStartRecordId,
                            encPin: res.data.encPin,
                            id: res.data.id
                        });
                        return [3 /*break*/, 15];
                    case 14:
                        this.o2s(res, '开团失败');
                        _a.label = 15;
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        if (!res.data.canStartNewAssist) {
                            console.log('不可开团');
                        }
                        _a.label = 17;
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    Zjd.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, users_1, user, fp, _a, shareCode_1, code, res, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.o2s(shareCodeSelf, '内部助力');
                        _i = 0, users_1 = users;
                        _b.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 12];
                        user = users_1[_i];
                        this.user = user;
                        this.user.UserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1");
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getshareCodeHW('zjd')];
                    case 2:
                        shareCodeHW = _b.sent();
                        _b.label = 3;
                    case 3:
                        shareCode = user.index === 0 ? Array.from(new Set(__spreadArray(__spreadArray([], shareCodeHW, true), shareCodeSelf, true))) : Array.from(new Set(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodeHW, true)));
                        return [4 /*yield*/, this.getFp()];
                    case 4:
                        fp = _b.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('03064', this.user.UserAgent, fp, 'https://h5platform.jd.com/swm-static/exchange-equity/index.html#/pages/divideBean/divideBean?activeId=779241835423588352', 'https://h5platform.jd.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 5:
                        _b.sent();
                        _a = 0, shareCode_1 = shareCode;
                        _b.label = 6;
                    case 6:
                        if (!(_a < shareCode_1.length)) return [3 /*break*/, 11];
                        code = shareCode_1[_a];
                        _b.label = 7;
                    case 7:
                        _b.trys.push([7, 9, , 10]);
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code.encPin.replace("\n", "")));
                        return [4 /*yield*/, this.api('vvipclub_distributeBean_assist', { "assistStartRecordId": code.assistStartRecordId, "assistedPinEncrypted": code.encPin, "activityIdEncrypted": code.id, "channel": "FISSION_BEAN", "launchChannel": "" })];
                    case 8:
                        res = _b.sent();
                        if (res.success) {
                            console.log('助力成功');
                        }
                        else if (res.resultCode === '9200008') {
                            console.log('不能助力自己');
                        }
                        else if (res.resultCode === '90000014') {
                            console.log('上限');
                            return [3 /*break*/, 11];
                        }
                        else if (res.resultCode === '2400205') {
                            console.log('对方已成团');
                        }
                        else if (res.resultCode === '9200011') {
                            console.log('已助力过');
                        }
                        else {
                            this.o2s(res, 'vvipclub_distributeBean_assist');
                        }
                        return [3 /*break*/, 10];
                    case 9:
                        e_1 = _b.sent();
                        console.log(e_1);
                        return [3 /*break*/, 11];
                    case 10:
                        _a++;
                        return [3 /*break*/, 6];
                    case 11:
                        _i++;
                        return [3 /*break*/, 1];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    return Zjd;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Zjd().init().then();
