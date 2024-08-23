import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

import Loading from "./Loading";
import Item from "./Item";
import getProducts from "../apis/getProducts";

const KitchenAccessories = () => {
    const [kitchenAccessories, setKitchenAccessories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchKitchenAccessories = async () => {
            try {
                const kitchenAccessories = await getProducts(
                    "kitchen-accessories"
                );
                setKitchenAccessories(kitchenAccessories.products);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchKitchenAccessories();
    }, []);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : error ? (
                <Typography color="error" variant="h6">
                    {error}
                </Typography>
            ) : kitchenAccessories.length > 0 ? (
                <Grid container spacing={4} sx={{ padding: 4 }}>
                    {kitchenAccessories.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                            <Item item={item} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography variant="h6">No kitchen accessories available.</Typography>
            )}
        </div>
    );
};

export default KitchenAccessories;
