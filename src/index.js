'use strict';

/**
 * 为中文与英文之间保留一个空格，保持美观感。
 * @param{String}
 * @return{String}
 */
module.exports = function (data) {
    const reg = /([\u4e00-\u9fff,])?([a-zA-Z0-9 \.\-\(\)\+\[\]\{\}\!\@\#\$\%\^\&\*\\]+)([\u4e00-\u9fff])?/g;
    // [中文][英文][中文]
    return data.replace(reg, (match, $1, $2, $3) => {
        let str = '';
        // 如果英文前面有中文，则在中文后加空格
        if ($1 !== undefined) str += $1 + ' ';
        str += $2.trim();
        // 如果英文后面有中文，则在中文前加空格
        if ($3 !== undefined) str += ' ' + $3;

        return str;
    });
};



