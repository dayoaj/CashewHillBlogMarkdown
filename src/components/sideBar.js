import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  aboutCard: {
    maxHeight: "9rem",
    backgroundColor: theme.palette.background.descriptionCard,
  },
}));

const SideBar = () => {
  const classes = useStyles();

  return (
    <div role="region" aria-label="side bar">
      <Card className={classes.aboutCard}>
        <CardContent>
          <Typography variant="body2">
            <strong>Cashew Hill</strong> is created for the young-at-heart,
            passionate about leveraging technology for societal good.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SideBar;
