import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

import Loading from "./Loading";
import Item from "./Item";
import getProducts from "../apis/getProducts";

const Furniture = () => {
    const [furniture, setFurniture] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchFurniture = async () => {
            try {
                const furniture = await getProducts("furniture");
                setFurniture(furniture.products);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFurniture();
    }, []);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : error ? (
                <Typography color="error" variant="h6">
                    {error}
                </Typography>
            ) : furniture.length > 0 ? (
                <Grid container spacing={4} sx={{ padding: 4 }}>
                    {furniture.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                            <Item item={item} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography variant="h6">No furniture available.</Typography>
            )}
        </div>
    );
};

export default Furniture;
