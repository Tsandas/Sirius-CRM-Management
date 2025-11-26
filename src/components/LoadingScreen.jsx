import { Flex, Text, Image } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionFlex = motion(Flex);

const LoadingScreen = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <MotionFlex
          height="100vh"
          align="center"
          justify="center"
          bg="#ffffffff"
          color="white"
          direction="column"
          gap={4}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          position="fixed"
          top={0}
          left={0}
          width="100%"
          zIndex={2000}
        >
          <Image
            src="../../public/sirius.png"
            alt="Sirius Logo"
            boxSize="400px"
            objectFit="contain"
          />
        </MotionFlex>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
