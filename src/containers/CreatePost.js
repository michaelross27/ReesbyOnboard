import React, { Component } from "react";
import { createPost } from "../actions/post.actions";
import { connect } from "react-redux";
import "./CreatePost.css";

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      jobTitle: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state);
  }


  handleReset(e) {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      jobTitle: "",
    });
  }

  render() {
    return (
      <div className="create-post">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Your Name"
              value={this.state.name}
              onChange={this.handleOnValueChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter Your Email"
              value={this.state.email}
              onChange={this.handleOnValueChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="Enter Your Address"
              value={this.state.address}
              onChange={this.handleOnValueChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              placeholder="Enter Your Phone Number"

              value={this.state.phoneNumber}
              onChange={this.handleOnValueChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="jobTitle"
              placeholder="Enter Your Job Title"
              value={this.state.jobTitle}
              onChange={this.handleOnValueChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={this.handleReset.bind(this)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

/* const ContactForm = (props) => {
  const { open, onClose, title } = props;
  const classes = useContactFormStyles();
  const onSubmit = (formValues) => props.onSubmit(formValues);
  return (
      <Dialog
          open={open}
          onClose={onClose}
          aria-labelledby="contact-form-title"
          aria-describedby="contact-form"
      >
          <DialogTitle id="contact-form-title">{title}</DialogTitle>
          <Divider />
          <form onSubmit={onSubmit} autoComplete="off">
              <DialogContent>
                  <Grid
                      container
                      spacing={3}
                      justifyContent="space-between"
                      alignItems="center"
                  >
                      <Grid item xs={12} container>
                          <Field
                              name="name"
                              type="text"
                              label="Full Name"
                              required
                              component={CustomTextField}
                              icon={<PersonOutlineIcon />}
                          />
                      </Grid>
                      <Grid item xs={12} container>
                          <Field
                              name="email"
                              type="email"
                              label="Email"
                              required
                              component={CustomTextField}
                              icon={<EmailIcon />}
                          />
                      </Grid>
                      <Grid item xs={12} container>
                          <Field
                              name="address"
                              type="text"
                              label="Home Address"
                              component={CustomTextField}
                              icon={<HomeIcon />}
                          />
                      </Grid>
                      <Grid item xs={6} container>
                          <Field
                              name="phoneNumber"
                              type="tel"
                              label="Phone Number"
                              component={CustomTextField}
                              icon={<CallIcon />}
                          />
                      </Grid>
                      <Grid item xs={6} container>
                          <Field
                              name="jobTitle"
                              type="text"
                              label="Job Title"
                              component={CustomTextField}
                              icon={<WorkIcon />}
                          />
                      </Grid>
                  </Grid>
              </DialogContent>
              <Divider />
              <DialogActions>
                  <div className={classes.actions}>
                      {" "}
                      <Button
                          variant="contained"
                          color="secondary"
                          onClick={onClose}
                      >
                          Cancel
                      </Button>
                      <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          onClick={props.handleSubmit(onSubmit)}
                      >
                          Submit
                      </Button>
                  </div>
              </DialogActions>
          </form>
      </Dialog>
  );
};

ContactForm.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

function validate(values) {
  const errors = {};
  const { email, name, phoneNumber } = values;
  const emailRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const phoneNumberRegex = new RegExp(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\\./0-9]*$/g
  );

  // email must be provided and must be a valid email
  if (!email || !emailRegex.test(email)) {
      errors.email = "A valid email must be provided.";
  }

  // name field must be provided
  if (!name) {
      errors.name = "You must enter a name.";
  }
  // this logic has purpose so that either you leave phone number empty or enter a valid working phone number
  if (phoneNumber && !phoneNumberRegex.test(phoneNumber)) {
      errors.phoneNumber = "A valid working phone number must be provided.";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "contactForm",
})(ContactForm); */

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (post) => {
      dispatch(createPost(post));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
