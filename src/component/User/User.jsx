import { useReducer, useRef } from 'react';
import { initialUser, reducer } from '../../reducer/userReducer';

const User = () => {
    const nameRef= useRef();
    const [user, dispatch]= useReducer(reducer, initialUser);

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({type: "ADD_USER", name: nameRef.current.value, id: user.name.length+1});
        nameRef.current.value='';
        console.log(user);
    }
    const handleRemove=(users)=>{
        dispatch({type: 'DELETE_USER', id: users});
    }

    return (
        <div>
            <h1>This is User</h1>
            <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" placeholder='Add User'/>
            </form>
            <p>{user.name.map(users => <li>{users.name} <button onClick={()=>handleRemove(users.id)}>x</button></li>)}</p>
        </div>
    );
};

export default User;