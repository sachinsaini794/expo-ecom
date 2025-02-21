import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import React from "react";

export default function LoginScreen() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [email, setEmail] = React.useState(""); // Added state for email
    const [password, setPassword] = React.useState(""); // Added state for password


    const handleState = () => {
        setShowPassword((showState) => {
            return !showState;
        });
    };
    return (
        <FormControl className="p-4 border rounded-lg max-w-[560px] border-outline-300 bg-white mx-auto w-[90%]">
            <VStack space="xl">
                <Heading className="text-typography-900 pt-2">Login</Heading>
                <VStack space="xs">
                    <Text className="text-typography-500">Email</Text>
                    <Input className="min-w-[250px]">
                        <InputField
                            type="text"
                            value={email}
                            onChangeText={setEmail} // Bind email state
                        />
                    </Input>
                </VStack>
                <VStack space="xs">
                    <Text className="text-typography-500">Password</Text>
                    <Input className="text-center">
                        <InputField
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChangeText={setPassword} // Bind password state
                        />
                        <InputSlot className="pr-3" onPress={handleState}>
                            <InputIcon
                                as={showPassword ? EyeIcon : EyeOffIcon}
                            />

                        </InputSlot>
                    </Input>
                </VStack>
                <Button
                    className="ml-auto"
                    onPress={() => {
                        setShowModal(false);
                    }}
                >
                    <ButtonText className="text-typography-0">Sign In</ButtonText>
                </Button>
            </VStack>
        </FormControl>
    );
}