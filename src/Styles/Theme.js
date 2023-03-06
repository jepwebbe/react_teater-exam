// The theme object holding values that can be accessed globally by styled-components
export const Theme = {
  colors: {
    primary: "#D39D5B",
    secondary: "#AD7A51",
    tertiary: "#30454C",
    theGrey: "#999999",
    theLightGrey: "#707070",
    theGreen: "#61E692",
  },
  breakpoints: {
    xs: "320px",
    s: "480px",
    im: "600px",
    m: "768px",
    l: "992px",
    xl: "1200px",
  },
  desktop: {
    rows: "auto auto 1fr",
    columns: "repeat(6, auto)",
    area: `
    "a a a a a a"
    "b b b b b b"
    "c c c c c c"
              `,
  },
  desktopTwo: {
    rows: "auto 1fr",
    columns: "4fr 1fr",
    area: `"a a" "b b" "c c"
              `,
  },
  desktopThree: {
    rows: "auto 1fr",
    columns: "4fr 1fr",
    area: `"a a" "b b"
              `,
  },
  tablet: {
    rows: "auto auto 1fr",
    columns: "repeat(2, auto)",
    area: `
      "a a"
      "b b"
      "c c"
              `,
  },
  tabletTwo: {
  rows: "auto 1fr ",
  columns: "repeat(2, auto)",
  area: `
    "a a"
    "b b"

            `,
  },
  mobile: {
    rows: "auto auto 1fr",
    columns: "repeat(2, auto)",
    area: `
      "a a"
      "b b"
      "c c"

              `,
  },
  mobileTwo: {
    rows: "auto 1fr",
    columns: "repeat(2, auto)",
    area: `
      "a a"
      "b b"
              `,
    },
};
