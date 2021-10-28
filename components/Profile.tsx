import React from "react"

import { ProfilesQuery } from "../graphql/api"

type Props = {
  data: ProfilesQuery
}

export const Profiles: React.FC<Props> = ({ data }) => (
  <div>
    {data.profiles.map(({ id, name }) => (
      <span>
        id: {id} / name: {name}
      </span>
    ))}
  </div>
)
