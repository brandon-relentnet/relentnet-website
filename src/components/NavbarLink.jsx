// ./src/components/NavbarLink.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

const NavbarLink = ({ children, href, isActive, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={href}
            variants={props.variants} // Apply the variants passed from the parent
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
                position: "relative",
                paddingBottom: "4px",
                cursor: "pointer",
                textDecoration: "none",
                color: isActive ? "var(--pink)" : "inherit",
                display: "inline-block", // Ensure the link is inline-block for proper spacing
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-current={isActive ? "page" : undefined} // Accessibility enhancement
        >
            {children}
            {/* Underline */}
            <motion.span
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "2px",
                    width: "100%",
                    background: "var(--pink)", // Pink underline
                    originX: 0,
                    scaleX: 0,
                }}
                animate={{
                    scaleX: isHovered || isActive ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
            />
        </motion.a>
    );
};

// PropTypes for type checking
NavbarLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    variants: PropTypes.object, // Accept variants as a prop
};

NavbarLink.defaultProps = {
    isActive: false,
    variants: {}, // Default to empty object if no variants are passed
};

export default NavbarLink;
