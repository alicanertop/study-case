import styled from 'styled-components'

const Input = styled.input`
  width: calc(100% - 24px);
  max-height: 48px;
  font-size: 14px;
  line-height: 24px;
  font-family: Inter;
  letter-spacing: 0.15px;
  padding: 12px 0 12px 16px;
  border: 2px solid var(--gray200);

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  ::placeholder {
    color: var(--gray500);
  }
  :focus {
    outline: var(--gray200);
  }
`
export default Input
