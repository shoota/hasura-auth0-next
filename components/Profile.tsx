import React from "react"
import Link from "next/link"

import { ProfilesQuery } from "../graphql/api"

type Props = {
  data?: ProfilesQuery
}

export const Profiles: React.VFC<Props> = ({ data }) => (
  <ul>
    {data?.profiles.map(({ id, name }) => (
      <li key={id}>
        <p>
          id: {id} / name: <Link href={`profiles/${id}`}>{name}</Link>
        </p>
      </li>
    ))}
  </ul>
)
