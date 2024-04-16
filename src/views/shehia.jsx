import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AppTable from "../utils/Table";
import { getShehia } from "../services/shehia";
import { basicUrl } from "../environment";
import AppDialog from "../utils/AppDialog";
import ShehiaComponent from "../components/shehia/ShehiaComponent";
export default function Shehia() {
  const [limit, setLimit] = useState(10);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //inakua called inside of functional component body only
  //huwez kuwe async kwenye hooks
  useEffect(() => {
    const fetch = async () => {
      const shehia_data = await getShehia(
        `${basicUrl}/boundary/api/boundary/getBoundary?limit=${limit}`
      );
      console.log("data :", shehia_data.results);
      setData(shehia_data.results);
    };
    fetch();
  }, [limit]);

  return (
    <Stack>
      {/* <Button variant="outlined" onClick={()=>{
            setLimit(20)
          }}>view more</Button> */}

      <AppTable
        data={data}
        buttonStatus={true}
        onClickButton={() => {
          setOpen(true)
          // setData((prev) => [...prev, { id: 4235, boundary_name: "new data" }]);
        }}
      />
      <AppDialog
        open={open}
        handleClose={handleClose}
        content={<ShehiaComponent setOpen={setOpen} setShehiaData={setData} />}
        title={'Shehia'}
      />
    </Stack>
  );
}
