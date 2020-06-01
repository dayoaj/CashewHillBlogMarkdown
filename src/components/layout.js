import React from "react";
import PropTypes from "prop-types";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Container, CssBaseline, Grid, Toolbar } from "@material-ui/core";
import useThemeInit from "./theme";
import Header from "./header";
import Footer from "./footer";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
  },
  mainContentWrap: {
    padding: theme.spacing(4, 2, 0),
  },
  growHeight: {
    flexGrow: 1,
  },
}));

const Layout = ({ children }) => {
  const [theme, toggleDarkMode, componentMounted] = useThemeInit();

  const themeConfig = createMuiTheme(theme);
  const classes = useStyles();

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <Grid container direction="column" className={classes.root}>
        <Header toggleDarkMode={toggleDarkMode} />
        <Toolbar />
        <Container className={classes.growHeight}>
          <main className={classes.mainContentWrap}>{children}</main>
        </Container>
        <Footer />
      </Grid>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
