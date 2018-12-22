import React from "react";

import Card from "@material-ui/core/Card";
import EditIcon from "@material-ui/icons/EditOutlined";
import CloneIcon from "@material-ui/icons/FileCopyOutlined";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import {
  createStyles,
  Theme,
  withStyles,
  createMuiTheme,
  MuiThemeProvider,
  CardHeader,
  Avatar,
  IconButton,
  ButtonBase,
  CardMedia,
  CardActions,
  Button,
  CardActionArea
} from "@material-ui/core";

const EditSiteLink = props => <Link to="/site-editor" {...props} />;

interface SiteListItemProps {
  name: string;
  id: string;
  description: string;
  classes: any;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up("sm")]: {
        flex: "0 1 50%",
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit
      },
      [theme.breakpoints.up("md")]: {
        flexBasis: "33%"
      },
      [theme.breakpoints.up("lg")]: {
        flexBasis: "25%"
      },
      [theme.breakpoints.up("xl")]: {
        flexBasis: "20%"
      }
    },
    media: {
      height: 140
    }
  });

class SiteListItem extends React.Component<SiteListItemProps> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card>
          <CardActionArea>
            <CardHeader
              title={this.props.name}
              subheader={this.props.description}
            />
            <CardMedia
              className={classes.media}
              image="/site-placeholder.jpg"
              title={this.props.name}
            />
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="Edit site" component={EditSiteLink}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Clone site">
              <CloneIcon fontSize="small" />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(SiteListItem);
