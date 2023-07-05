import { Box, Flex } from '@chakra-ui/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Input,
  Button,
  Switch,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
  EditoraStates,
  EditoraStatus,
  TEditora,
} from '../../models/data/editora';
import { RxPencil1, RxTrash } from 'react-icons/rx';
import { EditEditoraModal } from './components/EditEditoraModal';

export default function Editora() {
  const [editoras, setEditoras] = useState<TEditora[]>([]);
  const [editoraSelected, setEditoraSelected] = useState<TEditora | null>(null);
  const [openEditEditoraModal, setOpenEditEditoraModal] = useState(false);
  async function fetchEditoras() {
    //Editoras Mock;
    setEditoras([
      {
        id: 0,
        name: 'ABC',
        state: EditoraStates.SP,
        status: EditoraStatus.Ativa,
      },
      {
        id: 1,
        name: 'CBA',
        state: EditoraStates.MG,
        status: EditoraStatus.Inativa,
      },
      {
        id: 2,
        name: 'ACB',
        state: EditoraStates.SC,
        status: EditoraStatus.Inativa,
      },
      {
        id: 3,
        name: 'BCA',
        state: EditoraStates.MT,
        status: EditoraStatus.Ativa,
      },
    ]);
  }
  useEffect(() => {
    fetchEditoras();
  }, []);
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        paddingX="4"
        mt={4}
      >
        <Flex>
          <Text fontSize={'2xl'} mr={'2'}>
            /
          </Text>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                <Text fontSize={'2xl'}>Editora</Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>

        <Button size={'md'} bg={'purple.600'} color={'white'}>
          Cadastrar
        </Button>
      </Flex>

      <Flex gap={'2'} alignItems={'end'} px={'4'}>
        <Flex flexDirection={'column'}>
          <Text>Nome</Text>
          <Input placeholder="Digite algo.." size={'md'} />
        </Flex>

        <Flex flexDirection={'column'} justifyContent={'start'}>
          <Text>Status</Text>
          <Switch size={'lg'} />
        </Flex>

        <Flex flexDirection={'column'}>
          <Button size={'md'} bg={'blueviolet'} color={'white'}>
            Pesquisar
          </Button>
        </Flex>
      </Flex>

      <Flex justifyContent={'center'}>
        <TableContainer w={'95%'}>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>
                  <Flex justifyContent={'center'}>Nome</Flex>
                </Th>
                <Th>
                  <Flex justifyContent={'center'}>Estado</Flex>
                </Th>
                <Th>
                  <Flex justifyContent={'center'}>Status</Flex>
                </Th>
                <Th>
                  <Flex justifyContent={'center'}>Ações</Flex>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {editoras.map((editiora) => (
                <Tr key={editiora.id}>
                  <Td>
                    <Flex justifyContent={'center'}>{editiora.name}</Flex>
                  </Td>
                  <Td>
                    <Flex justifyContent={'center'}>{editiora.state}</Flex>
                  </Td>
                  <Td>
                    <Flex justifyContent={'center'}>{editiora.status}</Flex>
                  </Td>
                  <Td>
                    <Flex gap={4} justifyContent={'center'}>
                      <Button
                        bg="blueviolet"
                        color="white"
                        onClick={() => {
                          setEditoraSelected(editiora);
                          setOpenEditEditoraModal(true);
                        }}
                      >
                        <RxPencil1 />
                      </Button>
                      <Button bg={'red.600'} color="white">
                        <RxTrash />
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <EditEditoraModal
        isOpen={openEditEditoraModal}
        onClose={() => setOpenEditEditoraModal(false)}
        editoraSelected={editoraSelected}
      />
    </>
  );
}
