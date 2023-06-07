import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { authonticatSignUp, authonticatlogin } from "../services/Api";
import { DataConetext } from "../context/DataProvider";
const Component = styled(Box)`
  height: 70vh;
  widht: 90vh;
`;
const Image = styled(Box)`
  background: #2874f0
    url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png")
    center 85% no-repeat;

  width: 28%;
  padding: 45px 35px;
  & > p,
  & h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const RequestButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreatAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;
const Error = styled(Typography)`
  font-size: 10px;
  color: red;
  line-height: 0px;
  margin-top: 10px;
  font-weight: 600;
`;
const singupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};
const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "Get access to your Orders,Whishlist and Recomondation",
  },
  signup: {
    view: "singup",
    heading: "Looks like you are now here!",
    subheading: "sing up with your mobile number to get started",
  },
};
const LoginDialog = ({ open, setOpen }) => {
  const [account, tooggleAcount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(singupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const { setAccount } = useContext(DataConetext);

  const handleClose = () => {
    setOpen(false);
    tooggleAcount(accountInitialValues.login);
    setError(false);
  };

  const toggelSignup = () => {
    tooggleAcount(accountInitialValues.signup);
  };

  const OninputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const singUpUser = async () => {
    let response = await authonticatSignUp(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };
  const Loginuser = async () => {
    let response = await authonticatlogin(login);
    console.log(response);
    if (response.status === 200) {
      
      handleClose();
      setAccount(response.data.data.firstname);
      debugger
    } else {
      setError(true);
    }
  };

  const OnvalueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxwidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>
              {account.subheading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter username"
                name="username"
                onChange={(e) => OnvalueChange(e)}
              />

              {error && <Error>Please enter valid userName or Password</Error>}

              <TextField
                variant="standard"
                label="Enter your password"
                name="password"
                onChange={(e) => OnvalueChange(e)}
              />
              <Text>
                By continuing, you agree to flipkart's term's of the use and
                Privacy Policy
              </Text>
              <LoginButton onClick={Loginuser}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>or</Typography>
              <RequestButton>Request otp</RequestButton>
              <CreatAccount onClick={() => toggelSignup()}>
                New to Flipkart?Create an account
              </CreatAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                name="firstname"
                label="Enter your first name"
                onChange={(e) => OninputChange(e)}
              />
              <TextField
                variant="standard"
                name="lastname"
                label="Enter your Last name"
                onChange={(e) => OninputChange(e)}
              />
              <TextField
                variant="standard"
                name="username"
                label="Enter your Username"
                onChange={(e) => OninputChange(e)}
              />
              <TextField
                variant="standard"
                name="email"
                label="Enter your Email"
                onChange={(e) => OninputChange(e)}
              />
              <TextField
                variant="standard"
                name="password"
                label="Enter your password"
                onChange={(e) => OninputChange(e)}
              />
              <TextField
                variant="standard"
                name="phone"
                label="Enter your Phone"
                onChange={(e) => OninputChange(e)}
              />
              <LoginButton onClick={singUpUser}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
