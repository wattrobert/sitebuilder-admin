import React from "react";
import { createStyles, Theme, withStyles, Typography } from "@material-ui/core";

interface SiteEditorProps {
  classes: any;
}

const styles = (theme: Theme) => createStyles({});

class SiteEditor extends React.Component<SiteEditorProps> {
  public render() {
    const { classes } = this.props;
    return <Typography variant="h5">Site Editor</Typography>;
  }
}

export default withStyles(styles, { withTheme: true })(SiteEditor);
