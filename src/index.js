'use strict';

/**
 * 为中文与英文之间保留一个空格，保持美观感。
 * @param{String}
 * @return{String}
 */
module.exports = function (data) {
    const reg = /([\u4e00-\u9fff,])?([a-zA-Z0-9 \.\-\(\)\+\[\]\{\}\!\@\#\$\%\^\&\*\\]+)([\u4e00-\u9fff])?/g;
    return data.replace(reg, (match, $1, $2, $3) => {
        let str = '';
        if ($1 !== undefined) str += $1 + ' ';
        str += $2.trim();
        if ($3 !== undefined) str += ' ' + $3;

        return str;
    });
};



