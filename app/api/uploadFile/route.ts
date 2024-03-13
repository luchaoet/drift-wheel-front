export async function POST(req: any) {
  const formData = await req.formData();
  const file = formData.get('file')

  return Response.json({ file })
}