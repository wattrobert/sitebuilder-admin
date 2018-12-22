import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class SiteListItem extends React.Component {
  public render() {
    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              My First Site
            </Typography>
            <Typography component="p">
              We’ll begin very easily here, because I’m assuming you are just
              starting out. No one likes to look back on my first site, but
              hopefully your experience can be made slightly less traumatic with
              a push in the right direction.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary">
            Edit Site
          </Button>
          <Button size="small" color="secondary">
            Clone
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default SiteListItem;
