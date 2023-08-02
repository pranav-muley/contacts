// import React from 'react'

import Card from "./Card";

const Contact = (users) => {
    console.log(users);
  return (
    <Card users = {users.users}/>
  )
}

export default Contact