var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.greet = function () {
        var msg = "Hello, I'm a " + this.name;
        console.log(msg);
    };
    return Animal;
})();
exports["default"] = Animal;
