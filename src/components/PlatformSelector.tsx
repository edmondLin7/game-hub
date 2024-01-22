import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import usePlatforms, { Platform } from '../hooks/usePlatforms';
import { BsChevronBarDown } from 'react-icons/bs'

interface Props {
    selectedPlatform: Platform | null;
    onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform}: Props) => {
  const { data, error } = usePlatforms();
  
  if (error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
            {selectedPlatform?.name || 'Platforms'}
        </MenuButton>
        <MenuList>
            {data?.results.map((platform) => <MenuItem onClick={() => onSelectPlatform(platform)} 
                key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  );
}

export default PlatformSelector