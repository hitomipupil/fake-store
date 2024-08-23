import { Typography, Box } from "@mui/material";

const Home = () => {
    return (
        <Box sx={{ textAlign: "center", marginTop: 4 }}>
            <Typography variant="h4" gutterBottom>
                Furniture and more
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Explore our modern furniture collection and home accessories!
            </Typography>
        </Box>
    );
};

export default Home;
