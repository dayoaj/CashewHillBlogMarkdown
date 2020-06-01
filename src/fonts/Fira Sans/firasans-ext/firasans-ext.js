import FiraSans300Woff2 from "./fira-sans-v10-latin-ext-300.woff2";
import FiraSans300Woff from "./fira-sans-v10-latin-ext-300.woff";
import FiraSans400Woff2 from "./fira-sans-v10-latin-ext-regular.woff2";
import FiraSans400Woff from "./fira-sans-v10-latin-ext-regular.woff";
import FiraSans500Woff2 from "./fira-sans-v10-latin-ext-500.woff2";
import FiraSans500Woff from "./fira-sans-v10-latin-ext-500.woff";
import FiraSans700Woff2 from "./fira-sans-v10-latin-ext-700.woff2";
import FiraSans700Woff from "./fira-sans-v10-latin-ext-700.woff";

/* latin ext */
const firaSans300ext = {
  fontFamily: "Fira Sans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
    local('Fira Sans Light'),
    local('FiraSans-Light'),
    url(${FiraSans300Woff2}) format('woff2'),
    url(${FiraSans300Woff}) format('woff')
  `,
  unicodeRange:
    "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
};

/* latin ext */
const firaSans400ext = {
  fontFamily: "Fira Sans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Fira Sans Regular'),
    local('FiraSans-Regular'),
    url(${FiraSans400Woff2}) format('woff2'),
    url(${FiraSans400Woff}) format('woff')
  `,
  unicodeRange:
    "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
};

/* latin ext */
const firaSans500ext = {
  fontFamily: "Fira Sans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
    local('Fira Sans Medium'),
    local('FiraSans-Medium'),
    url(${FiraSans500Woff2}) format('woff2'),
    url(${FiraSans500Woff}) format('woff')
  `,
  unicodeRange:
    "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
};

/* latin ext */
const firaSans700ext = {
  fontFamily: "Fira Sans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
    local('Fira Sans Bold'),
    local('FiraSans-Bold'),
    url(${FiraSans700Woff2}) format('woff2'),
    url(${FiraSans700Woff}) format('woff')
  `,
  unicodeRange:
    "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
};

export { firaSans300ext, firaSans400ext, firaSans500ext, firaSans700ext };
