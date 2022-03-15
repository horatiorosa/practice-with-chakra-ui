import{
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

const Details = () => {
  const colSpan = useBreakpointValue({
    base: 2,
    md: 1
  });

  return(
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start">
        <VStack spacing={3} alignItems="flex-start">
          <Heading size="2xl">Your details</Heading>
          <Text>
            If you already have an account. click here to log in
          </Text>
        </VStack>
        <SimpleGrid
          columns={2}
          columnGap={3}
          rowGap={6}
          w="full">
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="Jiro"/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="The Dog"/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input placeholder="Where do you live?"/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input placeholder="Mega City One"/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Select>
                <option value="mars">Mars Union</option>
                <option value="belt">The Belt</option>
                <option value="venus">Venus</option>
                <option value="earth">Earth</option>
                <option value="usa">Union of Sirius</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Checkbox defaultChecked>Ship to billing address</Checkbox>
          </GridItem>
        <GridItem colSpan={2}>
            <Button
              variant="primary"
              size="lg"
              w="full">Place Order
            </Button>
          </GridItem>
        </SimpleGrid>
    </VStack>
  );
};

export default Details;
