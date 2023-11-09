import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { color } from "framer-motion";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {

  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    mac: FaApple,
    apple: FaApple,
    web: BsGlobe,
    iphone: MdPhoneIphone 
  }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug] } color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
