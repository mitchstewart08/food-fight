import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

class LoginDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: null,
      password: null
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
    this.enterUsername = this.enterUsername.bind(this);
    this.enterPassword = this.enterPassword.bind(this);
  }


  //
  // ─── METHODS ────────────────────────────────────────────────────────────────────
  //
  handleClickOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  enterUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  enterPassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin() {
    // this.setState({
    //   open: false
    // });
    this.props.login(this.state.username, this.state.password);
  }

  googleLogin() {
    this.setState({
      open: false
    });
    this.props.googleLogin();
  }


  //
  // ─── RENDER ─────────────────────────────────────────────────────────────────────
  //
  render() {
    console.log('ERROR', this.props.error);
    const loginError = this.props.error ? (
      <DialogContentText id="login-error">
        That user does not exist.
      </DialogContentText>
    ) : null;

    // Toggle show modal
    const isActive = this.state.open ? (
      { className: 'modal is-active' }
    ) : { className: 'modal' };

    return (
      <div>
        <a className="button is-primary" onClick={this.handleClickOpen}>
          <span className="icon">
            <i className="fas fa-user"></i>
          </span>
          <span>Login</span>
        </a>
        <div {...isActive} >
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">
                Login
              </p>
              <button
                className="delete"
                aria-label="close"
                onClick={this.handleClose}
              ></button>
            </header>
            <section className="modal-card-body">
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="email" placeholder="Email" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input className="input" type="password" placeholder="Password" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success">
                Login
              </button>
              <button className="button">
                Cancel
              </button>
            </footer>
          </div>
        </div>
      </div>

      // MATERIAL UI JSX
      // <div>
      //   <Button onClick={this.handleClickOpen}>Login</Button>
      //   <Dialog
      //     open={this.state.open}
      //     onClose={this.handleClose}
      //     aria-labelledby="form-dialog-title"
      //   >
      //     <DialogTitle id="form-dialog-title">
      //       Login
      //         <Button
      //         variant="raised"
      //         style={{ float: 'right' }}
      //         href='/auth/google'>
      //         Login with Google</Button>
      //     </DialogTitle>
      //     <DialogContent>
      //       {loginError}
      //       <TextField
      //         id="full-width"
      //         label="Username"
      //         // InputLabelProps={{
      //         //   shrink: true,
      //         // }}
      //         fullWidth
      //         margin="normal"
      //         autoFocus={true}
      //         onChange={this.enterUsername}
      //       />
      //       <TextField
      //         id="full-width"
      //         label="Password"
      //         // InputLabelProps={{
      //         //   shrink: true,
      //         // }}
      //         fullWidth
      //         margin="normal"
      //         type="password"
      //         onChange={this.enterPassword}
      //       />
      //     </DialogContent>
      //     <DialogActions>
      //       <Button onClick={this.handleClose}>
      //         Cancel
      //       </Button>
      //       <Button onClick={this.handleLogin}>
      //         Login
      //       </Button>
      //     </DialogActions>
      //   </Dialog>
      // </div>
    );
  }
}

export default LoginDialog;