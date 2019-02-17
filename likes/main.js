"use strict";
exports.__esModule = true;
var likes_1 = require("./likes");
function onClick() {
    var likes = new likes_1.Likes(7);
    console.log(likes.getnoOfLikes());
}
onClick();
