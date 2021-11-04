import { GetServerSideProps } from "next"
import { Users } from "../../components/Users"
import { UsersDocument, UsersQuery } from "../../graphql/api"
import { client } from "../../graphql/apolloClient"

type Props = {
  data?: UsersQuery
}

const UsersPage: React.VFC<Props> = ({ data }) => {
  return <Users data={data} />
}

export default UsersPage

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data } = await client
    .query({ query: UsersDocument })
    .then((data) => data)
  return {
    props: { data },
  }
}
