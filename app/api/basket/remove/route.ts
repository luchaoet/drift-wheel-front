import { removeCache } from '../cache'

export async function POST(req: Request) {
  const d = await req.json()
  const data = removeCache(d.id)
  return Response.json({
    errorCode: "__200OK",
    errorMsg: "成功",
    pager: null,
    success: true,
    data
  })
  // const d = await req.json()
  // const res = await fetch(process.env.NEXT_PUBLIC_API + '/service/basket/remove', {
  //   method: 'post',
  //   body: JSON.stringify(d),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  // })
  // const data = await res.json()
  // return Response.json(data)
}