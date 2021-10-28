import { Profiles } from "../../components/Profile"
import { ProfilesQuery } from "../../graphql/api"

type Props = {
  data?: ProfilesQuery
}

const Page = ({ data }: Props) => <Profiles />

export default Page

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const { data } = await useProfilesQuery()
//   return {
//     props: { data },
//   }
// }
