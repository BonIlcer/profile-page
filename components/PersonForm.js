import {
  Button,
  Card,
  CardContent,
  createMuiTheme,
  TextField,
  ThemeProvider,
  makeStyles,
  Hidden,
  Divider,
} from "@material-ui/core";
import { useState } from "react";
import { AlternateEmail } from "@material-ui/icons";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import CallIcon from "@material-ui/icons/Call";
import MaskedTextField from "./MaskedTextField";
import InputField from "./InputField";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#359FF4",
    },
    error: {
      main: "#EB5757",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  icon: {
    fontSize: "40px",
    margin: "16px 45px 8px 0px",
    color: "#00BFA5",
  },
  buttonWrap: {
    width: "100%",
    textAlign: "center",
  },
}));

export default function PersonForm() {
  const [errorName, setErrName] = useState(false);
  const [errorEmail, setErrEmail] = useState(false);
  const [errorNum, setErrNum] = useState(false);
  const styles = useStyles();

  function formSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {};
    formData.forEach((value, key) => (obj[key] = value));
    const jsonFormData = JSON.stringify(obj);
    console.log(jsonFormData);
  }

  function validateName(e) {
    if (e.target.value === "") {
      setErrName(true);
    } else if (e.target.value.split(" ").length === 2) {
      setErrName(false);
    } else if (e.target.value.split(" ").length === 3) {
      setErrName(false);
    } else {
      setErrName(true);
    }
  }

  function validateEmail(e) {
    const regex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
    if (e.target.value === "") {
      setErrEmail(true);
    } else if (!regex.test(e.target.value)) {
      setErrEmail(true);
    } else {
      setErrEmail(false);
    }
  }

  return (
    <>
      <Card>
        <form onSubmit={formSubmit} className={styles.form}>
          <ThemeProvider theme={theme}>
            <CardContent style={{ display: "flex", alignItems: "center" }}>
              <AssignmentIndIcon className={styles.icon} />
              <InputField
                name="fullname"
                id="outlined-full-name"
                label="Фамилия и имя"
                placeholder="Укажите ваши фамилию и имя"
                helperText="Вы неверно указали имя"
                errorState={errorName}
                validationFunc={validateName}
              />
            </CardContent>
            <Hidden xsDown implementation="css">
              <Divider orientation="vertical" />
            </Hidden>
            <CardContent style={{ display: "flex", alignItems: "center" }}>
              <AlternateEmail className={styles.icon} />
              <InputField
                name="email"
                id="outlined-email"
                label="E-mail"
                placeholder="Укажите элекронную почту"
                helperText="Вы неверно указали почту"
                errorState={errorEmail}
                validationFunc={validateEmail}
              />
            </CardContent>
            <Hidden xsDown implementation="css">
              <Divider orientation="vertical" />
            </Hidden>
            <CardContent style={{ display: "flex", alignItems: "center" }}>
              <CallIcon className={styles.icon} />
              <MaskedTextField errorState={errorNum} setError={setErrNum} />
            </CardContent>
          </ThemeProvider>
          <CardContent className={styles.buttonWrap}>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </CardContent>
        </form>
      </Card>
    </>
  );
}
