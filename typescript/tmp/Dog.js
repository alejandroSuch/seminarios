var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal_1 = require('./Animal');
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.call(this, 'Dog', 1);
    }
    return Dog;
})(Animal_1.default);
exports.default = Dog;
//# sourceMappingURL=Dog.js.map