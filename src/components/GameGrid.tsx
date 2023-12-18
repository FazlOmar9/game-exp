import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkel from "./GameCardSkel";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
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
            <GameCardContainer>
              <GameCardSkel key={i} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
