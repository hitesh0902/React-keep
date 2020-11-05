import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import PaletteOutlinedIcon from "@material-ui/icons/PaletteOutlined";
import { useDispatch } from "react-redux";
import { addNoteAction } from "../actions/NotesAction";
import ColorPalette from "./ColorPalette";

const useStyles = makeStyles((theme) => ({
  paper: {
    // backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
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

const Form = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");

  const [bgColor, setBgColor] = useState("white");

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.length && body.length) {
      const note = { id: uuidv4(), title, body, bgColor };
      dispatch(addNoteAction(note));
      setTitle("");
      setBody("");
    }
  };

  return (
    <Container maxWidth="sm" style={{ margin: "40px auto" }}>
      <form onSubmit={handleSubmit}>
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
              <Button type="submit">Submit</Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
