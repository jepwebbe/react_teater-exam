import { ThemeProvider } from "styled-components";
import Router from "./Components/App/Router/Router";
import { Footer } from "./Components/Partials/Footer";
import { Header } from "./Components/Partials/Header/Header";
import { GlobalStyles } from "./Styles/Global";

import { Theme } from "./Styles/Theme";
/* The app component that taks the themeprovider to pass the theme, the globalstyles,
the site-wide components and the pages in the router */
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
        <Router />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
