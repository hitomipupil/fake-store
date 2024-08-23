import PropTypes from "prop-types";
import { Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";

const Item = ({ item }) => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={item.images[0]}
                alt={item.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="h6" color="primary">
                    €{item.price}
                </Typography>
            </CardActions>
        </Card>
    );
};

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired,
    }).isRequired,
};

export default Item;
