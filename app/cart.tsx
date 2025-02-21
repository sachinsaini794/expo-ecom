import { Button, ButtonText } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { useCart } from '@/store/cartStore';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet } from 'react-native';

export default function CartScreen() {

  const items = useCart((state) => state.items)

  return (
    <FlatList 
    data={items}
    contentContainerClassName='gap-2 max-w-[960px] w-full mx-auto'
    keyExtractor={(item) => item.product.id.toString()}
    renderItem={({item}) => {
      return <HStack className='bg-white p-3'>
        <VStack space='sm'>
          <Text bold>{item.product.name}</Text>
          <Text>{item.product.price}</Text>
        </VStack>
        <Text className='ml-auto'>{item.quantity}</Text>
      </HStack>
    }}
    ListFooterComponent={()=> {
      return <Button>
        <ButtonText>Checkout</ButtonText>
      </Button>
    }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
