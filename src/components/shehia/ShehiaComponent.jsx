import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { TextField,Button } from '@mui/material';

export default function ShehiaComponent({setOpen,setShehiaData}) {
    const [boundaryName,setBoundaryName] = useState("")

    const onSubmit = async ()=>{
       console.log('boundar :',boundaryName);
       await setShehiaData((prev)=>[...prev,{id:545,boundary_name:boundaryName}])
       await setOpen(false)
    }
  return (
    <Stack spacing={3}>
      <TextField onChange={(e)=>{
        setBoundaryName(e.target.value)
      }} placeholder="Enter boundary name" />
      <Button onClick={onSubmit}>Save</Button>
    </Stack>
  );
}
