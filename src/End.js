export default function End(props) {
  const {num, setState} = props

  setTimeout(() => {
    setState((prev) => ({...prev, num: 0, end: false}))
  }, 1000)

  return(
    <div>
      Tadaa!!!
    </div>
  )
}