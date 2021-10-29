import { Profiles } from "../../components/Profile"
import { useProfilesQuery } from "../../graphql/api"

const Page = () => {
  const { data } = useProfilesQuery()
  return <Profiles data={data} />
}

export default Page

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const { data } = await useProfilesQuery()
//   return {
//     props: { data },
//   }
// }
