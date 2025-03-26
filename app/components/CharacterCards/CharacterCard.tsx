import { Card, CardActionArea, CardContent, Grid2 as Grid, Typography } from "@mui/material";
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
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Image
            src={`https://picsum.photos/seed/${character.name}/200/200`}
            alt={character.name}
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL="/swlogo.png"
            loading="lazy"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {character.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Születési dátum: {character.birth_year}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default memo(CharacterCard);
