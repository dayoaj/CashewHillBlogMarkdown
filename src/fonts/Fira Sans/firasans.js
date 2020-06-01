import FiraSans300Woff2 from "./fira-sans-v10-latin-300.woff2";
import FiraSans300Woff from "./fira-sans-v10-latin-300.woff";
import FiraSans400Woff2 from "./fira-sans-v10-latin-regular.woff2";
import FiraSans400Woff from "./fira-sans-v10-latin-regular.woff";
import FiraSans500Woff2 from "./fira-sans-v10-latin-500.woff2";
import FiraSans500Woff from "./fira-sans-v10-latin-500.woff";
import FiraSans700Woff2 from "./fira-sans-v10-latin-700.woff2";
import FiraSans700Woff from "./fira-sans-v10-latin-700.woff";

/* latin */
const firaSans300 = {
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
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
};

/* latin */
const firaSans400 = {
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
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
};

/* latin */
const firaSans500 = {
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
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
};

/* latin */
const firaSans700 = {
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
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
};

export { firaSans300, firaSans400, firaSans500, firaSans700 };
