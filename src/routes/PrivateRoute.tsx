import { Navigate } from 'react-router-dom';

export default function RequireAuth ({ isLogged, tipo, children }: any){
  
  if (!isLogged) {
    return <Navigate to="/login" />;
  }
  // if(tipo!=='admin'){
  //   console.log(tipo)
  //   return <Navigate to="/noadmin" />;
  // }
  return children;
};