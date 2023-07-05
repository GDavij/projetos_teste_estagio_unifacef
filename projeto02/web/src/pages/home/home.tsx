import { useState } from 'react';
import Switch from '../../components/Switch';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Text,
} from '@chakra-ui/react';
export default function Home() {
  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Text fontSize={'2xl'}>Home</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </>
  );
}
