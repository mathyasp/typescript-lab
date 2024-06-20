// Giant Robot class
var GiantRobot = /** @class */ (function () {
    function GiantRobot(name, power, type) {
        this.name = name;
        this.power = power;
        this.type = type;
    }
    GiantRobot.prototype.describe = function () {
        console.log("name:".concat(this.name, " type:").concat(this.type, " power:").concat(this.power));
    };
    return GiantRobot;
}());
