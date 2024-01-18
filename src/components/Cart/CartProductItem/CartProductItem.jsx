import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteProductFromCart, getCart } from 'redux/cart/operations';
import { formatPrice } from 'utils/formatPrice';
import { cuttedTitle } from 'utils/cuttedTitle';
import { useMedia } from 'hooks/useMedia';

import Sprite from 'images/sprite.svg';

import {
  Wrapper,
  InfoProductWrapper,
  ItemWrapper,
  ProductImage,
  ProductDescriptionWrapper,
  ProductTitle,
  ItemCharacteristicWrapper,
  QuantityWrapper,
  Icon,
  Price,
  ProductDeleteBtn,
  DeleteIcon,
  Notification,
  AvailableQuantityWrapper,
  PriceWrapper,
} from './CartProductItem.styled';

export const CartProductItem = ({
  item,
  decreaseProductQuantity,
  increaseProductQuantity,
  availableQuantity,
  isLoading,
  initialLoad,
}) => {
  const { isMobileScreen } = useMedia();
  const dispatch = useDispatch();
  const location = useLocation();

  const deleteProduct = async skuId => {
    await dispatch(deleteProductFromCart(skuId));
    await dispatch(getCart());
  };

  const isProductQuantityAvailable = availableQuantity > 0;
  const isOneProductAvalable = availableQuantity === 1;
  const isMaxAvailableQunatity = availableQuantity === item.quantity;

  console.log('isMaxAvailableQunatity:', isMaxAvailableQunatity);
  console.log('isOneProductAvalable:', isOneProductAvalable);

  return (
    <Wrapper>
      <InfoProductWrapper>
        {isMobileScreen && (
          <ProductDeleteBtn
            type="button"
            onClick={() => deleteProduct(item.sku.id)}
          >
            <DeleteIcon>
              <use href={`${Sprite}#icon-cross`} />
            </DeleteIcon>
          </ProductDeleteBtn>
        )}
        <ItemWrapper>
          <Link to={`/catalog/${item.productId}`} state={{ from: location }}>
            <ProductImage
              src={item.photoUrl}
              alt={cuttedTitle(item.productTitle)}
              loading="lazy"
            />
          </Link>
          <ProductDescriptionWrapper>
            <Link to={`/catalog/${item.productId}`} state={{ from: location }}>
              {isMobileScreen ? (
                <ProductTitle>{cuttedTitle(item.productTitle, 8)}</ProductTitle>
              ) : (
                <ProductTitle>
                  {cuttedTitle(item.productTitle, 15)}
                </ProductTitle>
              )}
            </Link>
            {item.sku.characteristics && (
              <ItemCharacteristicWrapper>
                <p>{item.sku.characteristics[1].name}</p>
                <p>{item.sku.characteristics[0].name}</p>
              </ItemCharacteristicWrapper>
            )}
          </ProductDescriptionWrapper>
        </ItemWrapper>
      </InfoProductWrapper>
      {!isLoading && !initialLoad && !availableQuantity ? (
        <Notification color="red" fontSize="24px">
          Наразі товар відсутній
        </Notification>
      ) : null}
      {isProductQuantityAvailable && (
        <AvailableQuantityWrapper>
          <QuantityWrapper>
            <span onClick={() => decreaseProductQuantity(item.productId)}>
              <Icon>
                <use href={`${Sprite}#icon-minus`} />
              </Icon>
            </span>
            {item.quantity}
            <span onClick={() => increaseProductQuantity(item.productId)}>
              <Icon>
                <use href={`${Sprite}#icon-plus`} />
              </Icon>
            </span>
          </QuantityWrapper>
          {isMaxAvailableQunatity || isOneProductAvalable ? (
            <Notification
              $paddingTop="6px"
              color="#4C4B4B"
              fontSize="12px"
              mobFont
            >
              Доступна кількість: {availableQuantity}
            </Notification>
          ) : null}
        </AvailableQuantityWrapper>
      )}
      {isProductQuantityAvailable && (
        <PriceWrapper>
          <Price>
            {formatPrice(item.amount)} {item.currencyCode}
          </Price>
        </PriceWrapper>
      )}
      {!isMobileScreen && (
        <ProductDeleteBtn
          type="button"
          onClick={() => deleteProduct(item.sku.id)}
        >
          <DeleteIcon>
            <use href={`${Sprite}#icon-cross`} />
          </DeleteIcon>
        </ProductDeleteBtn>
      )}
    </Wrapper>
  );
};
