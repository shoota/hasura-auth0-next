import React from "react"
import Link from "next/link"

import { UsersQuery } from "../graphql/api"

type Props = {
  data?: UsersQuery
}

export const Users: React.VFC<Props> = ({ data }) => (
  <ul>
    {data?.users.map(({ id, name }) => (
      <li key={id}>
        <p>
          id: {id} / name: <Link href={`profiles/${id}`}>{name}</Link>
        </p>
      </li>
    ))}
  </ul>
)
