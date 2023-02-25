import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack w="full" h="full" spacing={10} p={10} alignItems="flex-start">
      <VStack spacing={3} direction="row">
        <Heading size="2xl">Your details</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          explicabo deserunt ea
        </Text>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="Juan" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Cruz" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input placeholder="Blvd. Broken Dreams 21" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input placeholder="San francisco" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Select>
                <option value="usa">United States of America</option>
                <option value="uae">United Arab Emerates</option>
                <option value="nmk">North Macedonia</option>
                <option value="de">Germany</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Checkbox defaultChecked>Ship to billing</Checkbox>
          </GridItem>
          <GridItem colSpan={2}>
            <Button variant="primary" size="lg" w="full">
              Place Order
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default Details;
