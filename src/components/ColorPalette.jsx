import React from "react";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menu: {
    marginTop: -40,
    "& ul": {
      padding: 4,
    },
    "& li": {
      padding: 5,
    },
  },
  menuItem: {
    borderRadius: "50%",
  },
}));

const ColorPalette = ({ anchorEl, handleClose }) => {
  const classes = useStyles();
  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        <Box display="flex">
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            <FiberManualRecordOutlinedIcon />
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            <FiberManualRecordIcon style={{ color: "pink" }} />
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            <FiberManualRecordIcon style={{ color: "blue" }} />
          </MenuItem>
        </Box>
        <Box display="flex">
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            <FiberManualRecordIcon
              style={{
                color: "orange",
              }}
            />
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            <FiberManualRecordIcon
              style={{
                color: "yellow",
              }}
            />
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            <FiberManualRecordIcon style={{ color: "green" }} />
          </MenuItem>
        </Box>
      </Menu>
    </div>
  );
};

export default ColorPalette;
