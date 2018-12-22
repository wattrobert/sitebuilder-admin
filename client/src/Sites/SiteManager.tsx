import React from "react";
import Typography from "@material-ui/core/Typography";
import SiteListItem from "./SiteListItem";
import { createStyles, Theme, withStyles } from "@material-ui/core";

interface SiteManagerProps {
  classes: any;
}

const styles = (theme: Theme) =>
  createStyles({
    siteList: {
      marginTop: theme.spacing.unit * 3,
      display: "flex",
      flexFlow: "row wrap"
    },
    siteListItem: {
      flex: "0 1 20%"
    }
  });

class SiteManager extends React.Component<SiteManagerProps> {
  public render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="headline">Site Manager</Typography>
        <div className={classes.siteList}>
          <div className={classes.siteListItem}>
            <SiteListItem />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SiteManager);
