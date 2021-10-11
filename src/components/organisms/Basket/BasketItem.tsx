import React from 'react'
import { AiFillShopping } from 'react-icons/ai'
import styled from 'styled-components'

const StyledDiv = styled.div`
  overflow: hidden;

  .container {
    display: flex;
    width: 280px;
    margin: 22px;
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
      height: 32px;
      width: 32px;
      font-size: 24px;
      text-align: center;
      color: var(--blue300);
    }
    .actions-count {
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
  showDivider?: boolean
}

function BasketItem({ showDivider }: IProps) {
  return (
    <StyledDiv>
      <div className="container">
        <div className="item-info">
          <span className="item-info-name">Example Product</span>
          <span className="item-info-price">₺14,99</span>
        </div>
        <div className="actions">
          <span className="actions-minus">-</span>
          <span className="actions-count">1</span>
          <span className="actions-plus">+</span>
        </div>
      </div>

      {showDivider && <div className="divider" />}
    </StyledDiv>
  )
}

export default BasketItem
