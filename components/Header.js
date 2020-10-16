import { Avatar, Divider, Hidden, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { useEffect } from "react";
import styles from "../styles/Header.module.scss";

const useXsStyles = makeStyles((theme) => ({
  avatar: {
    margin: "0px 10px",
    width: "24px",
    height: "24px",
  },
}));

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: "0px 20px",
    width: "40px",
    height: "40px",
  },
}));

export default function Header({ fullname }) {
  const isXsUp = useMediaQuery("(min-width:600px)");
  const xsClasses = useXsStyles();
  const classes = useStyles();

  //   useEffect(() => {
  //     const jssStyles = document.querySelector("#jss-server-side");
  //     if (jssStyles) {
  //       console.log(jssStyles);
  //       jssStyles.parentElement.removeChild(jssStyles);
  //       console.log(jssStyles);
  //     }
  //   }, []);

  useEffect(() => console.log(isXsUp.toString()), [isXsUp]);

  return (
    <div className={styles.header}>
      <NotificationsNoneIcon className={styles.icon} />
      <Divider className={styles.divider} orientation="vertical" />

      <Avatar
        className={isXsUp ? classes.avatar : xsClasses.avatar}
        alt="User avatar"
        src={"/userAvatar.jpg"}
      />

      <Hidden xsDown implementation="css">
        <div className="name">{`${fullname.surname} ${fullname.name[0]}.`}</div>
      </Hidden>
    </div>
  );
}

// Header.propTypes = {
//   width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
// };

// export default withWidth()(Header);
