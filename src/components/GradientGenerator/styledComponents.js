import styled from 'styled-components'

export const Background = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  margin-top: 0px;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ededed;
`

export const Choose = styled.p`
  color: #ededed;
  font-size: 20px;
`

export const ButtonContainer = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 0px;
  padding-left: 0px;
  margin: 30px 0px;
`
export const ColorName = styled.p`
  font-size: 18px;
  color: #ededed;
`
export const ColorBox = styled.input`
  height: 40px;
  width: 80px;
  border: none;
  padding: 0px 0px;
  background-color: transparent;
`
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
`
export const ColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 20px;
`
export const Generate = styled.button`
  background-color: #00c9b7;
  border-width: 0px;
  border-radius: 4px;
  height: 28px;
  width: 90px;
  margin-top: 20px;
  font-weight: 600;
`
