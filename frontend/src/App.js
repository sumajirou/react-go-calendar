import React, { useState, useEffect } from "react";
import "./App.css";

import {
  Button,
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
} from "@material-ui/core";

// Material-UIアイコン取得
import MenuIcon from "@material-ui/icons/Menu";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          {/* メニューアイコン */}
          <IconButton>
            <MenuIcon />
          </IconButton>

          {/* アプリタイトル */}
          <Typography variant="subtitle1">📅カレンダー</Typography>

          {/* アカウントメニュー */}
          <IconButton>
            <Avatar></Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Button variant="contained" color="primary">
        Button
      </Button>

      {/* 月カレンダー */}
      <Box border={1} p={1} height="80vh">
        {[...Array(5)].map(() => (
          <Box display="flex" height="20%">
            {[...Array(7)].map(() => (
              <Box border={1} flexGrow={1}>
                day
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default App;
