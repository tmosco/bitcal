import React from "react";
import { Box, PseudoBox } from "@chakra-ui/core";

function NewsItemList({ item }) {
  return (
    <>
      <PseudoBox
        p={10}
        boxSizing="border-box"
        borderBottom="1px solid red"
        _hover={{ borderColor: "gray.200", bg: "gray.200" }}
      >
        <Box fontSize={26} fontWeight="semibold">
          {item.title}
        </Box>
        <Box>{item.feed}</Box>
      </PseudoBox>
    </>
  );
}

export default NewsItemList;
