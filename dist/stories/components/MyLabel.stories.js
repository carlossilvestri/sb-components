"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.Primary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/my-label/MyLabel");
exports.default = {
    title: 'UI/Etiquetas/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: { control: 'select' },
        // color: { control: 'select' },
        fontColor: { control: 'color' }
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args), void 0); };
// ***** Basic
exports.Basic = Template.bind({});
// Default values
exports.Basic.args = {
    size: 'normal',
    label: 'No Label',
    AllCaps: false
};
// ***** AllCaps
exports.AllCaps = Template.bind({});
// Default values
exports.AllCaps.args = {
    size: 'normal',
    AllCaps: true // Capitalizar toda la palabra
};
// ***** Primary
exports.Primary = Template.bind({});
// Default values
exports.Primary.args = {
    size: 'normal',
    color: 'primary'
};
// ***** Secondary
exports.Secondary = Template.bind({});
// Default values
exports.Secondary.args = {
    size: 'normal',
    color: 'secondary'
};
// ***** Tertiary
exports.Tertiary = Template.bind({});
// Default values
exports.Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
};
// ***** CustomFontColor
exports.CustomFontColor = Template.bind({});
// Default values
exports.CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
};
