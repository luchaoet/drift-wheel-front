import { type NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const queryValue = searchParams.get('queryValue') || '';
  const pageIndex = searchParams.get('pageIndex') || 1;
  const pageSize = searchParams.get('pageSize') || 20;
  const res = await fetch(process.env.NEXT_PUBLIC_API + `/service/customer/show/page?queryValue=${queryValue}&pageIndex=${pageIndex}&pageSize=${pageSize}`)
  const data = await res.json()
  return Response.json(data)
}