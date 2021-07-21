import { SearchIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Link, Stack, Text } from "@chakra-ui/react";
import { CgMenuGridR } from 'react-icons/cg'
import { FaMicrophone } from 'react-icons/fa'
import { BsCardText } from 'react-icons/bs'


export default function Home() {
  return (
    <Flex
      width="100vw" 
      height="100vh" 
      alignItems="center" 
      justifyContent="center"
    >

      <Box
        pos="absolute"
        top="5"
        right="6"
        display="flex"
        ml="5"
        gap="5"
      >
        <Link 
          fontSize="14px"
          mr="5"
          fontFamily="arial"
          color="gray.200" 
        >
          Gmail
        </Link>
          
        <Link
          fontSize="14px"
          mr="5"
          fontFamily="arial"
          color="gray.200"
        >
          Imagens
        </Link>
        <Icon as={CgMenuGridR} fontSize="23" mr="5" cursor="pointer"/>
        <Avatar 
          name="Lucas Ezidro" 
          src="https://lh3.googleusercontent.com/ogw/ADea4I473psOt2AKoyGfPR3j-BAp-M-jF5kqIIrJp8cD-Q=s32-c-mo"
          size="20"
          position="relative"
          bottom="3px"
          
          />
      </Box>

      <Box
        alignItems="center"
        pos="absolute"
        top="50px"
        fontSize="100"
      >
        <Text 
          fontWeight="500"
          color="gray.400"
        >
          Google
        </Text>
      </Box>

      <Stack spacing="4">
        <InputGroup 
          alignItems="center"
          justifyContent="center"
          >
          <InputLeftElement 
            pointerEvents="none"
            children={<SearchIcon mt="2.5" fontSize="16" opacity="0.8"/>}
            />
            <Input 
              type="text"
              alignItems="center"   
              w="600px"
              p="6"
              borderRadius="20"
              variant="filled"        
              bg="gray.800"
              transition="all 1s"
              boxShadow="2px 2px 5px rgba(0, 0, 0, 0.6)"
              _hover={{bg: "gray.700"}}

              />
            <InputRightElement 
              children={<Icon as={BsCardText} />} 
              color="gray.300" 
              mr="16"
              mt="1"
              cursor="pointer"
              fontSize="20"
              _hover={{
                color: "gray.500"
              }}
              
              />
            <InputRightElement 
              children={<Icon as={FaMicrophone}/>} 
              color="gray.300"
              mr="5"
              mt="1"
              cursor="pointer"
              fontSize="20"
              _hover={{
                color: "gray.500"
              }}
              
              />
          </InputGroup>
            
          <Box display="flex" align="center" justifyContent="center">
            <Button color="gray.100" bg="gray.700" mr="5" _hover={{bg:"gray.600"}} transition="0.5s" mt="5">Pesquisa Google</Button>
            <Button color="gray.100" bg="gray.700" ml="5" _hover={{bg:"gray.600"}} transition="0.5s" mt="5">Estou com sorte</Button>
          </Box>
          <Text 
            align="center" 
            justifyContent="center"
            pos="relative"
            top="5"
            color="gray.300"
            
            >
              Disponibilizado pelo Google em: <Link color="purple.400">English</Link>
              
              </Text>
        </Stack>

        <Flex 
          pos="absolute"
          bottom="0"
          as="footer"
          w="100%"
          flexDir="column"
          >
            <Box
              bg="gray.700"
              w="100%"
              h="10"
              mb="0"
              borderBottom="1px solid rgba(0, 0, 0, 0.4)"
            >
              <Text ml="10" color="gray.300" opacity="0.8" mt="2">Brasil</Text>
            </Box>

            <Stack>

              <Box
                bg="gray.700"
                w="100%"
                h="10"
                mb="0"
                
              >
                <Link ml="10" pos="relative" top="2" color="gray.300">Sobre</Link>
                <Link ml="10" pos="relative" top="2" color="gray.300">Publicidade</Link>
                <Link ml="10" pos="relative" top="2" color="gray.300">Negócios</Link>
                <Link ml="10" pos="relative" top="2" color="gray.300">Como functiona a Pesquisa</Link>
              </Box>

              <Box
                pos="absolute"
                right="5"
              >
                <Link ml="10" mt="4" color="gray.300">Privacidade</Link>
                <Link ml="10" mt="4" color="gray.300">Termos</Link>
                <Link ml="10" mt="4" color="gray.300">Configuração</Link>
               
              </Box>

            </Stack>

        </Flex>

    </Flex>
  )
}
