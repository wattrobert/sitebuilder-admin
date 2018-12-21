import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ServerIcon from "@material-ui/icons/DnsOutlined";
import ProductIcon from "@material-ui/icons/LocalOfferOutlined";
import SitesIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ComponentsIcon from "@material-ui/icons/ExtensionOutlined";
import TemplatesIcon from "@material-ui/icons/ViewCompactOutlined";
import AccountIcon from "@material-ui/icons/PersonOutlineRounded";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ServerManager from "./Servers/ServerManager";
import SiteManager from "./Sites/SiteManager";
import ProductManager from "./Products/ProductManager";
import TemplateManager from "./Templates/TemplateManager";
import ComponentManager from "./Components/ComponentManager";

const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      boxShadow: "none",
      borderBottom: "1px solid " + theme.palette.grey[300],
      marginLeft: drawerWidth,
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`
      }
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.grey[100],
      "&:hover": {
        backgroundColor: theme.palette.grey[200]
      },
      marginRight: theme.spacing.unit * 2,
      marginLeft: theme.spacing.unit * 2,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: 0,
        width: "auto"
      }
    },
    searchIcon: {
      width: theme.spacing.unit * 6,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 6,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: 200
      }
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: 20,
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3
    }
  });

interface AppProps {
  classes: any;
  theme: Theme;
}

interface AppState {
  mobileOpen: boolean;
}

class App extends React.Component<AppProps, AppState> {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <React.Fragment>
        <Toolbar>
          <Typography variant="headline" color="inherit" noWrap>
            SiteBuilder
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem button component={props => <Link {...props} to="/sites" />}>
            <ListItemIcon>
              <SitesIcon />
            </ListItemIcon>
            <ListItemText primary="Sites" />
          </ListItem>
          <ListItem
            button
            component={props => <Link {...props} to="/servers" />}
          >
            <ListItemIcon>
              <ServerIcon />
            </ListItemIcon>
            <ListItemText primary="Servers" />
          </ListItem>
          <ListItem
            button
            component={props => <Link {...props} to="/products" />}
          >
            <ListItemIcon>
              <ProductIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>

          <ListItem
            button
            component={props => <Link {...props} to="/templates" />}
          >
            <ListItemIcon>
              <TemplatesIcon />
            </ListItemIcon>
            <ListItemText primary="Templates" />
          </ListItem>
          <ListItem
            button
            component={props => <Link {...props} to="/components" />}
          >
            <ListItemIcon>
              <ComponentsIcon />
            </ListItemIcon>
            <ListItemText primary="Components" />
          </ListItem>
        </List>
      </React.Fragment>
    );

    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Hidden smUp implementation="css">
                <Typography variant="h6" color="inherit" noWrap>
                  SB
                </Typography>
              </Hidden>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>
              <div className={classes.grow} />
              <Button color="inherit">Support</Button>
              <IconButton color="inherit" aria-label="Notifications">
                <Badge badgeContent={4} color="primary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" aria-label="Account">
                <AccountIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="js">
              <Drawer
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="js">
              <Drawer
                classes={{
                  paper: classes.drawerPaper
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact path="/" component={SiteManager} />
              <Route path="/servers" component={ServerManager} />
              <Route path="/sites" component={SiteManager} />
              <Route path="/products" component={ProductManager} />
              <Route path="/templates" component={TemplateManager} />
              <Route path="/components" component={ComponentManager} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
