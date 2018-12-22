import React from "react";
import SiteListItem from "./SiteListItem";
import { createStyles, Theme, withStyles, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

interface SiteListProps {
  classes: any;
}

const styles = (theme: Theme) =>
  createStyles({
    fab: {
      position: "absolute",
      top: 0,
      right: 0
    },
    root: {
      position: "relative"
    },
    list: {
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        flexFlow: "row wrap",
        marginLeft: -theme.spacing.unit,
        marginRight: -theme.spacing.unit
      }
    }
  });

class SiteList extends React.Component<SiteListProps> {
  state = {
    sites: []
  };

  // Fetch passwords after first mount
  componentDidMount() {
    this.getSites();
  }

  getSites = () => {
    // Get the passwords and store them in state
    fetch("/api/sites")
      .then(res => res.json())
      .then(sites => this.setState({ sites }));
  };

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Fab className={classes.fab} color="primary">
          <AddIcon />
        </Fab>
        <div className={classes.list}>
          {this.state.sites.map((site: any) => (
            <SiteListItem {...site} key={site.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SiteList);
