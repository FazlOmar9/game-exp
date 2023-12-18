import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkel from "./GameCardSkel";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

const GameGrid = ({ selectedGenre }: {selectedGenre: Genre | null}) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = Array(15).fill(0);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ lg: 3, sm: 1, md: 2, xl: 5 }}
        padding='10px'
        spacing={10}
      >
        {isLoading &&
          skeletons.map((_, i) => (
            <GameCardContainer key={i}>
              <GameCardSkel />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
