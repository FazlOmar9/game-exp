import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkel = () => {
  return (
    <>
      <Card width={"250px"}  borderRadius='10px' overflow='hidden'>
        <Skeleton height="200px"/>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkel;
