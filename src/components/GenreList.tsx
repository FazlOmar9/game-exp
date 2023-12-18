import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

const GenreList = ({ onSelectGenre }: {onSelectGenre: (genre: Genre) => void}) => {
  const { data, error, isLoading } = useGenres();
  if (error)
    return null;
  if (isLoading)
    return <Spinner />;
  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} py='8px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={genre.image_background} />
            <Button variant='link' fontSize='lg' onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
