export async function GET() {
  const res = await fetch(process.env.NEXT_PUBLIC_API + '/product/page?queryKey=in_basket&pageSize=999&pageIndex=1')
  const data = await res.json()
  return Response.json(data)
}