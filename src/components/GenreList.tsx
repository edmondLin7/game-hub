import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';
import useData from '../hooks/useData';
import { HStack, List, ListItem, Image, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/images-url';

const GenreList = () => {
  const {data} = useGenres();

  return (
    <List>
        {data.map((genre) => ( 
        <ListItem key={genre.id} paddingY='5px'>
            <HStack>
               <Image 
                    boxSize="32px"
                    borderRadius={8}
                    src={getCroppedImageUrl(genre.image_background)}
               />
               <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
        </ListItem>
        ))}
    </List>
  )
}

export default GenreList