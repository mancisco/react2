
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login'
import Alert from './components/alert/Alert';
import { useState } from 'react';
function App() {

  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('')

  const validateLogin = (user) => {
    const validEmail = "pancho@gmail.com"
    const validPassword = "1234567"
    console.log('user', user);

    if (user.email == validEmail && user.password == validPassword) {
      setAlertMessage('Login success')
      setAlertType('success')

    } else {
      setAlertMessage('Login failed')
      setAlertType('danger')
    }
  }
  return (

    <div className="container">
      <Login onSubmit={validateLogin} />
      <Alert message={alertMessage} type={alertType} />
    </div>

  );
}

export default App;
