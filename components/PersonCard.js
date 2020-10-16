import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";
import PersonInfo from "./PersonInfo";
import PersonForm from "./PersonForm";

export default function PersonCard({ fullname, email, phoneNumber }) {
  const patronym = fullname.patronym !== "" ? ` ${fullname.patronym}` : "";
  const [isEdit, setEdit] = useState(false);
  return (
    <>
      <Card style={{ display: "flex" }}>
        <CardContent>
          <Avatar alt="User avatar" src={"/userAvatar.jpg"} />
        </CardContent>
        <CardContent>
          {`${fullname.surname} ${fullname.name}` + patronym}
        </CardContent>
        <CardActions>
          {!isEdit ? (
            <Button
              onClick={() => {
                setEdit(!isEdit);
              }}
              endIcon={<EditIcon />}
            >
              Редактировать
            </Button>
          ) : (
            <Button
              onClick={() => {
                setEdit(!isEdit);
              }}
              endIcon={<CloseIcon />}
            >
              Закрыть
            </Button>
          )}
        </CardActions>
      </Card>
      <hr></hr>
      {!isEdit ? (
        <PersonInfo email={email} phoneNumber={phoneNumber} />
      ) : (
        <PersonForm />
      )}
    </>
  );
}
