import { getCache } from '../cache'

export async function GET() {
  const data = getCache() || [];
  return Response.json({
    data,
    errorCode: "__200OK",
    errorMsg: "成功",
    pager: null,
    success: true
  })

  // try {
  //   const res = await fetch(process.env.NEXT_PUBLIC_API + '/service/product/page?queryKey=in_basket&pageSize=20&pageIndex=1', {
  //     cache: 'no-cache',
  //   })
  //   const data = await res.json()
  //   return Response.json(data)
  // } catch (error) {
  //   return Response.json({ data: [] })
  // }
}