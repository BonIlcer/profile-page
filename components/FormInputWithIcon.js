import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  OutlinedInput,
} from "@material-ui/core";

export default function FormInputWithIcon({ Icon, props }) {
  return (
    <>
      <FormControl variant="outlined">
        {/* <InputLabel htmlFor="my-input" shrink>
          Email address
        </InputLabel> */}
        <OutlinedInput
          id="my-input"
          aria-describedby="my-helper-text"
          label={
            <InputLabel htmlFor="my-input" shrink>
              address
            </InputLabel>
          }
        />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </>
  );
}
