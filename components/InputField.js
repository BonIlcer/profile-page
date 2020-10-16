import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textFieldRoot: {
    width: "254px",
    height: "57px",
  },
  inputRoot: {
    fontFamily: "Open Sans, sans-serif",
  },
  input: {
    fontSize: "14px",
    padding: "21px 14px 17px 14px",
  },
  labelRoot: {
    fontSize: "12px",
    fontWeight: "400",
    fontFamily: "Open Sans, sans-serif",
  },
  helperText: {
    fontSize: "12px",
    fontWeight: "400",
    fontFamily: "Open Sans, sans-serif",
    paddingTop: "4px",
  },
  icon: {
    fontSize: "40px",
    margin: "16px 45px 23px 0px",
    color: "#00BFA5",
  },
}));

export default function InputField({
  name,
  id,
  label,
  placeholder,
  helperText,
  errorState,
  validationFunc,
  inputComponent = null,
}) {
  const styles = useStyles();
  return (
    <TextField
      name={name}
      id={id}
      label={label}
      placeholder={placeholder}
      helperText={helperText}
      margin="normal"
      error={errorState}
      onBlur={validationFunc}
      classes={{
        root: styles.textFieldRoot,
      }}
      InputProps={{
        inputComponent: inputComponent ? inputComponent : "input",
        notched: true,
        classes: {
          root: styles.inputRoot,
          input: styles.input,
        },
      }}
      InputLabelProps={{
        shrink: true,
        classes: {
          root: styles.labelRoot,
        },
        style: { transform: "translate(14px, -6px) scale(1)" },
      }}
      FormHelperTextProps={{
        classes: { root: styles.helperText },
        style: { visibility: errorState ? "visible" : "hidden" },
      }}
      variant="outlined"
    />
  );
}
