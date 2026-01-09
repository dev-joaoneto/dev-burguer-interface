import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import {
  ButtonGroup,
  EmptyCartRow,
  EmptyCartTd,
  ProductImage,
  TotalPrice,
  TrashImage,
} from './styled';
import TrashIcon from '../../assets/trash.svg';
export function CartItems() {
  const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} alt={product.name} />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.currencyValue}</Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button type='button' onClick={() => decreaseProduct(product.id)}>
                    -
                  </button>
                  {product.quantity}
                  <button type='button' onClick={() => increaseProduct(product.id)}>
                    +
                  </button>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                <TotalPrice>{formatPrice(product.price * product.quantity)}</TotalPrice>
              </Table.Td>
              <Table.Td>
                <TrashImage
                  src={TrashIcon}
                  alt='Remover produto'
                  onClick={() => deleteProduct(product.id)}
                />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <EmptyCartRow>
            <EmptyCartTd colSpan={5}>Seu carrinho está vazio</EmptyCartTd>
          </EmptyCartRow>
        )}
      </Table.Body>
    </Table.Root>
  );
}
