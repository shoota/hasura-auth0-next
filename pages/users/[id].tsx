import { GetServerSideProps } from "next"

type Props = {
  id: string
}
const ProfilePage: React.VFC<Props> = ({ id }) => {
  return <p>this is profile id: {id}</p>
}

export default ProfilePage

export const getServerSideProps: GetServerSideProps<{}, { id: string }> =
  async (context) => {
    return {
      props: { id: context.params?.id },
    }
  }
