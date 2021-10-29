import { GetServerSideProps } from "next"
import { Profiles } from "../../components/Profile"
import { ProfilesDocument, ProfilesQuery } from "../../graphql/api"
import { client } from "../../graphql/apolloClient"

type Props = {
  data?: ProfilesQuery
}

const ProfilesPage: React.VFC<Props> = ({ data }) => {
  return <Profiles data={data} />
}

export default ProfilesPage

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data } = await client
    .query({ query: ProfilesDocument })
    .then((data) => data)
  return {
    props: { data },
  }
}
