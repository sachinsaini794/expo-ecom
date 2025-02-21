import { Link, router, Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Icon } from "@/components/ui/icon";
import { ShoppingCart, User } from "lucide-react-native";
import { Pressable } from "@/components/ui/pressable";
import { useCart } from "@/store/cartStore";
import { Text } from "@/components/ui/text";


export default function RootLayout () {

    const cartItemNum = useCart((state) => state.items.length)


    return <GluestackUIProvider mode="light">
        <Stack screenOptions={{
            headerRight: () => (
            cartItemNum > 0 &&
            // <Link href={'/cart'} asChild>
                <Pressable onPress={() => router.push('/cart')} className="flex-row gap-2">
                    <Icon as={ShoppingCart} />
                    <Text>{cartItemNum}</Text>
                </Pressable>
            // </Link>
            ),
            headerLeft : () => (
                <Pressable onPress={() => router.push('/login')} className="flex-row gap-2">
                    <Icon as={User} />
                </Pressable>
            )
            
            }}>
            <Stack.Screen name="index" options={{title: 'Shop'}} />
            <Stack.Screen name="product/[id]" options={{title: 'Product'}} />
        </Stack>
    </GluestackUIProvider>;
}