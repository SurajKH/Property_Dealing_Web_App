// import Link from 'next/link';
// import Image from 'next/image';
// import {Flex,Box,Text,Button} from '@chakra-ui/react';
// import { baseUrl,fetchApi } from '../utils/fetchApi';

// const Banner = ({purpose,title1,title2,desc1,desc2,buttonText,linkName,imageUrl}) =>
// (
//    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10" >
//    <Image src={imageUrl} width={500} height={250} alt="banner" />
//    <Box p="5">
//     <Text color="gray.5" fontSize="sm" fontWeight="medium">{purpose}</Text>
//     <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
//     <Text fontSize="xl" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br/>{desc2}</Text>
//     <Button fontSize="xl" bg="blue.300" color="black">
//       <Link href={linkName}>{buttonText}</Link>
//     </Button>
//    </Box>
//    </Flex>
// )

// export default function Home({propertiesForSale,propertiesForRent}) {
//   console.log(propertiesForRent);
//   console.log(propertiesForSale);
//   return (
//     <Box>
//       {/* <h1>hello world</h1> */}
//       {/* Banner Component along with the variety of props */}
//       <Banner  
//         purpose="For Sale"
//         title1="Rental Homes for"
//         title2="Everyone"
//         desc1="Explore Apartements,Villas,Homes"
//         desc2="and more"
//         buttonText="Explore Renting"
//         linkName="/search?purpose=for-rent"
//       //   { /* we need to define configuration for these images as well */ }
//         imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
//       />
// <Flex flexWrap="wrap">
//  {/* //we might consider the given items in the next line over here */}
//  {/* fetch the properties and map over them */}

// </Flex>
// <Banner  
//         purpose="Buy Home"
//         title1="Find new Homes for"
//         title2="Dream Homes"
//         desc1="Explore Apartements,Villas,Homes"
//         desc2="and more"
//         buttonText="Explore Home"
//         linkName="/search?purpose=for-sale"
//         imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"

//       />

// <Flex flexWrap="wrap">
//  {/* //we might consider the given items in the next line */}
//  {/* fetch the properties and map over them one by one */}
// </Flex>
//     </Box>
//   )
// }

// // export async function getStaticProps()
// // {
// //   //some these properties are required and some of them are optional as well
// //   const propertiesForSale=await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
// //   const propertiesForRent=await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

// //   return {
// //     props:{
// //       propertiesForSale:propertiesForSale?.hits,
// //       propertiesForRent:propertiesForRent?.hits
// //     }
// //   }
// // }
// // export default Home;
// export async function getStaticProps() {
//   const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
//   const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

//   return {
//     props: {
//       propertiesForSale: propertyForSale?.hits,
//       propertiesForRent: propertyForRent?.hits,
//     },
//   };
// }


import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';

export const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300} />
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
      <Button fontSize='xl' bg="blue.300" color="white">
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>
);


const Home = ({ propertiesForSale, propertiesForRent }) => (
  <Box>
    <Banner
      purpose='RENT A HOME'
      title1='Rental Homes for'
      title2='Everyone'
      desc1=' Explore from Apartments, builder floors, villas'
      desc2='and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
    />
    <Flex flexWrap='wrap'>
      {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
    <Banner
      purpose='BUY A HOME'
      title1=' Find, Buy & Own Your'
      title2='Dream Home'
      desc1=' Explore from Apartments, land, builder floors,'
      desc2=' villas and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
    />
    <Flex flexWrap='wrap'>
      {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
  </Box>
);

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;