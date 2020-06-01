import Ubuntu300Woff2 from "./ubuntu-v14-latin-300.woff2";
import Ubuntu300Woff from "./ubuntu-v14-latin-300.woff";
import Ubuntu400Woff2 from "./ubuntu-v14-latin-regular.woff2";
import Ubuntu400Woff from "./ubuntu-v14-latin-regular.woff";
import Ubuntu500Woff2 from "./ubuntu-v14-latin-500.woff2";
import Ubuntu500Woff from "./ubuntu-v14-latin-500.woff";
import Ubuntu700Woff2 from "./ubuntu-v14-latin-700.woff2";
import Ubuntu700Woff from "./ubuntu-v14-latin-700.woff";

/* latin */
const ubuntu300 = {
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
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
};

/* latin */
const ubuntu400 = {
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
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
};

/* latin */
const ubuntu500 = {
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
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
};

/* latin */
const ubuntu700 = {
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
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
};

export { ubuntu300, ubuntu400, ubuntu500, ubuntu700 };
