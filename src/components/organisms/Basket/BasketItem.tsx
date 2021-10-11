import styled from 'styled-components'
import { IBasketItem } from '../../../redux/basket'
import { IItem } from '../../../types'

const StyledDiv = styled.div`
  overflow: hidden;
  background-color: white;

  .container {
    display: flex;
    width: 236px;
    margin: 22px 22px 0 22px;
    padding: 0 0 22px 0;
    border-bottom: 1px solid var(--white200);
  }

  .item-info {
    flex: 3;
    display: flex;
    flex-direction: column;
    span {
      padding: 0;
      margin: 2px 0;
    }
    span.item-info-price {
      color: var(--blue300);
    }
  }

  .actions {
    flex: 1;
    margin-left: auto;
    display: flex;
    align-items: center;
    span {
      margin: 0;
      width: 32px;
      height: 32px;
      cursor: pointer;
      font-size: 24px;
      text-align: center;
      color: var(--blue300);
    }

    .actions-count {
      cursor: unset;
      padding: 0;
      width: 32px;
      height: 32px;
      color: white;
      background-color: var(--blue300);
    }
  }

  .divider {
    width: 100%;
    padding: 2px;
    border-bottom: 2px solid black;
  }
`

type IProps = {
  onRemove: (item: IItem) => void
  onAdd: (item: IItem) => void
  item: IBasketItem
}

function BasketItem({ onRemove, onAdd, item }: IProps) {
  return (
    <StyledDiv>
      <div className="container">
        <div className="item-info">
          <span className="item-info-name">{item.name}</span>
          <span className="item-info-price">₺{item.totalPrice}</span>
        </div>
        <div className="actions">
          <span className="actions-minus" onClick={() => onRemove(item)}>
            -
          </span>
          <span className="actions-count">{item.count}</span>
          <span className="actions-plus" onClick={() => onAdd(item)}>
            +
          </span>
        </div>
      </div>
    </StyledDiv>
  )
}

export default BasketItem
