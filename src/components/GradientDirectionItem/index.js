import {CustomButton, ButtonItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, onDirection, isActive} = props
  const {displayText, value} = details

  const onDirectionBtn = () => {
    onDirection(value)
  }

  return (
    <ButtonItem>
      <CustomButton onClick={onDirectionBtn} isActive={isActive}>
        {displayText}
      </CustomButton>
    </ButtonItem>
  )
}

export default GradientDirectionItem
