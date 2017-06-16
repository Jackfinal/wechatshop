import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "maxWidth": 720,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "position": "relative",
        "fontSize": 0.28,
        "backgroundColor": "#f4f4f4"
    },
    "*": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "div": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "ul": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "li": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "html": {
        "fontSize": 0.28,
        "backgroundColor": "#f4f4f4"
    },
    "app": {
        "fontFamily": "'Avenir', Helvetica, Arial, sans-serif",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "color": "#2c3e50"
    },
    "icon": {
        "width": 1,
        "height": 1,
        "verticalAlign": -0.15,
        "fill": "currentColor",
        "overflow": "hidden"
    },
    "a": {
        "color": "#929699",
        "textDecorationLine": "none"
    },
    "footer": {
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0.5,
        "paddingLeft": 0
    },
    "footer mint-cell": {
        "backgroundColor": "#f3f4f8",
        "background": "linear-gradient(#e1e8f0, #f3f4f8)"
    },
    "footer b a": {
        "display": "inline-block",
        "width": "50%",
        "textAlign": "center",
        "marginTop": 0.5
    },
    "footer b a span": {
        "color": "red"
    }
});