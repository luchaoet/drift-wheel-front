
import Document from '@/app/components/Document'

function Page({ params }: any) {
  return <Document tootip="Blog - " id={params.id} />
}
export default Page