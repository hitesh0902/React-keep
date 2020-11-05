import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import RefreshIcon from "@material-ui/icons/Refresh";
import GitHubIcon from "@material-ui/icons/GitHub";
import Tooltip from "@material-ui/core/ToolTip";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color="primary"
        elevation={3}
        style={{ backgroundColor: "#2196f3" }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ReactKeep
          </Typography>
          <Tooltip title="refresh">
            <IconButton
              color="inherit"
              onClick={() => window.location.reload()}
            >
              <RefreshIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Source Code">
            <Link
              href="https://github.com/hitesh0902/React-keep"
              color="inherit"
              target="_blank"
            >
              <IconButton color="inherit">
                <GitHubIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navbar;
