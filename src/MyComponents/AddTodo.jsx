import React, { useState } from 'react';
// import React, { useState } from 'react';

export const AddTodo = (props) => {
    // const [title, setTitle] = useState
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = () => {
        
    }
    return (
        <div className='container my-3'>
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={title} onChange={(e)=>{setTitle(e.target)}} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success ">Add Todo</button>
        </form>
        </div>
    )
}
export default AddTodo

