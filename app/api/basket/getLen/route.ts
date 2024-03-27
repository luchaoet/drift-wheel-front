import { getLen } from '../cache'

export async function GET() {
  const data = getLen();
  return Response.json({
    data: data,
    errorCode: "__200OK",
    errorMsg: "成功",
    pager: null,
    success: true
  })
}