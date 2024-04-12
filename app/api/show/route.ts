export async function GET(req: Request) {
  const res = await fetch(process.env.NEXT_PUBLIC_API + '/service/customer/show')
  const data = await res.json()
  return Response.json(data)
}