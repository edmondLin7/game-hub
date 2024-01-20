import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/images-url'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  //borderRadius={{ sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' overflow='hidden'
//width='300px' borderRadius={10} overflow='hidden'
  return (
    <Card >
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <HStack justifyContent='space-between' marginBottom={3}>
              <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard