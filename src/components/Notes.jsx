import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Popup from "./Popup";
import Form from "./Form";
import { useSelector } from "react-redux";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { useDispatch } from "react-redux";
import { FetchDataAction } from "../actions/NotesAction";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  cardHeight: {
    height: "100%",
  },
  lineBreak: {
    lineBreak: "loose",
    wordBreak: "break-word",
  },
  container: {
    maxWidth: 900,
    [theme.breakpoints.up(1264)]: {
      maxWidth: 1185,
    },
    [theme.breakpoints.up(1904)]: {
      maxWidth: 1785,
    },
  },
  edit: {
    position: "absolute",
    bottom: 5,
    right: 5,
    width: 20,
    height: 20,
  },
}));

const Notes = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchDataAction());
  }, [dispatch]);

  const [modal, setModal] = useState(false);

  const [cardId, setCardId] = useState(null);

  const notes = useSelector((state) => state.notes);

  const loading = useSelector((state) => state.isLoading);

  const handleModalOpen = (id) => {
    setCardId(id);
    setModal(true);
  };

  const handleModalClose = () => setModal(false);

  if (loading) {
    return (
      <React.Fragment>
        <Form />
        <Grid container justify="center">
          <CircularProgress color="secondary" />
        </Grid>
      </React.Fragment>
    );
  }

  const notesList = notes.length ? (
    notes
      .map((note) => (
        <Grid item key={note.id} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card
            className={classes.cardHeight}
            style={{
              backgroundColor: note.bgColor,
            }}
          >
            <CardActionArea
              onClick={() => handleModalOpen(note.id)}
              className={classes.cardHeight}
            >
              <CardContent className={classes.cardHeight}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="p"
                  className={classes.lineBreak}
                >
                  {note.title}
                </Typography>
                <div>
                  <EditOutlinedIcon className={classes.edit} />
                </div>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.lineBreak}
                >
                  {note.body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))
      .reverse()
  ) : (
    <div style={{ textAlign: "center", width: "100%" }}>
      No Notes to display
    </div>
  );

  return (
    <div>
      <Form />
      <Container className={classes.container}>
        <Grid container spacing={4}>
          {notesList}
        </Grid>
        <Popup open={modal} close={handleModalClose} id={cardId} />
      </Container>
    </div>
  );
};

export default Notes;
