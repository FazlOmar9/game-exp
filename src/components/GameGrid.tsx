import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkel from "./GameCardSkel";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = Array(15).fill(0);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ lg: 3, sm: 1, md: 2, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading && skeletons.map((_, i) => <GameCardSkel key={i} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
