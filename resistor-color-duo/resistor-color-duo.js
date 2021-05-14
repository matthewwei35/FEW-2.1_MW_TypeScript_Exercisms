"use strict";
exports.__esModule = true;
exports.ResistorColor = void 0;
var ResistorColor = /** @class */ (function () {
    function ResistorColor(colors) {
        this.colors = colors;
        if (this.colors.length < 2) {
            throw new Error('At least two colors need to be present');
        }
    }
    ResistorColor.prototype.value = function () {
        var resistorValue = '';
        var bandColors = {
            black: '0',
            brown: '1',
            red: '2',
            orange: '3',
            yellow: '4',
            green: '5',
            blue: '6',
            violet: '7',
            grey: '8',
            white: '9'
        };
        for (var i = 0; i < this.colors.length; i += 1) {
            resistorValue += bandColors[this.colors[i]];
        }
        if (resistorValue.length > 2) {
            resistorValue = resistorValue.slice(0, 2);
        }
        return parseInt(resistorValue);
    };
    return ResistorColor;
}());
exports.ResistorColor = ResistorColor;
