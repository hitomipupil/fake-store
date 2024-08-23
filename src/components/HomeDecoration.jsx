import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

import Loading from "./Loading";
import Item from "./Item";
import getProducts from "../apis/getProducts";

const HomeDecoration = () => {
    const [homeDecoration, setHomeDecoration] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchHomeDecoration = async () => {
            try {
                const homeDecoration = await getProducts("home-decoration");
                setHomeDecoration(homeDecoration.products);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchHomeDecoration();
    }, []);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : error ? (
                <Typography color="error" variant="h6">
                    {error}
                </Typography>
            ) : homeDecoration.length > 0 ? (
                <Grid container spacing={4} sx={{ padding: 4 }}>
                    {homeDecoration.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                            <Item item={item} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography variant="h6">No home decoration items available.</Typography>
            )}
        </div>
    );
};

export default HomeDecoration;
