import { Box, Card, CardActionArea, CardContent, Grid2 as Grid, Typography } from "@mui/material";
import Image from "next/image";
import { memo } from "react";
import Character from "@/app/interfaces/Character";

interface Props {
  character: Character;
  onClick: () => void;
}

const CharacterCard = ({ character, onClick }: Props) => {
  return (
    <Grid size={{ xs: 12, sm: 3, md: 2 }} onClick={onClick}>
      <Card sx={{ maxWidth: 250, height: '100%' }}>
        <CardActionArea sx={{ height: '100%' }}>
          <Box sx={{ position: "relative", width: "100%", height: 200 }}>
            <Image
              src={`https://picsum.photos/seed/${character.name}/200/200`}
              alt={character.name}
              fill
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL="/swlogo.png"
              loading="lazy"
            />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {character.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ bgcolor: "black", color: "grey", borderRadius: 2 }}
            >
              További információ
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default memo(CharacterCard);
