import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Input,
    FormControl,
    Box,
    VStack,
    useToast,
} from '@chakra-ui/react';
import { createUser } from '../api/api';

const SignUpForm = ({ isOpen, onClose, onUserAdded }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const newUser = { firstName, lastName, email, password };
            await createUser(newUser);
            toast({
                title: "User created.",
                description: "New user has been successfully added.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            onUserAdded(true);
            onClose();
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            toast({
                title: "Error.",
                description: "An error occurred while creating the user.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                bg="rgba(0, 0, 0, 0.6)"
                backdropFilter="blur(10px)"
                display="flex"
                alignItems="center"
                justifyContent="center"
            />
            <ModalContent
                maxW={{ base: '95%', sm: '80%', md: '600px', lg: '700px' }} 
                width="auto"
                borderRadius="lg"
                boxShadow="lg"
                bg="white"
                p={4}
                mx="auto"
                mt="150"  
                mb="auto" 
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <ModalHeader
                    textAlign="center"
                    fontSize="2xl"
                    fontWeight="bold"
                    borderBottom="1px solid #ddd"
                >
                    Sign Up
                </ModalHeader>
                <ModalBody py={6}>
                    <VStack spacing={4} align="center" width="full">
                        <FormControl isRequired>
                            <Input
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                variant="outline"
                                size="lg"
                                borderColor="gray.400"
                                _placeholder={{ color: 'gray.600' }}
                                borderRadius="md"
                                boxShadow="sm"
                                height="50px"
                                fontSize="lg"
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                variant="outline"
                                size="lg"
                                borderColor="gray.400"
                                _placeholder={{ color: 'gray.600' }}
                                borderRadius="md"
                                boxShadow="sm"
                                height="50px"
                                fontSize="lg"
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                variant="outline"
                                size="lg"
                                borderColor="gray.400"
                                _placeholder={{ color: 'gray.600' }}
                                borderRadius="md"
                                boxShadow="sm"
                                height="50px"
                                fontSize="lg"
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                variant="outline"
                                size="lg"
                                borderColor="gray.400"
                                _placeholder={{ color: 'gray.600' }}
                                borderRadius="md"
                                boxShadow="sm"
                                height="50px"
                                fontSize="lg"
                            />
                        </FormControl>
                    </VStack>
                </ModalBody>
                <ModalFooter borderTop="1px solid #ddd">
                    <Box display="flex" justifyContent="center" width="full">
                        <Button
                            colorScheme="blue"
                            mr={4}
                            onClick={handleSignUp}
                            size="lg"
                            px={8}
                            py={4}
                            borderRadius="md"
                            fontSize="lg"
                            backgroundColor="#007bff"
                            color="#ffffff"
                            border="none"
                            _hover={{ opacity: 0.9 }}
                            transition="background-color 0.3s"
                        >
                            Sign Up
                        </Button>
                        <Button
                            variant="outline"
                            onClick={onClose}
                            size="lg"
                            px={8}
                            py={4}
                            borderRadius="md"
                            fontSize="lg"
                            borderColor="#ccc"
                            color="#007bff"
                            _hover={{ borderColor: '#007bff', color: '#007bff', opacity: 0.8 }}
                            transition="color 0.3s, border-color 0.3s"
                        >
                            Cancel
                        </Button>
                    </Box>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default SignUpForm;
