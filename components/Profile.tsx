import React from "react"

import { ProfilesQuery, useProfilesQuery } from "../graphql/api"

type Props = {
  data?: ProfilesQuery
}

export const Profiles: React.VFC<Props> = ({ data }) => (
  <ul>
    {data?.profiles.map(({ id, name }) => (
      <li key={id}>
        <p>
          id: {id} / name: {name}
        </p>
      </li>
    ))}
  </ul>
)
