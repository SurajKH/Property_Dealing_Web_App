import Link from 'next/link';
import Image from 'next/image';
import {Box,Flex,Text,Avatar} from '@chakra-ui/react';
import {FaBed,FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import { DefaultContext } from 'react-icons';

import defaultImage from '../assets/images/house.jpeg';

const Property = ({property:{coverPhoto,price,rentFrequency,rooms,title,baths,area,agency,isVerified,externalID}}) => (
    //we basically extract the title over here
    //now we need to display the housepics in card format.

    //now we have considered another box component to render the details from props.

    <Link href={`/property/${externalID}`} passHref>
    <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start">
        <Box>
            <Image src={coverPhoto ? coverPhoto.url : defaultImage } width={400} height={200} alt="house" />
        </Box>
        
        <Box w="full">
            <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
               <Flex alignItems="center">
                 <Box paddingRight="3" color="green.400" >{isVerified && <GoVerified/>}</Box>
                 <Text fontWeight="bold" fontSize="lg" >RS {price}{rentFrequency && `/${rentFrequency}`}</Text>
               </Flex>

               <Box>
               <Avatar size="sm" src={agency?.logo?.url}></Avatar>
               </Box>
            </Flex>

            <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400" >
                {rooms} <FaBed /> | <FaBath /> | {millify(area)} sqft <BsGridFill />
            </Flex>

            <Text fontSize="md">
                {title.length > 30 ? `${title.substring(0,30)}`:title}
            </Text>
        </Box>


    </Flex>
    </Link>
)
export default Property;