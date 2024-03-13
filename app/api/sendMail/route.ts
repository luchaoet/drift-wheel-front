export async function POST(req: Request) {
  const formData = await req.formData()
  const res = await fetch(process.env.NEXT_PUBLIC_API + '/mail/send', {
    method: 'post',
    body: formData
  })
  const data = await res.json()
  return Response.json(data)
}