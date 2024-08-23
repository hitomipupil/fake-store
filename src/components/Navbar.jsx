import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

const Navbar = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                padding: "16px",
            }}
        >
            {[
                { path: "/", label: "Home" },
                { path: "/furniture", label: "furniture" },
                { path: "/home-decoration", label: "Home Decoration" },
                { path: "/kitchen-accessories", label: "Kitchen Accessories" },
            ].map((link) => (
                <Button
                    key={link.path}
                    component={NavLink}
                    to={link.path}
                    sx={{
                        backgroundColor: "#FFC9B5",
                        color: "#807182",
                        textTransform: "none",
                        "&.active": {
                            backgroundColor: "#D8AA96",
                        },
                        "&:hover": {
                            backgroundColor: "#D8AA96",
                        },
                    }}
                >
                    {link.label}
                </Button>
            ))}
        </Box>
    );
};

export default Navbar;
