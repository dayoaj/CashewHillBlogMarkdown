import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";
import {
  Brightness4Rounded as DarkModeIcon,
  BrightnessHighRounded as LightModeIcon,
} from "@material-ui/icons";
import {
  AppBar,
  Button,
  Fade,
  IconButton,
  Paper,
  Slide,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from "@material-ui/core";
import Link from "./link";

const useStyles = makeStyles(theme => ({
  growingDiv: {
    flexGrow: 1,
  },
  // headerBottom: {
  //   overflowX: "hidden",
  //   overflowY: "scroll",
  //   padding: 0,
  // },
  // activeHeaderBottom: {
  //   padding: 0,
  //   bottom: "auto",
  //   overflow: "visible",
  //   opacity: 1,
  // },
  logo: {
    position: "absolute",
    top: 7,
    transition: theme.transitions.create("top"),
    transitionTimingFunction: theme.transitions.easing.easeIn,
    [theme.breakpoints.up("sm")]: {
      top: 10,
    },
    "& svg": {
      width: 150,
      height: 50,
      [theme.breakpoints.up("sm")]: {
        width: 210.474,
        height: 70.159,
      },
    },
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderImage:
      "linear-gradient(90deg, rgb(247, 198, 38) 15%, rgb(246, 140, 47) 40%, rgb(229, 18, 125) 85%) 1",
    zIndex: "800",
  },
  title: {
    fill: theme.palette.text.primary,
  },
  actionButton: {
    backgroundColor: theme.palette.actionBtn.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.actionBtn.hover,
    },
  },
  // mobileNav: {
  //   position: "absolute",
  //   display: "block",
  //   width: "100%",
  //   zIndex: "800",
  //   // top: "105%",
  //   top: `calc(${theme.mixins.toolbar.minHeight}px + 3px)`,
  //   left: 0,
  //   right: "auto",
  //   opacity: 0,
  //   height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
  //   // transition: `${theme.transitions.duration.shortest}ms`,
  //   visibility: "hidden",
  // },
  mobileNav: {
    position: "absolute",
    display: "block",
    width: "100%",
    zIndex: "800",
    top: `calc(${theme.mixins.toolbar.minHeight}px + 3px)`,
    left: 0,
    right: "auto",
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    // transition: `${theme.transitions.duration.shortest}ms`,
  },
  // activeMobileNav: {
  //   opacity: 1,
  //   // top: `calc(${theme.mixins.toolbar.minHeight}px + 2px)`,
  //   // bottom: 0,
  //   visibility: "visible",
  // },
  mobileOnly: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  desktopOnly: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  navList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
    },
  },
  navLink: {
    listStyleType: "none",
    margin: 0,
    padding: theme.spacing(3, 2),
    borderBottom: "1px solid",
    borderBottomColor: theme.palette.divider,
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
      margin: theme.spacing(0, 1),
      padding: theme.spacing(0.5),
      height: "auto",
      borderBottom: "none",
    },
  },
  activeNavLink: {
    color: theme.palette.primary.main,
  },
  menuActive: {
    color: pink[700],
  },
}));

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const Header = ({ toggleDarkMode }) => {
  const [darkModeOn, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    if (isDesktop) {
      setOpen(false);
    }

    open && (document.body.style.overflow = "hidden");
    !open && (document.body.style.overflow = "unset");
  }, [isDesktop, open]);

  const handleThemeToggle = () => {
    darkModeOn ? setDarkMode(false) : setDarkMode(true);
    return toggleDarkMode();
  };

  const handleDrawerToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const navigation = (
    <nav>
      <ul className={classes.navList}>
        <li className={classes.navLink}>
          <Link
            to="/404"
            activeClassName={classes.activeNavLink}
            variant="button"
          >
            About
          </Link>
        </li>
        <li className={classes.navLink}>
          <Button
            component={Link}
            to="/404"
            variant="contained"
            className={classes.actionButton}
            disableElevation
          >
            Subscribe
          </Button>
        </li>
      </ul>
    </nav>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar className={classes.appBar} elevation={0}>
          <Toolbar>
            <Link to="/" className={classes.logo} aria-label="Go to Home Page">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="50"
                focusable="false"
                viewBox="0 0 55.688 18.563"
                aria-hidden="true"
              >
                <defs>
                  <filter id="b" x="0" y="0" width="1" height="1">
                    <feGaussianBlur />
                  </filter>
                  <filter id="a" x="0" y="0" width="1" height="1">
                    <feGaussianBlur stdDeviation=".001" />
                  </filter>
                </defs>
                <path
                  d="M-10489-1246.9h136.64v136.64H-10489v-136.64z"
                  fill="none"
                  opacity=".992"
                />
                <g
                  transform="matrix(.94422 0 0 .94422 9801.184 1152.537)"
                  filter="url(#a)"
                  className={classes.title}
                  aria-label="Cashew Hill"
                >
                  <path d="M-10360-1208.8q0 .063-.08.166-.727.865-1.932.865-1.233 0-2-.841-.747-.814-.747-2.055 0-1.202.731-2.04.763-.877 1.94-.877 1.281 0 2.008.787.08.087.08.154 0 .075-.277.557-.272.482-.343.542-.03.032-.08.032-.02 0-.198-.159-.213-.19-.419-.296-.312-.158-.648-.158-.581 0-.929.435-.32.403-.32.996 0 .6.32 1.007.348.443.929.443.344 0 .652-.15.202-.1.411-.277.174-.15.194-.15.04 0 .08.043.06.07.343.494.289.438.289.482zM-10355.57-1209.956q0 .304.04.905.04.6.04.901 0 .158-.139.17-.49.036-1.122.036-.08 0-.103-.225-.02-.23-.06-.233-.03.016-.08.067-.443.446-.948.446-.771 0-1.277-.608-.478-.57-.478-1.36 0-.913.494-1.47.514-.577 1.407-.577.62 0 .98.435.02.02.03.02.04 0 .08-.19.05-.193.11-.193.146 0 .557.083.392.079.562.134.06.024.06.063 0 .016-.01.083-.127.715-.127 1.514zm-1.272.024q0-.336-.213-.553-.21-.222-.55-.222-.339 0-.549.218-.209.217-.209.557 0 .32.221.55.221.229.537.229.336 0 .55-.218.213-.221.213-.56zM-10352.641-1211.232q0 .04-.06.107-.11-.028-.221-.028-.233 0-.391.103-.19.118-.19.336 0 .138.202.351.304.32.375.431.202.3.202.644 0 .202-.08.427-.09.249-.23.364-.292.252-.683.426-.423.182-.779.182-.08 0-.355-.427-.273-.43-.273-.525 0-.036.04-.043l.558-.103q.347-.11.347-.364 0-.173-.201-.403-.36-.399-.376-.422-.201-.285-.201-.601 0-.593.601-1.008.537-.367 1.149-.367.06 0 .313.427.249.422.249.493zM-10348-1210.786v2.727q0 .138-.111.154-.127.016-.577.016-.435 0-.605-.032-.13-.024-.13-.17 0-.34.01-1.023.01-.684.01-1.024 0-.462-.471-.462-.158 0-.371.126-.233.139-.233.289v2.118q0 .146-.123.162-.122.016-.687.016-.325 0-.467-.032-.142-.032-.142-.138v-.937-.94q0-1.293-.03-2.138l-.02-.593q-.02-.344-.07-.589-.01-.05-.01-.075 0-.059.06-.079.122-.036.359-.043.316-.012.368-.02l.715-.083q.06 0 .06.083 0 .127-.01.344-.02.253-.02.344-.02.893-.02 1.41 0 .08.04.08l.201-.139q.229-.162.439-.257.312-.138.604-.138.506 0 .846.265.367.284.367.778zM-10343.641-1210.15q0 .4-.256.455-.04.01-.818.087-.467.05-1.391.122.06.257.335.392.23.11.522.11.352 0 .707-.19.151-.094.301-.19.08.04.276.404.198.364.198.462 0 .028-.06.091-.482.518-1.498.518-.941 0-1.517-.55-.593-.556-.593-1.489 0-.909.529-1.49.546-.6 1.447-.6.758 0 1.288.553.529.553.529 1.316zm-1.383-.24q0-.246-.174-.431-.173-.186-.415-.186-.248 0-.41.21-.151.193-.151.454 0 .106.111.106.292 0 .909-.09.13-.02.13-.064zM-10337.356-1210.679q0 .617-.1.858-.103.253-.514.94-.419.707-.577.877-.107.115-.521.115-.344 0-.435-.024-.07-.02-.138-.079-.226-.221-.696-1.087-.498.89-.68 1.087-.09.103-.517.103-.301 0-.388-.024-.197-.055-.667-.858-.384-.656-.55-1.05-.102-.254-.102-.858 0-.731.04-.893.03-.103.138-.103.182 0 .546.012.363.012.545.012.09 0 .09.13v.7q0 .478.02.707 0 .087.209.447.206.355.253.355.07 0 .261-.352.154-.296.202-.438.05-.146.05-.715 0-.119-.02-.352-.02-.237-.02-.352 0-.122.09-.122h.714q.15 0 .438.01.09.012.09.122 0 .15-.02.459-.02.304-.02.454 0 .403.03.51.04.134.19.43.178.356.249.356.07 0 .265-.36.186-.343.197-.45.02-.15.02-1.399 0-.138.08-.138.182 0 .546-.012.367-.012.549-.012.107 0 .134.11.04.167.04.894zM-10329-1208.036q0 .083-.03.103-.02.012-.111.02-.241.024-.68.024-.62 0-.731-.024-.107-.024-.107-.107 0-.312.03-.936.03-.629.03-.94 0-.155-.09-.179-.135-.031-.957-.031-.825 0-.964.032-.09.02-.09.177 0 .309.02.925.02.613.02.92 0 .12-.107.14-.126.023-.743.023-.533 0-.679-.024-.115-.02-.115-.122 0-.427.04-1.289.04-.861.04-1.292 0-.458-.04-1.375-.04-.92-.04-1.38 0-.086.08-.086.122 0 .367.012.249.012.372.012.126 0 .379-.012.257-.012.383-.012.07 0 .07.07 0 .297-.04.89-.04.589-.04.885 0 .138.07.162.103.032 1.011.032.846 0 .98-.032.1-.024.1-.162 0-.284-.03-.857-.03-.577-.03-.866 0-.122.1-.122.114 0 .348.012.237.012.355.012.115 0 .348-.012.237-.012.356-.012.114 0 .114.095 0 .454-.04 1.371t-.04 1.375q0 .43.04 1.292.04.862.04 1.289zM-10327-1212.663q0 .688-.774.688-.332 0-.55-.174-.237-.19-.237-.514 0-.308.245-.506.226-.181.542-.181.308 0 .533.185.241.198.241.502zm-.102 2.936q0 .289.01.862.01.569.01.853 0 .083-.1.1-.134.023-.604.023-.474 0-.609-.024-.09-.016-.106-.05v-.12q0-.272.01-.817.01-.55.01-.826 0-1.123-.09-1.787v-.083q0-.079.106-.079.111 0 .336.024.229.024.344.024.115 0 .344-.02.229-.02.344-.02.09 0 .09.08v.074q-.09.771-.09 1.787zM-10325-1210.3v1.656q0 .09.01.312.01.202.01.312 0 .083-.1.1-.177.031-.64.031-.474 0-.604-.032-.09-.02-.1-.107v-.17-1.05-1.052-1.513q-.01-.874-.1-1.506v-.067q0-.087.103-.087h1.41q.1 0 .09.083v.071q-.102 1.707-.102 3.02zM-10323-1210.3v1.656q0 .09.01.312.01.202.01.312 0 .083-.1.1-.178.031-.64.031-.474 0-.605-.032-.09-.02-.1-.107v-.17-1.05-1.052-1.513q-.01-.874-.1-1.506v-.067q0-.087.103-.087h1.411q.1 0 .09.083v.071q-.103 1.707-.103 3.02z" />
                </g>
                <path
                  d="M1.553.634h52.582V18.16H1.553z"
                  fill="none"
                  opacity=".992"
                />
                <g
                  transform="matrix(.00312 0 0 .00254 36.658 11.336)"
                  fill="#d400aa"
                  filter="url(#b)"
                  color="#000"
                >
                  <path
                    transform="matrix(2.16208 0 0 2.60667 11090.004 -1034.728)"
                    d="M-9720.3-1197.1c-10.114.04-20.297.32-30.535.843l-84.63 4.32c-262.1 13.38-458.68 181.56-440.74 377.08l51.468 561.01-2.23 24.292c-146.52 171.85-266.82 382.08-266.82 609.11 0 580.66 412.74 297.58 809.42 297.58 396.68 0 764.36 283.08 764.36-297.58 0-227.03-120.3-437.26-266.82-609.11l-2.228-24.294 51.465-561.01c17.937-195.52-178.63-363.7-440.74-377.08l-84.626-4.32a648.87 648.87 0 00-43.941-.752 644.46 644.46 0 00-13.407-.09z"
                    // font-weight="400"
                    // font-family="sans-serif"
                    overflow="visible"
                    fill="#ffd42a"
                    filter="url(#b)"
                    // enable-background="accumulate"
                  />
                  <path d="M-9463.2 1022.3c71.587 104.63 176.04 196.9 177.63 333.33 2.79 240.02-48.998 506.25-147.42 723.09-66.135 145.71-162.24 289.49-295.15 378.61-162.37 108.87-377.78 214.86-564.81 157.95-142.84-43.465-283.52-191.35-291.06-340.46-5.766-114.08 150.8-176.38 195.28-281.6 24.767-58.596 33.521-123.75 36.699-187.28 8.592-171.78-95.239-316.85-76.804-487.85 13.336-123.7 61.31-286.7 141.88-381.51 43.951-51.72 116.07-74.261 181.5-92.289 74.515-20.529 154.11-18.542 231.35-15.585 86.768 3.322 178.46-4.362 257.81 37.332 61.296 32.211 110.55 94.082 153.09 156.27z" />
                  <path
                    d="M-9961.6 826.78c-48.732.5-97.301 4.536-143.89 17.371-65.438 18.028-137.58 40.57-181.57 92.33-80.601 94.849-99.968 232.02-113.3 355.72-18.44 171.05 56.789 341.99 48.199 513.72-3.177 63.528-11.929 128.66-36.687 187.24-22.219 52.564-72.465 94.437-116.45 137.43-43.987 42.993-81.724 87.124-78.838 144.23 7.541 149.19 148.26 297.1 291.15 340.58 187.1 56.932 402.54-49.085 564.92-157.96 132.94-89.137 229.05-232.93 295.2-378.66 98.424-216.86 163.03-463.93 134.91-701.61-15.892-134.31-93.549-250.31-165.14-354.94-42.552-62.192-91.809-124.08-153.14-156.31-79.386-41.717-171.11-34.026-257.86-37.348-28.963-1.109-58.261-2.081-87.5-1.781zm0 .266c29.231-.3 58.526.672 87.488 1.78 86.78 3.324 178.45-4.354 257.75 37.317 61.26 32.192 110.5 94.045 153.05 156.23 71.587 104.63 149.21 220.59 165.09 354.82 28.114 237.61-36.478 484.64-134.89 701.47-66.128 145.7-162.23 289.46-295.1 378.55-162.36 108.86-377.74 214.82-564.69 157.93-142.78-43.447-283.43-191.3-290.97-340.34-2.88-56.98 34.784-101.04 78.759-144.02 43.976-42.982 94.253-84.866 116.51-137.52 24.776-58.618 33.533-123.79 36.711-187.33 8.594-171.82-66.633-342.75-48.203-513.7 13.336-123.7 32.711-260.81 113.24-355.58 43.917-51.681 116.01-74.22 181.44-92.246 46.556-12.826 95.101-16.861 143.82-17.361z"
                    fill="#000"
                  />
                  <path
                    d="M-9866.8 742.53c-153.77 0-301.18 62.79-409.54 174.02-108.35 111.23-161.84 257.43-161.84 414.22 0 156.79 93.004 264.17 194.01 405.6 83.2 116.5 223.6 191.27 377.36 191.27 153.77 0 301.18-62.792 409.54-174.02 108.35-111.23 168.99-261.74 168.99-418.54 0-156.79-60.632-307.3-168.99-418.54-108.35-111.23-255.77-174.02-409.54-174.02zm0 100c126.58 0 248.03 51.533 337.91 143.8 89.881 92.267 154.92 269.49 154.92 400.48 0 131-65.038 204.77-154.92 297.03-89.881 92.267-211.33 143.8-337.91 143.8-126.58 0-248.03-51.533-337.91-143.8-89.881-92.267-162.07-204.83-162.07-335.83 0-131 72.188-269.42 162.07-361.69 89.881-92.267 211.33-143.8 337.91-143.8zM-10293 2044.3c-163.4 0-299.84 126.73-299.84 285.49s136.44 285.49 299.84 285.49c163.4 0 299.84-126.73 299.84-285.49s-136.44-285.49-299.84-285.49zm0 102.26c111.32 0 197.58 83.122 197.58 183.23 0 100.108-86.259 183.23-197.58 183.23-111.32 0-197.58-83.123-197.58-183.23 0-100.107 86.26-183.23 197.58-183.23z"
                    opacity=".992"
                    // style="font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal"
                  />
                </g>
              </svg>
            </Link>
            <div className={classes.growingDiv}>
              {/* <Paper
                className={clsx(classes.mobileNav, classes.mobileOnly, {
                  [classes.activeMobileNav]: open,
                })}
              >
                {navigation}
              </Paper> */}
            </div>

            <div className={classes.desktopOnly}>{navigation}</div>

            <IconButton
              aria-label="toggle light/dark theme"
              onClick={handleThemeToggle}
              color="secondary"
            >
              {darkModeOn ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton
              aria-label="Open/Close Page Navigation Menu"
              onClick={handleDrawerToggle}
              color="secondary"
              className={clsx(classes.mobileOnly, {
                [classes.menuActive]: open,
              })}
            >
              <svg
                className="MuiSvgIcon-root"
                aria-hidden="true"
                focusable="false"
                version="1.1"
                viewBox="0 0 24 24"
              >
                <path
                  d="m2.1417 10.542 7.755 7.755c1.1677 1.1677 3.0541 1.1677 4.2219 0l7.755-7.755c1.8864-1.8864 0.53896-5.1201-2.1259-5.1201h-15.51c-2.6649 0-3.9823 3.2338-2.096 5.1201z"
                  strokeWidth="2.9942"
                />
              </svg>
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* <div
        className={clsx(classes.headerBottom, {
          [classes.activeHeaderBottom]: open,
        })}
      > */}
      {/* <Paper
        className={clsx(classes.mobileNav, classes.mobileOnly, {
          [classes.activeMobileNav]: open,
        })}
      >
        {navigation}
      </Paper> */}
      <Fade appear={false} direction="down" in={open}>
        <Paper className={clsx(classes.mobileOnly, classes.mobileNav)}>
          {navigation}
        </Paper>
      </Fade>
      {/* </div> */}
    </>
  );
};

Header.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};

// Header.defaultProps = {
//   siteTitle: ``,
// };

export default Header;
