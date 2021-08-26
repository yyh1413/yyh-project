import moment from 'moment';

/** eName转换为cName，objs：字典，eName：eName */
export function eName2cName(objs: { eName: string, cName: string }[], eName: string) {
    if (objs && objs.length > 0) {
        for (let obj of objs) {
            if (obj.eName === eName) {
                return obj.cName;
            }
        }
    }
    return eName;
}

/** code转换为cName，objs：字典，code：code */
export function code2cName(objs: { code: string, cName: string }[], code: string) {
    if (objs && objs.length > 0) {
        for (let obj of objs) {
            if (obj.code === code) {
                return obj.cName;
            }
        }
    }
    return code;
}
export function code2eName(objs: { code?: string, eName?: string }[], code: string) {
    if (code && objs && objs.length > 0) {
        for (let obj of objs) {
            if (obj.code === code) {
                return obj.eName;
            }
        }
    }
    return code;
}

/**
 * 四舍五入
 * @param value 要四舍五入的值
 * @param decimal 保留的小数点位数,默认保留2位小数
 */
export function round(value: number|string, decimal: number = 2) {
    if (typeof value === "string") {
        value = parseFloat(value);
    }
    const pow = Math.pow(10, decimal);
    return Math.round(value * pow) / pow;
}

/**
 * 四舍五入并补齐小数位数
 * @param value 要四舍五入的值
 * @param decimal 保留的小数点位数,默认保留return 2位小数
 */
export function roundFix(value: string | number | undefined, decimal: number = 2) {
    if(value === undefined){
        value = 0;
    }else if (typeof value === "string") {
        value = parseFloat(value);
    }
    if (typeof value === "number") {
        return value.toFixed(decimal);
    }
    return value;
}

/**
 * 转数字
 * @param value 参数
 */
export function toNumber(value: string | number){
    if (typeof value === "string") {
        value = parseFloat(value);
    }
    if (typeof value === "number") {
        return isNaN(value) ? 0 : value;
    }
    return 0;
}

/**
 * 输入中转数字
 * @param value 参数
 * @param reg
 */
export function toInputNumber(value: string | number, reg =/^[-+]?\d*\.?$/){
    if (typeof value === "string") {
        if (value.match(reg)){
            return value;
        }else{
            value = parseFloat(value);
        }
    }
    if (typeof value === "number") {
        return isNaN(value) ? undefined : value;
    }
    return 0;
}

export const numberBetween = (value:number, n1:number, n2:number) => {
    let max;
    let min;
    if(n1 > n2){
        max = n1;
        min = n2;
    }else{
        max = n2;
        min = n1;
    }
    if(value <= max && value >= min){
        return true;
    }else{
        return false;
    }
}

/** obj中是否存在key对应的字段 */
export const isValidKey = (key: string, obj: {}): key is keyof typeof obj => key in obj;
/** obj中key对应的字段值，如果不存在字段，返回undefined */
export const getObjectValue = (key: string, obj: {}) => isValidKey(key, obj) ? obj[key] : undefined;
/** obj中字段数量 */
export const getObjectKeyCount = (obj: {}) => Object.getOwnPropertyNames(obj).length;
/** 遍历obj中每个字段并调用callback方法， callback方法中key为字段名，value为字段值 */
export const mapObject = (obj: {}, callback: (key: string, value: any) => any) => Object.getOwnPropertyNames(obj).map((key) => callback(key, getObjectValue(key, obj)));
/** 遍历obj中每个字段并调用callback方法， callback方法中key为字段名，value为字段值 */
export const foreachObject = (obj: {}, callback: (key: string, value: any) => void) => Object.getOwnPropertyNames(obj).forEach((key) => callback(key, getObjectValue(key, obj)));
/** 在对象数组中查找对象，返回第一个key字段的值一致的索引，未找到返回-1 */
export const arrayIndexOf = (arrays: any[], obj: any, key: string) => {
    const value = getObjectValue(key, obj);
    for (let i = 0; i < arrays.length; i++) {
        if (value === getObjectValue(key, arrays[i])) {
            return i;
        }
    }
    return -1;
};
/** 目标时间是否在开始时间和结束时间之间，当不存在目标时间和开始时间与结束时间时返回true */
export const isBetween = (dataTime: moment.Moment | undefined, begin?: moment.Moment, end?: moment.Moment) => {
    if (dataTime) {
        if (begin && end) {
            return dataTime.isBetween(begin, end);
        } else if (begin) {
            return dataTime.isAfter(begin);
        } else if (end) {
            return dataTime.isBefore(end);
        } else {
            return true;
        }
    } else {
        return (!begin && !end);
    }
};

/** 校验权限 */
export const checkAuth = (authCode: string, authList?: any[]) => {
    if (!authList) { return false; }
    for (let auth of authList) {
        if (auth.authCode === authCode) {
            return auth.authValid as boolean
        } else if (auth.auths) {
            for (let subAuth of auth.auths) {
                if (subAuth.authCode === authCode) {
                    return subAuth.authValid as boolean
                }
            }
        }
    }
    return true;
};

/** 设置权限 */
export const setAuth = (authCode: string, authList: any[], authValid: boolean) => {
    for (let auth of authList) {
        if (auth.authCode === authCode) {
            auth.authValid = authValid;
        } else if (auth.auths) {
            for (let subAuth of auth.auths) {
                if (subAuth.authCode === authCode) {
                    subAuth.authValid = authValid;
                }
            }
        }
    }
}

/** 从权限全名中取得权限名 */
export const getAuthName = (fullName: string) => {
    const authNames: string[] = fullName.split(".");
    return authNames[authNames.length - 1];
};

/** 从用户完整ID中截取公司ID */
export const getCompanyID = (userId: string) => {
    if (userId.length >= 10) {
        return userId.substring(0, 10);
    }
    return undefined;
};

/** 从用户完整ID中截取用户ID */
export const getUserID = (userId: string) => {
    if (userId.length >= 10) {
        return userId.substring(10);
    }
    return undefined;
};

/**
 * 生成UUID
 */
export const getUuid = () => {
    return Number(Math.random().toString().substr(3, 14) + String(Date.now())).toString(36)
};

const correspondingMap: { [key: string]: number } = {
    "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
    "A": 10, "B": 12, "C": 13, "D": 14, "E": 15, "F": 16, "G": 17, "H": 18, "I": 19, "J": 20, "K": 21, "L": 23, "M": 24, "N": 25,
    "O": 26, "P": 27, "Q": 28, "R": 29, "S": 30, "T": 31, "U": 32, "V": 34, "W": 35, "X": 36, "Y": 37, "Z": 38
};

/** 校验集装箱箱号 */
export const checkContainerId = (containerId: string) => {
    if (containerId === undefined || containerId.length !== 11) {
        return false
    }
    let sum = 0;
    let remainder;
    // 截取 4字母+6数字+1校验码
    const containerIdBody = containerId.substr(0, 10);
    const containerIdFoot = containerId.substr(10, 10);
    const strArray = containerIdBody.split('');
    for (let i = 0; i < strArray.length; i++) {
        let iKey = strArray[i];
        sum = sum + correspondingMap[iKey] * Math.pow(2, i);
    }
    // 前10位计算得到的余数
    remainder = sum % 11;
    console.log(remainder);
    // 用余数和最后一个字符对比
    return (remainder === 10 && containerIdFoot === '0') || (String(remainder) + '' === containerIdFoot);
};

export const filterOption = (input: string, option: any) => {
    const children = option.props.children;
    if (typeof children === "string") {
        return (children as string).toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }else{
        console.log("filterOption:", children, typeof children);
    }
    return false;
};

/**
 * 返回当前时间段
 */
export const getTimeSegName = () => {
    const hour = moment().hour();
    if (hour >= 0 && hour < 6) {
        return "早晨"
    }
    if (hour >= 6 && hour < 12) {
        return "上午"
    }
    if (hour >= 12 && hour < 14) {
        return "中午"
    }
    if (hour >= 14 && hour < 18) {
        return "下午"
    }
    if (hour >= 18 && hour < 24) {
        return "晚上"
    }
}

/**
 * 有流水ID的对象数组去重
 * @param valArr
 */
export const arrayToSet = (valArr: {id:string}[]) => {
    const map = new Map<string, any>();
    valArr.forEach((record) => map.set(record.id, record));
    return Array.from(map.values());
};

/**
 * 数值保留两位小数
 * @param numParam
 */
export const keepTwoDecimals = (numParam: string) => {
    return roundFix(parseFloat(numParam));
};

/**
 * 若if(当前值) 为 false, 返回默认值
 * @param value 当前值
 * @param defaultValue 默认值
 */
export const getValueDefault = (value: any, defaultValue: any) => value ? value : defaultValue;

/**
 * 字符串数组去重
 * @param list 数组
 */
export const stringDuplicate = (list?: string[]) => {
    if (list) {
        const set = new Set<string>();
        for (const item of list) {
            set.add(item);
        }
        return Array.from(set);
    }
    return [];
}

/**
 * 事件工具，参考地址:https://blog.csdn.net/qq_39759115/article/details/78499284
 * 这个工具对JS事件处理方面做了封装，可以兼容大部分浏览器
 */
export const EventUtil = {

    addHandler: function (element: any, type: string, handler: any) { // 添加事件
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);  // 使用DOM2级方法添加事件
        } else if (element.attachEvent) {                    // 使用IE方法添加事件
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;          // 使用DOM0级方法添加事件
        }
    },

    removeHandler: function (element: any, type: string, handler: any) {  // 取消事件
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = undefined;
        }
    },

    getEvent: function (event: any) {  // 使用这个方法跨浏览器取得event对象
        return event ? event : window.event;
    },

    getTarget: function (event: any) {  // 返回事件的实际目标
        return event.target || event.srcElement;
    },

    preventDefault: function (event: any) {   // 阻止事件的默认行为
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    stopPropagation: function (event: any) {  // 立即停止事件在DOM中的传播
        // 避免触发注册在document.body上面的事件处理程序
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    getRelatedTarget: function (event: any) {  // 获取mouseover和mouseout相关元素
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {      // 兼容IE8-
            return event.toElement;
        } else if (event.formElement) {
            return event.formElement;
        } else {
            return undefined;
        }
    },

    getButton: function (event: any) {    // 获取mousedown或mouseup按下或释放的按钮是鼠标中的哪一个
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button;
        } else {
            switch (event.button) {   // 将IE模型下的button属性映射为DOM模型下的button属性
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;  // 按下的是鼠标主按钮（一般是左键）
                case 2:
                case 6:
                    return 2;  // 按下的是中间的鼠标按钮
                case 4:
                    return 1;  // 鼠标次按钮（一般是右键）
            }
        }
    },

    getWheelDelta: function (event: any) { // 获取表示鼠标滚轮滚动方向的数值
        if (event.wheelDelta) {
            return event.wheelDelta;
        } else {
            return -event.detail * 40;
        }
    },

    getCharCode: function (event: any) {   //  以跨浏览器取得相同的字符编码，需在keypress事件中使用
        if (typeof event.charCode === "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }

};

/**
 * 深度比较多个对象是否一致
 * @param _args 比较对象
 */
export const deepCompare = (..._args:any[]) => {
    var i, l, leftChain: any[], rightChain: any[];

    function compare2Objects(x: any, y: any) {
        var p;

        // remember that NaN === NaN returns false
        // and isNaN(undefined) returns true
        if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
            return true;
        }

        // Compare primitives and functions.
        // Check if both arguments link to the same object.
        // Especially useful on the step where we compare prototypes
        if (x === y) {
            return true;
        }

        // Works in case when functions are created in constructor.
        // Comparing dates is a common scenario. Another built-ins?
        // We can even handle functions passed across iframes
        if ((typeof x === 'function' && typeof y === 'function') ||
            (x instanceof Date && y instanceof Date) ||
            (x instanceof RegExp && y instanceof RegExp) ||
            (x instanceof String && y instanceof String) ||
            (x instanceof Number && y instanceof Number)) {
            return x.toString() === y.toString();
        }

        // At last checking prototypes as good as we can
        if (!(x instanceof Object && y instanceof Object)) {
            return false;
        }

        if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
            return false;
        }

        if (x.constructor !== y.constructor) {
            return false;
        }

        if (x.prototype !== y.prototype) {
            return false;
        }

        // Check for infinitive linking loops
        if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
            return false;
        }

        // Quick checking of one object being a subset of another.
        // todo: cache the structure of arguments[0] for performance
        for (p in y) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false;
            } else if (typeof y[p] !== typeof x[p]) {
                return false;
            }
        }

        for (p in x) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false;
            } else if (typeof y[p] !== typeof x[p]) {
                return false;
            }

            switch (typeof (x[p])) {
                case 'object':
                case 'function':

                    leftChain.push(x);
                    rightChain.push(y);

                    if (!compare2Objects(x[p], y[p])) {
                        return false;
                    }

                    leftChain.pop();
                    rightChain.pop();
                    break;

                default:
                    if (x[p] !== y[p]) {
                        return false;
                    }
                    break;
            }
        }

        return true;
    }

    if (_args.length < 1) {
        return true; //Die silently? Don't know how to handle such case, please help...
        // throw "Need two or more arguments to compare";
    }

    for (i = 1, l = _args.length; i < l; i++) {

        leftChain = []; //Todo: this can be cached
        rightChain = [];

        if (!compare2Objects(_args[0], _args[i])) {
            return false;
        }
    }

    return true;
}

/** 数字转换为英文(小数自动保留两位) */
export const numberToEnglish = (num:number) => {
    //数字英文写法
    const tally = {
        arr1: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        arr2: ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        arr3: ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
        arr4: ["hundred", "thousand", "million", "billion", "trillion", "quadrillion"]
    }

    //转换整数部分
    function convert_integer(n:string){
        try {
            const fenge:string[] = toThousands(n).split(',');
            let result = "";
            for (let i = 0; i < fenge.length; i++) {
                if (fenge[i].length === 3) {
                    result += tally.arr1[parseInt(fenge[i].substring(0, 1))] + " "; //百位
                    result += tally.arr4[0];
                    if (doubledight(fenge[i].substring(1)) !== "") {
                        result += " and " + doubledight(fenge[i].substring(1));
                    }
                } else if (fenge[i].length === 2) {
                    result += doubledight(fenge[i]) //十位
                } else if (fenge[i].length === 1) {
                    result += tally.arr1[parseInt(fenge[i])]; //个位
                }
                //添加千分位单位（数字超过1000，每三位数字分配一个单位）
                if (i < fenge.length - 1) {
                    result += " " + tally.arr4[fenge.length - 1 - i] + " ";
                }
            }
            return result;
        } catch (ex) {
            console.error(ex);
        }
    }
    //转换小数部分
    function convert_decimal(n:string){
        const d = n.split('');
        let result = '';
        if (d.length > 0) {
            d.forEach(a => {
                result += convert_integer(a) + " ";
            });
        }
        return result;
    }
    //组合两位数
    function doubledight(n:string){
        let result = "";
        if (parseInt(n) !== 0) {
            const dd = n.split('');
            const dd0 = parseInt(dd[0]);
            const dd1 = parseInt(dd[1]);
            if (dd0 < 1) {
                result = tally.arr1[dd1];
            } else if (dd0 === 1) {
                result = tally.arr2[dd1];
            } else {
                result = tally.arr3[dd0 - 2] + "-" + tally.arr1[dd1];
            }
        }
        return result;
    }

    //转换千分位显示，例：1000000 = 1,000,000
    function toThousands(n: string){
        let num = (n || 0).toString(), result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) {
            result = num + result;
        }
        return result;
    }

    //分割整数和小数（如果有小数的话）
    const NumList = round(num).toString().split('.');
    const zheng = convert_integer(NumList[0]); //整数部分
    if (zheng && NumList.length === 1) {//如果分割长度是1，说明是整数
        return zheng.toUpperCase();
    } else if (zheng && NumList.length === 2) {//如果分割长度是2，说明是小数
        if (NumList[1].length <= 2) {
            const xiao = convert_decimal(NumList[1]);
            return `${zheng} point ${xiao}`.toUpperCase();
        } else {
            //如果小数超过2位，不转换，返回原数据
            return num;
        }
    } else {
        //不转换，返回原数据
        return num;
    }
}
