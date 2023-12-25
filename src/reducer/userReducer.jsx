export const initialUser={name:[]};

export const reducer=(state, action)=>{
    console.log(state, action);
    switch(action.type){
        case "ADD_USER":{
            const newUser= {
                id: action.id,
                name: action.name
            }
            const allUser= [...state.name, newUser]
            return {name: allUser};
        }
        case "DELETE_USER":{
            const restUserAfterDelete= state.name.filter(usr => usr.id != action.id);
            return {name: restUserAfterDelete};
        }
        default:{
            return state;
        }
    }
}