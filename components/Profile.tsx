import React from "react"

import { ProfilesQuery, useProfilesQuery } from "../graphql/api"

export const Profiles: React.VFC = () => {
  const { data } = useProfilesQuery()
  return (
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
}
