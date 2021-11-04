import { GetServerSideProps } from "next"
import { QueryClient } from "react-query"
import { GraphQLClient } from "graphql-request"
import { Users } from "../../components/Users"
import { dehydrate, DehydratedState } from "react-query/hydration"

import { UsersDocument, UsersQuery, useUsersQuery } from "../../graphql/api"

type Props = {
  dehydratedState: DehydratedState
}

// TODO Move
const gqlClient = new GraphQLClient("http://localhost:8080/v1/graphql")

const UsersPage: React.VFC<Props> = () => {
  const { data } = useUsersQuery(gqlClient)
  return <Users data={data} />
}

export default UsersPage

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(useUsersQuery.getKey(), () =>
    gqlClient.request(UsersDocument)
  )

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  }
}
