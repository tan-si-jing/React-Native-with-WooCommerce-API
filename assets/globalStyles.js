import { StyleSheet, Dimensions } from "react-native";


const { width } = Dimensions.get("window");

export const aspectRatio = width / 375;

export const palette = {
  green: "#2CB9B0",
  white: "white",
  orange: "#FE5E33",
  yellow: "#FFC641",
  pink: "#FF87A2",
  violet: "#442CB9",
  lightest:"#E0FBFC",
  light:"#C2DFE3",
  medium:"#9DB4C0",
  dark:"#5C6B73",
  darkest:"#253237"
};

export const rainbow = [
  "#fec5bb",
  "#fcd5ce", 
  "#fae1dd", 
  "#f8edeb", 
  "#e8e8e4",
  "#d8e2dc", 
  "#ece4db", 
  "#ffdbc2", 
  "#fed4ae", 
  "#ffc7ad",
]

export const theme = {
  colors: {
    primary: palette.green,
    primaryLight: "#E7F9F7",
    secondary: "#0C0D34",
    danger: "#FF0058",
    info: "#808080",
    text: "dimgrey",
    background: palette.white,
    background2: "#F6F6F6",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  }
}

export const textStyles = StyleSheet.create({
    hero: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: "os-bold",
        color: theme.colors.background,
        textAlign: "center",
    },
    title1: {
        fontSize: 26,
        fontFamily: "os-bold",
        color: theme.colors.secondary,
    },
    title2: {
        fontSize: 22,
        lineHeight: 30,
        fontFamily: "os-bold",
        color: theme.colors.secondary,
    },
    title3: {
        fontSize: 15,
        fontFamily: "os-bold",
        color: theme.colors.secondary,
    },
    body: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "os-regular",
        color: theme.colors.text,
    },
    button: {
        fontSize: 15,
        fontFamily: "os-bold",
        color: theme.colors.text,
        textAlign: "center",
    },
    header: {
        fontSize: 12,
        lineHeight: 24,
        fontFamily: "os-bold",
        color: theme.colors.secondary,
    }
  
})