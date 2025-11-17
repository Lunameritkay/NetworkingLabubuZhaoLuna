import '../App.css'
import { Input, Button } from 'antd';
import React, { useState } from 'react';

function Comment () {
  const [comments, setComments] = useState( [{name: '2025/11/01', content: 'bbb'}, {name: '2025/11/03', content: 'ddd'}])
  const [value, setValue] = useState('')
  
  const handleClick = () => {
    setComments([...comments, {name: new Date().getFullYear() + '/' + (new Date().getMonth() + 1 )+ '/' + new Date().getDate(), content: value}])
    setValue('')
  }
  const handleChange = (e) => {
    setValue(e.target.value);
  }
   return (
    <>
      <Input value={value} onChange={handleChange}/>
      <Button style={{marginTop: '20px'}} onClick={handleClick} color="purple" variant="solid">Submit</Button>
    <div>{comments.map(comment => 
      (
      <><p>user: {comment.name}</p>
      <p>comment: {comment.content}</p></>)

    )}</div>
    </>
  )
}

export default Comment
