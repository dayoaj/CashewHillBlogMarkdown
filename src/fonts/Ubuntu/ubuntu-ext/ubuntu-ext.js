import Ubuntu300Woff2 from "./ubuntu-v14-latin-ext-300.woff2";
import Ubuntu300Woff from "./ubuntu-v14-latin-ext-300.woff";
import Ubuntu400Woff2 from "./ubuntu-v14-latin-ext-regular.woff2";
import Ubuntu400Woff from "./ubuntu-v14-latin-ext-regular.woff";
import Ubuntu500Woff2 from "./ubuntu-v14-latin-ext-500.woff2";
import Ubuntu500Woff from "./ubuntu-v14-latin-ext-500.woff";
import Ubuntu700Woff2 from "./ubuntu-v14-latin-ext-700.woff2";
import Ubuntu700Woff from "./ubuntu-v14-latin-ext-700.woff";

/* latin ext */
const ubuntu300ext = {
  fontFamily: "Ubuntu",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
    local('Ubuntu Light'),
    local('Ubuntu-Light'),
    url(${Ubuntu300Woff2}) format('woff2'),
    url(${Ubuntu300Woff}) format('woff')
  `,
  unicodeRange:
    "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
};

/* latin ext */
const ubuntu400ext = {
  fontFamily: "Ubuntu",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Ubuntu Regular'),
    local('Ubuntu-Regular'),
    url(${Ubuntu400Woff2}) format('woff2'),
    url(${Ubuntu400Woff}) format('woff')
  `,
  unicodeRange:
    "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
};

/* latin ext */
const ubuntu500ext = {
  fontFamily: "Ubuntu",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
    local('Ubuntu Medium'),
    local('Ubuntu-Medium'),
    url(${Ubuntu500Woff2}) format('woff2'),
    url(${Ubuntu500Woff}) format('woff')
  `,
  unicodeRange:
    "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
};

/* latin ext */
const ubuntu700ext = {
  fontFamily: "Ubuntu",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
    local('Ubuntu Bold'),
    local('Ubuntu-Bold'),
    url(${Ubuntu700Woff2}) format('woff2'),
    url(${Ubuntu700Woff}) format('woff')
  `,
  unicodeRange:
    "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
};

export { ubuntu300ext, ubuntu400ext, ubuntu500ext, ubuntu700ext };
