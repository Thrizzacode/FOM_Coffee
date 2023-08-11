import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/HomeMenu.css";

const HomeMenu = () => {
  return (
    <Flex
      height={{ base: "3.2rem", md: "4.94rem" }}
      minW={"100%"}
      justify={"space-around"}
      pos="relative"
      align="center"
      display={{ base: "none", lg: "Flex" }}
      width="36%"
      gap={5}

      // border="1px solid red"
    >
      <Flex
        justify={"center"}
        className="dropDown"
        height="100%"
        align={"center"}
        width="15%"
        _hover={{ color: "#f89f17" }}
      >
        <Link to="/#">首頁</Link>
      </Flex>
      <Flex
        justify={"center"}
        className="dropDown"
        height="100%"
        align={"center"}
        width="15%"
        _hover={{ color: "#f89f17" }}
      >
        <Link to="/men">甜點</Link>
        <Box
          top="4rem"
          className="drop-down-content"
          left="-2rem"
          overflow="hidden"
          bg="white"
          pos={"absolute"}
          width="400px"
          transition={"all 0.3s"}
          height={"0vh"}
          marginTop="14px"
        >
          <Link to="#">
            <div className="main-menu">
              <div className="hoverlist">
                <ul>
                  <p className="category-heading">磅蛋糕</p>
                  <li>
                    <Link to="#">Casual Shirts</Link>
                  </li>
                  <li>
                    <Link to="#">Formal Shirts</Link>
                  </li>
                  <li>
                    <Link to="#">Polos</Link>
                  </li>
                  <li>
                    <Link to="#">T-Shirts</Link>
                  </li>
                  <li>
                    <Link to="#">Jackets</Link>
                  </li>
                  <li>
                    <Link to="#">Hoodies</Link>
                  </li>
                  <li>
                    <Link to="#">Sweatshirts</Link>
                  </li>
                </ul>
                <ul>
                  <p className="category-heading">費南雪</p>
                  <li>
                    <Link to="#">Casual Trousers</Link>
                  </li>
                  <li>
                    <Link to="#">Formal Trousers</Link>
                  </li>
                  <li>
                    <Link to="#">Jeans</Link>
                  </li>
                  <li>
                    <Link to="#">Track Pants</Link>
                  </li>
                  <li>
                    <Link to="#">Shorts</Link>
                  </li>
                </ul>
              </div>

              <div className="hoverlist">
                <ul>
                  <p className="category-heading">瑪德蓮</p>

                  <li>
                    <Link to="#">Polos</Link>
                  </li>
                  <li>
                    <Link to="#">Sport T-shirts</Link>
                  </li>
                  <li>
                    <Link to="#">Track Pants</Link>
                  </li>
                  <li>
                    <Link to="#">Sport shoes</Link>
                  </li>
                </ul>
                <ul>
                  <p className="category-heading">司康</p>

                  <li>
                    <Link to="#">Kurta</Link>
                  </li>
                  <li>
                    <Link to="#">Waistcoats</Link>
                  </li>
                  <li>
                    <Link to="#">Pyjamas</Link>
                  </li>
                </ul>
                <ul>
                  <p className="category-heading">餅乾</p>

                  <li>
                    <Link to="#">Hoodies</Link>
                  </li>
                  <li>
                    <Link to="#">Sweaters</Link>
                  </li>
                  <li>
                    <Link to="#">Jackets</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        </Box>
      </Flex>
      <Flex
        justify={"center"}
        className="dropDown"
        height="100%"
        align={"center"}
        width="15%"
        _hover={{ color: "#f89f17" }}
      >
        <Link to="#">費南雪</Link>
      </Flex>
      <Flex
        justify={"center"}
        className="dropDown"
        height="100%"
        align={"center"}
        width="15%"
        _hover={{ color: "#f89f17" }}
      >
        <Link to="#">司康</Link>
      </Flex>
      <Flex
        justify={"center"}
        className="dropDown"
        height="100%"
        align={"center"}
        width="15%"
        _hover={{ color: "#f89f17" }}
      >
        <Link to="#">餅乾</Link>
      </Flex>
    </Flex>
  );
};

export default HomeMenu;
