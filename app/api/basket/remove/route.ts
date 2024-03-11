export async function POST(req: Request) {
  const d = await req.json()
  const res = await fetch(process.env.NEXT_PUBLIC_API + '/basket/remove', {
    method: 'post',
    body: JSON.stringify(d),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const data = await res.json()
  return Response.json(data)
}