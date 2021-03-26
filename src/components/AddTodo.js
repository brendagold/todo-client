import React, {useState} from 'react';
import api from "../services/api"

const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const {handleCreate} = props

    const handleSubmit = async evt => {
        let response = [];
        evt.preventDefault();
        if (title === "") {
            alert("Please enter a todo item")
        } else {
            response = await api.post('/addtodo', {title})
        }
        

        if (response.status == 201) {
            handleCreate(response.data)
            setTitle("")
        }

        
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" className="form-control rounded-0" placeholder="write your todo here..." value={title} onChange={evt => setTitle(evt.target.value)} />
            <button type="submit" className="form-control rounded-0 btn-secondary">Add Todo</button>
        </form>
     );
}
 
export default AddTodo;