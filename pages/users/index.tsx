import { GetServerSideProps } from "next"
import { QueryClient } from "react-query"
import { Users } from "../../components/Users"
import { dehydrate, DehydratedState } from "react-query/hydration"

import { UsersDocument, useUsersQuery } from "../../graphql/api"
import { graphqlClient } from "../../graphql/client"

type Props = {
  dehydratedState: DehydratedState
}

const UsersPage: React.VFC<Props> = () => {
  const { data } = useUsersQuery(graphqlClient)
  return <Users data={data} />
}

export default UsersPage

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(useUsersQuery.getKey(), () =>
    graphqlClient.request(UsersDocument)
  )

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  }
}
