"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    // likesCount:number;
    // active:boolean;
    function LikeComponent(likesCount, active) {
        this.likesCount = likesCount;
        this.active = active;
    }
    LikeComponent.prototype.onClick = function (active) {
        if (active) {
            return --this.likesCount;
        }
        else
            return ++this.likesCount;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
