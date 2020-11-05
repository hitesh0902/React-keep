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

const ColorPalette = ({ anchorEl, handleClose, setBgColor }) => {
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
          <MenuItem
            onClick={() => {
              setBgColor("white");
              handleClose();
            }}
            className={classes.menuItem}
          >
            <FiberManualRecordOutlinedIcon />
          </MenuItem>
          <MenuItem
            onClick={() => {
              setBgColor("#f8bbd0");
              handleClose();
            }}
            className={classes.menuItem}
          >
            <FiberManualRecordIcon style={{ color: "#f8bbd0" }} />
          </MenuItem>
          <MenuItem
            onClick={() => {
              setBgColor("#b2ebf2");
              handleClose();
            }}
            className={classes.menuItem}
          >
            <FiberManualRecordIcon style={{ color: "#b2ebf2" }} />
          </MenuItem>
        </Box>
        <Box display="flex">
          <MenuItem
            onClick={() => {
              setBgColor("#ff8a80");
              handleClose();
            }}
            className={classes.menuItem}
          >
            <FiberManualRecordIcon
              style={{
                color: "#ff8a80",
              }}
            />
          </MenuItem>
          <MenuItem
            onClick={() => {
              setBgColor("#ffff8d");
              handleClose();
            }}
            className={classes.menuItem}
          >
            <FiberManualRecordIcon
              style={{
                color: "#ffff8d",
              }}
            />
          </MenuItem>
          <MenuItem
            onClick={() => {
              setBgColor("#ccff90");
              handleClose();
            }}
            className={classes.menuItem}
          >
            <FiberManualRecordIcon style={{ color: "#ccff90" }} />
          </MenuItem>
        </Box>
      </Menu>
    </div>
  );
};

export default ColorPalette;
