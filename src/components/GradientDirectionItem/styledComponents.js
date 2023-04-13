import styled from 'styled-components'

export const CustomButton = styled.button`
  background-color: #ffffff79;
  opacity: ${props => (props.isActive ? '1' : '0.5')};
  border-width: 0px;
  border-radius: 6px;
  height: 33px;
  width: 100px;
`

export const ButtonItem = styled.li`
  height: 100%;
  width: 100%;
  margin-right: 7px;
`
