import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({score}: Props) => {
  const colorScheme = score > 75 ? 'green' : score > 50 ? 'yellow' : ''
  return (
    <Badge fontSize={14} paddingX={2} borderRadius={4} colorScheme={colorScheme}>{score}</Badge>
  )
}

export default CriticScore