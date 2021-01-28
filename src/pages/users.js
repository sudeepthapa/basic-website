import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  {
    id: 1,
    name: "ALex",
    age: 22,
    gender:'Male'
  },
  {
    id: 2,
    name: "Maria",
    age: 24,
    gender:'Female'
  },
  {
    id: 3,
    name: "Gleb",
    age: 52,
    gender:'Male'
  },
];

const Users = () => {
  return (
    <div>
      {users.map(user => {
        return <Link key={user.id} to={`/users/${user.id}`}><h4 style={{margin:20}}> {user.name}  </h4></Link>
      })}
    </div>
  )
}

export default Users;