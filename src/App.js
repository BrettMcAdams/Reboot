import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectUser, login, logout } from './features/userSlice'
import Imessage from './Imessage'
import Login from './Login'
import { auth } from './firebase'

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        )
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch])

  return (
    // BEM naming convention
    <div className="app">{user ? <Imessage /> : <Login />}
    </div>
  );
}

export default App;
