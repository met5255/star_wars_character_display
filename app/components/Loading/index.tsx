import { Box, LinearProgress } from "@mui/material";
import Image from "next/image";
import { memo } from "react";

const Loading = () => {
    return (   <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Image
          src="/lsb.png"
          width={110} 
          height={110}
          alt="sabre"
          style={{ marginRight: -11 }} 
        />
        <LinearProgress
          style={{
            borderRadius: 8,
            height: 15,
            flex: 1,
            boxShadow: "0 0 8px 2px rgba(173, 216, 230, 0.8)", 
          }}
        />
      </Box>);
}
export default memo(Loading);