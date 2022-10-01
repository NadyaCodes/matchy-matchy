export default function Switch(props) {
  const { leftElement, rightElement, selected, onClick } = props

  let switchClass = 'switch-toggle'

  if (selected === leftElement) {
    switchClass += ' switchLeft'
  }

  if (selected === rightElement) {
    switchClass += ' switchRight'
  }

  return (
    <div className='switch'>
      <span>{leftElement}</span>
        <div className='switch-container' onClick={onClick}>
        <div className={switchClass}></div>
        </div>
      <span>{rightElement}</span>
    </div>
  )
}