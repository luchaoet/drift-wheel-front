

import Document from '@/app/components/Document'

function Page({ params }: any) {
  return <Document id={params.id} />
}
export default Page