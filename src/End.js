export default function End(props) {
  const {num, setState, phrase} = props

  setTimeout(() => {
    setState((prev) => ({...prev, num: 0, end: false}))
  }, 3000)

  return(
    <div className='end'>
      {phrase}
    </div>
  )
}