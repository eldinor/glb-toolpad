import * as React from "react";
import {useEffect, useState, useCallback } from "react";
import Typography from "@mui/material/Typography";
import ViewerComponent from "./ViewerComponent";

export default function DashboardPage() {


const handleOpen = useCallback ((val:File)=>{

console.log("DONE", val)
}, [])

  return (
    <>
      <ViewerComponent  handleOpen={handleOpen} />

      <Typography>Welcome to Toolpad!</Typography>
    </>
  );
}
