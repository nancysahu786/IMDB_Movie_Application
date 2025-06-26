import { Navigate } from "react-router";
import { useAuth } from "./AuthContext"


const AuthGuard = ({children}) =>{
    const {currentUser} = useAuth();

    if(!currentUser){
        return <Navigate to='/login'/>
    }else{
        return children;
    }
}

export default AuthGuard