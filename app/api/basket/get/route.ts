export async function GET() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API + '/service/product/page?queryKey=in_basket&pageSize=20&pageIndex=1', {
      cache: 'no-cache',
    })
    const data = await res.json()
    // console.log('res', data)
    return Response.json(data)
  } catch (error) {
    return Response.json({ data: [] })
  }
}