var assert = require('assert'),
    debug = require('debug')('test'),
    $ = require('../lib/main');


describe('测试基本index基本方法', function() {
    describe('base type', function() {
        it('判断undefined', function() {
            var isUndefined = $.isUndefined(undefined);
            assert.equal(isUndefined, true);
        });
        it('判断null', function() {
            var isNull = $.isNull(null);
            assert.equal(isNull, true);
        });
        it('判断Object', function() {
            var obj = Object.create(null),
                isObject = $.isObject(obj);
            assert.equal(isObject, true);
        });
        it('判断布尔值', function() {
            var isBoolean = $.isBoolean(true);
            assert.equal(isBoolean, true);
        });
        it('判断数组', function() {
            var arr = new Array();
            assert.equal($.isArray(arr), true);
        });
        it('判断函数', function() {
            var fn = new Function();
            assert.equal($.isFunction(fn), true);
        });
        it('判断数值', function() {
            assert.equal($.isNumber(1), true);
        });
        it('判断日期', function() {
            var date = new Date();
            debug('date: %s', date)
            assert.equal($.isDate(date), true);
        });
        it('判断字符串', function() {
            assert.equal($.isString('test'), true);
        });
        it('判断NaN', function() {
            assert.equal($.isNaN(NaN), true);
        });
        it('判断对象是否具有对应属性', function() {
            var obj = {
                name: 'Nico'
            }
            assert.equal($.has(obj, 'name'), true);
        });
        it('判断获取argument参数', function() {
            var a = 1,
                b = 2;

            function test() {
                return $.flatArgs(arguments);
            }
            assert.deepEqual(test(1, 2), [1, 2]);

        });
    });

    describe('object class', function() {
        it('浅拷贝对象', function() {
            var src = [1, 2, 3],
                dest = {};
            dest = $.copy(src);
            debug("src: %O", src);
            debug("dest: %O", dest);
            assert.deepEqual(src, dest);
        });
    });

    describe('util class', function() {
        it('获取url参数', function() {
            var url = 'https://www.baidu.com?query=123&name=test';
            assert.equal($.getUrlParam(url, 'name'), 'test');
            assert.equal($.getUrlParam(url, 'query'), '123');
        });
    });
})