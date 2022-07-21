
import{Form,Button,InputGroup,} from 'react-bootstrap'
import  '../App.css';
import {useState} from 'react'
function SearchBar({onSubmit}){
    const [searchTerm,setsearchTerm]=useState('')
    const submitHandler= (e) =>{
        e.preventDefault()
        onSubmit(searchTerm)
    }
 return(
    <Form onSubmit={submitHandler}>
    <InputGroup className="mb-3">
        <Form.Control type='text' value={searchTerm} onChange={e=>setsearchTerm(e.target.value)}/>
        <Button  className="btnn" type="submit" > Search</Button> 
    </InputGroup>
    </Form>
 )
}
export default SearchBar