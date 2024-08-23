import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const Header = ({ title }) => {
    return (
        <Box
            sx={{
                backgroundColor: "#FFC9B5", // Light cream color
                padding: "16px",
                textAlign: "center",
            }}
        >
            <Typography variant="h4" sx={{ color: "#807182" }}> {/* Dark gray color */}
                {title}
            </Typography>
        </Box>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
