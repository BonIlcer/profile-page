import { Card, CardContent, Divider, makeStyles } from "@material-ui/core";
import { AlternateEmail } from "@material-ui/icons";
import CallIcon from "@material-ui/icons/Call";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    height: "96px",
    padding: "0px",
    display: "flex",
    alignItems: "center",
    "&:last-child": {
      padding: "0px",
    },
  },
  icon: {
    fontSize: "30px",
    color: "#00BFA5",
  },
}));

export default function PersonInfo({ email, phoneNumber }) {
  const styles = useStyles();
  return (
    <>
      <Card>
        <CardContent className={styles.cardContent}>
          <AlternateEmail className={styles.icon} />
          <p>{email}</p>
        </CardContent>
        <Divider />
        <CardContent className={styles.cardContent}>
          <CallIcon className={styles.icon} />
          <p>{phoneNumber}</p>
        </CardContent>
      </Card>
    </>
  );
}
