import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const productId = searchParams.get('productId');
  const res = await fetch(process.env.NEXT_PUBLIC_API + `/service/product?productId=${productId}`)
  const r: any = await res.json()
  const data = {
    ...r,
    data: {
      ...(r.data?.[0] || {})
    }
  }
  return Response.json(data)
}