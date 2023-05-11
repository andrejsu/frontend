import React from "react"
import axios from 'axios'

const Test = (props) => {
  const post = () => {
    axios.post('http://localhost:3000/api/v1/tests', {
      title: 'test',
      body: 'test body'
    })
    .then(function (response) {
      console.log(response)
    })
  }

  return (
    <div>
      <div onClick={() => post()} className="text-3xl font-bold underline text-red-400">
        Post
      </div>
      {props.books.map((book) =>
        <div key={book.key}>
          <h2>{book.title}</h2>
          <h2>{book.body}</h2>
        </div>
      )}
    </div>
  )
}

export default Test

