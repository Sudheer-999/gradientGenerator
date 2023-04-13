import {Component} from 'react'
import {
  Background,
  Choose,
  ButtonContainer,
  ColorContainer,
  ColorName,
  Left,
  Generate,
  ColorBox,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onGenerate = () => {
    const {activeDirection, firstColor, secondColor} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${firstColor}, ${secondColor}`,
    })
  }

  onDirection = value => {
    this.setState({activeDirection: value})
  }

  onColorOne = event => {
    this.setState({firstColor: event.target.value})
  }

  onColorTwo = event => {
    this.setState({secondColor: event.target.value})
  }

  render() {
    const {activeDirection, firstColor, secondColor, gradientValue} = this.state
    console.log(activeDirection)

    return (
      <Background gradientValue={gradientValue} data-testid="gradientGenerator">
        <h1>Generate a CSS Color Gradient</h1>
        <Choose>Choose Direction</Choose>
        <ButtonContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              details={eachItem}
              key={eachItem.directionId}
              onDirection={this.onDirection}
              isActive={activeDirection === eachItem.value}
            />
          ))}
        </ButtonContainer>
        <Choose>Pick the Colors</Choose>
        <ColorContainer>
          <Left onChange={this.onColorOne}>
            <ColorName>{firstColor}</ColorName>
            <ColorBox type="color" value={firstColor} />
          </Left>
          <Left onChange={this.onColorTwo}>
            <ColorName>{secondColor}</ColorName>
            <ColorBox type="color" value={secondColor} />
          </Left>
        </ColorContainer>
        <Generate onClick={this.onGenerate}>Generate</Generate>
      </Background>
    )
  }
}

export default GradientGenerator
