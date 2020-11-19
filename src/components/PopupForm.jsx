import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import PaletteOutlinedIcon from "@material-ui/icons/PaletteOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, updateNoteAction } from "../actions/NotesAction";
import ColorPalette from "./ColorPalette";

const useStyles = makeStyles((theme) => ({
  paper: {
    // backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    borderRadius: 4,
    padding: "8px 8px 0",
  },
  input: {
    overflow: "hidden",
  },
  text: {
    color: "rgba(0,0,0,0.7)",
    width: "100%",
  },
  actionArea: {
    marginTop: 8,
  },
}));

const PopupForm = ({ id, close }) => {
  const classes = useStyles();

  const note = useSelector((state) =>
    state.notes.find((item) => item.id === id)
  );

  const dispatch = useDispatch();

  const newTitle = note ? note.title : "";

  const newBody = note ? note.body : "";

  const newBgColor = note ? note.bgColor : "white";

  const [title, setTitle] = useState(newTitle);

  const [body, setBody] = useState(newBody);

  const [bgColor, setBgColor] = useState(newBgColor);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.length && body.length) {
      const updatedNote = { id, title, body, bgColor };
      dispatch(updateNoteAction(updatedNote));
      close();
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    dispatch(deleteNoteAction(id));
    close();
  };

  return (
    <Container maxWidth="sm" style={{ padding: "1%" }}>
      <form onSubmit={handleSubmit} style={{ marginTop: 100 }}>
        <Grid
          container
          spacing={2}
          style={{ backgroundColor: bgColor }}
          className={classes.paper}
        >
          <Grid item container>
            <InputBase
              type="text"
              placeholder="Title"
              fullWidth={true}
              inputProps={{ maxLength: 30 }}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <Typography
              variant="caption"
              align="right"
              className={classes.text}
            >
              {title.length} / 30
            </Typography>
          </Grid>
          <Grid item container>
            <InputBase
              type="textarea"
              placeholder="Take a note..."
              fullWidth={true}
              multiline
              rows={3}
              inputProps={{
                maxLength: 100,
                className: classes.input,
              }}
              value={body}
              onChange={(event) => setBody(event.target.value)}
            />
            <Typography
              variant="caption"
              align="right"
              className={classes.text}
            >
              {body.length} / 100
            </Typography>
          </Grid>
          <Grid
            item
            container
            justify="space-between"
            className={classes.actionArea}
            style={{ padding: 0 }}
          >
            <Grid item>
              <IconButton onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={handleClick}>
                <PaletteOutlinedIcon />
              </IconButton>
              <ColorPalette
                anchorEl={anchorEl}
                handleClose={handleClose}
                setBgColor={setBgColor}
              />
            </Grid>
            <Grid item>
              <Button onClick={() => close()}>Close</Button>
              <Button type="submit">Save</Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PopupForm;
