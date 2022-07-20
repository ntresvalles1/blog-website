const Reducer = (state, action) => {
    switch(action.type){ //type is in Actions.js
        case "SIGNIN_START":
            return{
                user: null,
                isFetching:true, 
                error: false 
            };

        case "SIGNIN_SUCCESS":
            return{
                user: action.payload, //whatever user info is 
                isFetching:false,     //stops fetching        
                error: false 
            }; 
            
        case "SIGNIN_FAILURE":
            return{
                user: null,
                isFetching:false,  //stops fetching
                error: true 
            };
        case "SIGNOUT":
            return{
                user: null,                    
                isFetching:false,  //stops fetching
                error: false, 
            };
        default:
            return state; //default-- nothing changes, will return state
    }
}

export default Reducer;