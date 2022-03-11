import React, { Fragment, useState } from "react";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Alert as MuiAlert,
  Button,
  TextField as MuiTextField,
  Paper,
  Typography,
} from "@material-ui/core";
import { ReactComponent as Logo } from "../assets/svg/logo_main.svg";
import useAuth from "../hooks/useAuth";
import { signIn_req } from "../redux/actions/users";
import { useDispatch } from "react-redux";
import SendCode from "../modal/SendCodeModal";

// Spacing.
const Alert = styled(MuiAlert)(spacing);
const TextField = styled(MuiTextField)(spacing);
const Spacer = styled.div(spacing);

// Custom Style.
const Brand = styled(Logo)`
  fill: ${(props) => props.theme.palette.primary.main};
  width: 64px;
  height: 64px;
  margin-bottom: 32px;
`;

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)};

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;

const SignIn = () => {
  // Hooks.
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const dispatch = useDispatch();
  // const [errorMes, useErrorMes] = useState([]);
  const [messageError, setMessageError] = useState([]);
  const [successLogin, setSuccesLogin] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .min(8, "Must be at least 8 characters")
      .max(255)
      .required("Email is required"),
    password: Yup.string()
      .min(6, " Must be a last 6 characters ")
      .max(255)
      .required("Password is required"),
  });

  const onSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    try {
      // await signIn(values.email, values.password);
      dispatch(signIn_req(values))
        .then((data) => {
          if (data.accessToken) {
            setSuccesLogin(true);
            // navigate("/dashboard");
          }
        })
        .catch((error) => {
          setMessageError(error?.response?.data);
        });
    } catch (error) {
      const message = error.message || "Something went wrong";
      setStatus({ success: false });
      setErrors({ submit: message });
      setSubmitting(false);
    }
  };

  const invalid = messageError?.message;

  return (
    <Fragment>
      <Brand />
      <Wrapper>
        <Helmet title="Sign In" />
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Welcome Super Admin!
        </Typography>
        <Spacer my={4} />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              {errors?.submit && (
                <Alert mt={2} mb={3} severity="warning">
                  {errors?.submit}
                </Alert>
              )}
              {invalid && (
                <>
                  {invalid && (
                    <Alert my={2} severity="error">
                      {invalid}
                    </Alert>
                  )}
                </>
              )}
              <TextField
                type="email"
                name="email"
                label="Email Address"
                value={values.email}
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                onBlur={handleBlur}
                onChange={handleChange}
                my={2}
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                value={values.password}
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                onBlur={handleBlur}
                onChange={handleChange}
                my={2}
              />

              <Spacer my={4} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Sign in
              </Button>
            </form>
          )}
        </Formik>
      </Wrapper>
      {successLogin && <SendCode />}
    </Fragment>
  );
};

export default SignIn;
