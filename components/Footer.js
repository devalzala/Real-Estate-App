import { Box } from "@chakra-ui/layout";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      textAlign="center"
      p="5"
      color="gray.600"
      borderTop="1px"
      borderColor="gray.100"
    >
      © {year} Realtor, Inc.
    </Box>
  );
};

export default Footer;
