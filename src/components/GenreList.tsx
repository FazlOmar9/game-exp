import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} py='8px'>
          <HStack>
            <Image boxSize={'32px'} borderRadius={8} src={genre.image_background} />
            <Text fontSize={'lg'}>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;