// The theme object holding values that can be accessed globally by styled-components
export const Theme = {
  colors: {
    primaryBg: "beige",
  },
  breakpoints: {
    xs: "320px",
    s: "480px",
    m: "768px",
    l: "992px",
    xl: "1200px",
  },
  desktop: {
    rows: "auto auto 1fr auto auto",
    columns: "repeat(6, auto)",
    area: `
    "a a a a a a"
    "b b b b b b"
    "c c c c c c"
    "d d d d d d"
    "e e e e e e"
              `,
  },
  desktopTwo: {
    rows: "auto 1fr auto",
    columns: "4fr 1fr",
    area: `"a a" "b c" "d d"
              `,
  },
  desktopThree: {
    rows: "auto 1fr",
    columns: "4fr 1fr",
    area: `"a a" "b b"
              `,
  },
  tablet: {
    rows: "auto auto 1fr auto",
    columns: "repeat(2, auto)",
    area: `
      "a b"
      "c c"
      "d d"
      "e e"
              `,
  },
  tabletTwo: {
  rows: "auto auto 1fr auto",
  columns: "repeat(2, auto)",
  area: `
    "a a"
    "b b"
    "c c"
    "d d"
            `,
  },
  mobile: {
    rows: "auto auto 1fr auto auto",
    columns: "repeat(2, auto)",
    area: `
      "a a"
      "b b"
      "c c"
      "d d"
      "e e"
              `,
  },
  mobileTwo: {
    rows: "auto auto 1fr auto",
    columns: "repeat(2, auto)",
    area: `
      "a a"
      "b b"
      "c c"
      "d d"
              `,
    },
};
