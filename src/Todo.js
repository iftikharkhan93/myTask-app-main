import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "./firebase_config";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

export default function TodoListItem({ todo, inprogress, id }) {
  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "In Progress" : "Completed"}
        />
      </ListItem>

      <Button
        onClick={toggleInProgress}
        variant=""
        style={{ height: "70%", marginTop: "15px", backgroundColor: "e5e5e5" }}
        value={inprogress ? "Done" : "UnDone"}
      >
        {inprogress ? "Done" : "UnDone"}
      </Button>

      <Button
        onClick={deleteTodo}
        style={{
          height: "70%",
          marginTop: "15px",
          marginBottom: "15px",
          paddingLeft: "25px",
        }}
        variant="outlined"
        color=""
        className={classes.button}
        startIcon={<DeleteIcon />}
      ></Button>

      {/* <Button onClick={deleteTodo}> X</Button> */}
     
    </div>
  );
}
