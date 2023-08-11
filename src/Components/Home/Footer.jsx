import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import Logo from "../../Asssets/logo2.png";

const Footer = () => {
  return (
    <Box
      className="footer"
      color={"gray"}
      marginTop={"20px"}
      fontFamily={"sans-serif"}
    >
      <Flex>
        <Flex
          justifyContent={"space-between"}
          width="90%"
          margin={"auto"}
          flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
          gap={10}
        >
          <Box>
            <Text
              color={"black"}
              fontWeight="bold"
              fontSize={{ base: "15px", sm: "20px", md: "20px", lg: "22px" }}
              textAlign="center"
            >
              訂閱FOMCoffee電子報
            </Text>

            <Text textAlign="center" fontSize={"15px"}>
              直接在您的收件箱中獲取我們的最新優惠和新聞
            </Text>

            <Flex justify={"center"} gap={5} marginTop={7}>
              <Input bg={"white"} width="250px" />
              <Button
                bg={"black"}
                _hover={{ bg: "black" }}
                color="white"
                width={{ base: "70%", sm: "20%", md: "20%", lg: "25%" }}
              >
                訂閱
              </Button>
            </Flex>
          </Box>

          <Box>
            <Text
              textAlign="center"
              color={"black"}
              fontWeight="bold"
              fontSize={{ base: "15px", sm: "20px", md: "20px", lg: "25px" }}
            >
              下載我們的APP
            </Text>

            <Text textAlign="center" fontSize={"15px"}>
              隨時隨地購買我們的產品和優惠
            </Text>

            <Flex justify={"center"} gap={5} marginTop={7}>
              <Image
                width={{ base: "40%", sm: "25%", md: "40%", lg: "20%" }}
                src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
              />
              <Image
                width={{ base: "40%", sm: "25%", md: "40%", lg: "20%" }}
                src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
              />
            </Flex>
          </Box>
        </Flex>
      </Flex>

      <Divider mt="50px" />

      <Divider mt="50px" />
      <Flex
        color={"black"}
        justifyContent="space-between"
        flexDir={{ lg: "row", md: "row", sm: "column", base: "column" }}
        mt="30px"
      >
        <Grid
          // border={"1px solid gray"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap={5}
        >
          <Flex
            gap={4}
            // border={"1px solid gray"}
            width={{ base: "220px", sm: "220px", md: "100%", lg: "100%" }}
            margin={{ sm: "auto", md: "0", lg: "0", base: "auto" }}
          >
            <Box
              border={"1px solid gray"}
              width="50px"
              height="50px"
              pt="6%"
              pl="6%"
              borderRadius={"50%"}
            >
              <MdCall fontSize={"24px"} />
            </Box>
            <Box>
              <Text color={"gray"} fontSize={"14px"}>
                聯繫我們
              </Text>
              <Text>0800-888-888</Text>
            </Box>
          </Flex>

          <Flex
            gap={4}
            // border={"1px solid gray"}
            width={{ base: "220px", sm: "220px", md: "100%", lg: "100%" }}
            margin={{ sm: "auto", md: "0", lg: "0", base: "auto" }}
          >
            <Box
              border={"1px solid gray"}
              width="50px"
              height="50px"
              pt="6%"
              pl="6%"
              borderRadius={"50%"}
            >
              <RiQuestionnaireFill fontSize={"24px"} />
            </Box>
            <Box>
              <Text color={"gray"} fontSize={"14px"}>
                客服信箱
              </Text>
              <Text>help@fomcoffee.com</Text>
            </Box>
          </Flex>
          <Flex
            gap={4}
            // border={"1px solid gray"}
            width={{ base: "220px", sm: "220px", md: "100%", lg: "100%" }}
            margin={{ sm: "auto", md: "0", lg: "0", base: "auto" }}
          >
            <Box
              border={"1px solid gray"}
              width="50px"
              height="50px"
              pt="6%"
              pl="6%"
              borderRadius={"50%"}
            >
              <FiMail fontSize={"24px"} />
            </Box>
            <Box>
              <Text color={"gray"} fontSize={"14px"}>
                E-mail
              </Text>
              <Text>help@outfitstore.com</Text>
            </Box>
          </Flex>
        </Grid>

        <Box
          // border={"1px solid gray"}
          alignItems="center"
          mt={"30px"}
        >
          <Flex
            alignItems="center"
            gap={10}
            margin="auto"
            justifyContent={"center"}
          >
            <Box>
              <AiFillFacebook fontSize={"24px"} />
            </Box>
            <Box>
              <FaTwitter fontSize={"24px"} />
            </Box>
            <Box>
              <BsInstagram fontSize={"24px"} />
            </Box>
            <Box>
              <BsYoutube fontSize={"24px"} />
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Divider mt="50px" />

      <Box>
        <Flex
          flexDir={{ lg: "row", md: "row", sm: "row", base: "column" }}
          mt="20px"
          pb={"20px"}
          justifyContent={"center"}
        >
          <Box
            display="flex"
            flexDirection="column"
            // justifyContent="center"
            alignItems={"Center"}
          >
            <Text
              color={"gray"}
              fontSize={{ base: "12px", sm: "14px", md: "14", lg: "14px" }}
            >
              © 2023 FOMCoffee
            </Text>
            <Text
              color={"gray"}
              fontSize={{ base: "12px", sm: "14px", md: "14", lg: "14px" }}
            >
              Terms & Conditions - Privacy Policy
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
