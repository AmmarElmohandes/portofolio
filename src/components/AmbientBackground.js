import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AmbientBackground = () => {
    return (
        <Box
            position="absolute"
            inset={0}
            zIndex={0}
            overflow="hidden"
            pointerEvents="none"
        >
            {/* Animated Glowing Orb 1 */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    position: "absolute",
                    top: "20%",
                    left: "10%",
                    width: "300px",
                    height: "300px",
                    background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(50px)",
                }}
            />

            {/* Moving Grid Lines */}
            <Box
                position="absolute"
                inset={0}
                opacity={0.1}
                bgImage="linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)"
                bgSize="40px 40px"
                as={motion.div}
                animate={{
                    backgroundPosition: ["0px 0px", "40px 40px"],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </Box>
    );
};
export default AmbientBackground;