export async function GET() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API + '/service/product/page?queryKey=in_basket&pageSize=50&pageIndex=1')
    const data = await res.json()
    return Response.json(data)
  } catch (error) {
    return Response.json({ data: [] })
  }
}