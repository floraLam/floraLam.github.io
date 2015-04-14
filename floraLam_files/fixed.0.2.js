/**
 * Fixed({
 *    id: "menu",       容器ID
 *    distance: 100,    触发离顶部的距离
 *    stay: 30,         触发后离顶部的距离
 *    isTop: true       是否为顶部定位
 * });
 *
 * @author jianminlu
 * @update 2013-10-02 17:05
 * @version v0.2
 */
(function(){
    Function.prototype.before = function(func) {
        var __self = this;
        return function() {
            if (func.apply(this, arguments) === false) {
                return false;
            }
            return __self.apply(this, arguments);
        }
    }
    var Fixed = window['Fixed'] = function(o){
        return new _Fixed(o);
    },
    _Fixed = function(o){
        this.id = o.id;               // obj id
        this.distance = o.distance != undefined ? o.distance : 0;   // 触发离顶部的距离
        this.stay = o.stay != undefined ? o.stay : 0;   // 触发离顶部的距离
        this.isTop = o.isTop != undefined ? o.isTop : false;
        this.init();
    }
    _Fixed.prototype = {
        setFixed: function (){
            var _this = this;
            var obj = document.getElementById(_this.id);
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            var ie6 = !window.XMLHttpRequest;
            if(ie6){
                obj.className = obj.className;
            }
            if(!_this.isTop){  // top
                if(scrollTop > _this.distance - _this.stay){
                    obj.style.display = "block";
                    if(ie6){
                        obj.style.position = "absolute";
                    }else{
                        obj.style.position = "fixed";
                    }
                }else{
                    obj.style.display = "none";
                }
            }else{  // menu
                if(scrollTop > _this.distance - _this.stay){
                    if(ie6){
                        obj.style.top = scrollTop + _this.stay + "px";
                    }else{
                        obj.style.position = "fixed";
                        obj.style.top = _this.stay + "px";
                    }
                }else{
                    obj.style.position = "absolute";
                    obj.style.top = _this.distance + "px";
                }
            }
        },
        init: function(){
            var _this = this;
            window.onscroll = (window.onscroll || function(){}).before(function(){
                _this.setFixed();
            });
            _this.setFixed();
        }
    }
})();/*  |xGv00|819f59f91c6290a80846ca2b6d1b2d24 */