import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function ImageScrollbar({ data }) {
  return (
    <ScrollMenu style={{ overflow: "hidden" }}>
      {data.map((item) => (
        <Box
          width="910px"
          itemID={item.id}
          key={item.id}
          overflow="hidden"
          p="1"
        >
          <Image
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            alt="images"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}
