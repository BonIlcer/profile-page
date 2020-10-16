import React from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-input-mask";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import InputField from "./InputField";

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "+",
        /[1-9]/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
      ]}
      maskPlaceholder={" "}
      showmask="true"
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

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

export default function MaskedTextField({ errorState }) {
  const styles = useStyles();

  return (
    <>
      <InputField
        name="phoneNumber"
        id="formatted-text-input"
        label="Номер телефона"
        placeholder="Введите номер телефона"
        helperText="Вы неверно указали номер"
        errorState={errorState}
        inputComponent={TextMaskCustom}
      />
    </>
  );
}
