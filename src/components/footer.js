import React, { useState } from "react";
import clsx from "clsx";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";
import Link from "./link";

const useStyles = makeStyles(theme => ({
  footerContainerStyle: {
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2, 1),
    color: "rgba(255,255,255,0.8)",
  },
  footerLinksContainer: {
    display: "flex",
    maxWidth: "15rem",
    flexWrap: "wrap",
    margin: theme.spacing(0, 0, 2),
  },
  footerLink: {
    width: "50%",
  },
  footerNavHeading: {
    color: "white",
    width: "100%",
  },
  footerRow: {
    padding: theme.spacing(1, 0),
  },
  footerRowSubscribe: {
    borderBottom: `2px solid ${pink[800]}`,
  },
  footerRowNav: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
  },
  footerSubscribeForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
  },
  oneThree: {
    [theme.breakpoints.up("sm")]: {
      width: "33.3%",
      justifyContent: "flex-start",
    },
  },
  twoThree: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      width: "66.6%",
      marginTop: theme.spacing(0),
    },
  },
  subscribeInput: {
    margin: theme.spacing(0, 1, 1, 0),
  },
  subscribeBtn: {
    marginBottom: theme.spacing(1),
  },
}));

const FooterLink = ({ children, to }) => {
  const classes = useStyles();

  return (
    <Link
      color="inherit"
      className={classes.footerLink}
      variant="subtitle1"
      to={to}
    >
      {children}
    </Link>
  );
};

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query FooterQuery {
      avatar: file(absolutePath: { regex: "/cashew-hill-white.png/" }) {
        childImageSharp {
          fixed(width: 200, height: 51) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  return (
    <footer className={classes.footerContainerStyle}>
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={clsx(classes.footerRowSubscribe, classes.footerRow)}
        >
          <Grid item container className={classes.oneThree} justify="center">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt="Cashew-Hill Logo"
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            className={classes.twoThree}
          >
            <Typography gutterBottom>Get notified of new Posts.</Typography>
            <form className={classes.footerSubscribeForm} noValidate>
              <TextField
                id="new-subscriber-email"
                label="Email Address*"
                value={email}
                onChange={handleEmailChange}
                variant="outlined"
                color="secondary"
                size="small"
                className={classes.subscribeInput}
              />
              <TextField
                id="new-subscriber-fname"
                label="First Name"
                value={name}
                onChange={handleNameChange}
                variant="outlined"
                color="secondary"
                size="small"
                className={classes.subscribeInput}
              />
              <Button
                variant="outlined"
                color="secondary"
                className={classes.subscribeBtn}
              >
                Subscribe
              </Button>
            </form>
            <Typography component="em" variant="body2">
              Note: We will never share your email or spam you.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          className={clsx(classes.footerRowNav, classes.footerRow)}
        >
          <nav className={classes.footerLinksContainer}>
            <Typography
              variant="h4"
              component="h2"
              className={classes.footerNavHeading}
            >
              Other Nav
            </Typography>
            <FooterLink to="/404">About</FooterLink>
            <FooterLink to="/404">Contact</FooterLink>
            <FooterLink to="/404">Guest Writing</FooterLink>
            <FooterLink to="/404">Subscribe</FooterLink>
            <FooterLink to="/404">Sitemap</FooterLink>
          </nav>
        </Grid>
        <Typography>
          Copyright © {new Date().getFullYear()} CashewHill Media.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
