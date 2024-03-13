import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const categoryId = searchParams.get('categoryId');
  const res = await fetch(process.env.NEXT_PUBLIC_API + `/product/page?queryKey=category_id&queryValue=${categoryId}&pageSize=50&pageIndex=1`)
  const data: any = await res.json()
  return Response.json(data)
}