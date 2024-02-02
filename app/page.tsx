import Home from './home'
function Page(props: any) {
  console.log('props', props)
  return (
    <Home />
  )
}

Page.getServerSideProps = async (context) => {
  const res = await fetch('https://dummyjson.com/posts')
  const json = await res.json()
  return { props: { json } }
}

export default Page