import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getdata, loginFunction } from "../redux/authReducer/action";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  let { isAuth, userData, afterLoginUser } = useSelector(
    (state) => state.AuthReducer
  );

  useEffect(() => {
    dispatch(getdata);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = userData.filter((el) => {
      return el.email === email && el.password === password;
    });

    if (temp.length === 0) {
      toast({
        title: `Invalid Credintials !!!`,
        status: "error",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
    } else {
      toast({
        title: `Login Successfull`,
        status: "success",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
      let obj = {
        email,
        password,
        name: temp[0].firstName,
      };
      dispatch(loginFunction(obj));
    }
  };
  console.log(isAuth, afterLoginUser);
  useEffect(() => {
    dispatch(getdata);
  }, []);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      backgroundColor={"purple.200"}
    >
      <Stack
        spacing={8}
        width={"40%"}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        borderRadius={"xl"}
        backgroundColor={"pink.100"}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} color={"red.400"}>
            會員登入
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>密碼</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>記住我</Checkbox>
                <Link color={"blue.400"}>忘記密碼?</Link>
              </Stack>
              <Button
                onClick={handleSubmit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                登入
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
