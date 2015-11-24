var Animal = (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.greet = function () {
        var msg = "Hello, I'm a " + this.name;
        console.log(msg);
    };
    return Animal;
})();
exports.default = Animal;
//# sourceMappingURL=Animal.js.map