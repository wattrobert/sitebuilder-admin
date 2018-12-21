import React from "react";
import Typography from "@material-ui/core/Typography";

class SiteManager extends React.Component {
  state = {
    response: "",
    post: "",
    responseToPost: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  public render() {
    return (
      <React.Fragment>
        <Typography variant="headline">Site Manager</Typography>
        {this.state.response ? (
          <pre>
            <code>{JSON.stringify(this.state.response)}</code>
          </pre>
        ) : (
          <pre>Response Loading</pre>
        )}
      </React.Fragment>
    );
  }
}

export default SiteManager;
