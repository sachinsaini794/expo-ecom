import { Box } from "@/components/ui/box"
import { Button, ButtonText } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Image } from "@/components/ui/image"
import { Text } from "@/components/ui/text"
import { VStack } from "@/components/ui/vstack"
import { Link } from "expo-router"
import { Pressable } from "@/components/ui/pressable"
import { Product } from "@/types/Product";




export default function ProductListItem({ product }: { product: Product }) {
  return <Link href={`product/${product.id}`} asChild>
    <Pressable className="flex-1">
    <Card className="p-5 rounded-lg flex-1">
      <Image
        source={{
          uri: product.image,
        }}
        className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
        alt={`${product.name} image`}
        resizeMode='contain'
      />
      <Text className="text-sm font-normal mb-2 text-typography-700">
        {product.name}
      </Text>
        <Heading size="md" className="mb-4">
          ${product.price}
        </Heading>
      <Box className="flex-col sm:flex-row">
        <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>
      </Box>
    </Card>
    </Pressable>
  </Link>
}