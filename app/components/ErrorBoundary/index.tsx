import { Component, memo, ReactNode } from "react";
import { Box, Typography, Button, Grid2 as Grid } from "@mui/material";
import Image from "next/image";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Hiba elfogva:", error, errorInfo);
    }

    handleReload = () => {
        this.setState({ hasError: false });
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <Box textAlign="center" mt={5}>
                    <Grid container justifyContent="center">
                        <Grid size={{ xs: 12, sm: 3, md: 3 }}>
                            <Image
                                src="/error_troopers.png"
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
                            <Typography variant="h4" color="error" gutterBottom fontFamily={"Star Jedi"} >
                                Hoppá! valami hiba történt.
                            </Typography>
                            <Typography variant="body1" color="text.secondary" fontFamily={"Star Jedi"} >
                                Kérlek frissítsd az oldalt vagy próbáld meg később.
                            </Typography>
                            <Button variant="contained" color="primary" sx={{ mt: 2 }}  onClick={this.handleReload}>
                                Újratöltés
                            </Button>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 3, md: 3 }}>
                            <Image
                                src="/error_troopers.png"
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
            );
        }

        return this.props.children;
    }
}

export default memo(ErrorBoundary);
