import React from "react";
import GoogleLogin from "react-google-login";
import GoogleOAuth from "../constants/google-oauth";

class Login extends React.Component {
  public onLoginSuccess = (responseGoogle: any) => {
    console.log(responseGoogle);
  };
  public onLoginFailure = (responseGoogle: any) => {
    console.error(responseGoogle);
  };
  public render() {
    return (
      <GoogleLogin
        clientId={GoogleOAuth.web.client_id}
        redirectUri={GoogleOAuth.web.redirect_uris[0]}
        render={(renderProps: any) => (
          <button onClick={renderProps.onClick}>
            This is my custom Google button
          </button>
        )}
        buttonText="Login"
        onSuccess={this.onLoginSuccess}
        onFailure={this.onLoginFailure}
      />
    );
  }
}

export default Login;
