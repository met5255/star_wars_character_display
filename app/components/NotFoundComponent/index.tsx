import { Box, Grid2 as Grid, Typography } from "@mui/material"
import Image from "next/image"
import { memo } from "react"

interface Props {
    error?: boolean
}

const NotFoundPage = ({ error = false }: Props) => {
    return (<Box textAlign="center" mt={5}>
        <Grid container justifyContent="center">
            <Grid size={{ xs: 12, sm: 3, md: 3 }}>
                <Image
                    src="/notfound.png"
                    alt="error"
                    width={400}
                    height={600}
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL="/swlogo.png"
                    loading="lazy"
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <Typography variant="h4" color="error" fontFamily={"Star Jedi"} gutterBottom>
                    {error ? "Sikertelen Karakter lekérés" :  "404 Nem ezek a karakterek, amiket keresel!"}
                </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 3, md: 3 }}>
                <Image
                    src="/notfound.png"
                    alt="error"
                    width={400}
                    height={600}
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL="/swlogo.png"
                    loading="lazy"
                />
            </Grid>

        </Grid>
    </Box>
    )
}

export default memo(NotFoundPage);