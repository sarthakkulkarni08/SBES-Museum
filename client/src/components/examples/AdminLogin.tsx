import AdminLogin from '../AdminLogin'

export default function AdminLoginExample() {
  const handleLogin = (username: string, password: string) => {
    console.log('Login attempt with username:', username, 'password:', password)
  }
  
  return <AdminLogin onLogin={handleLogin} />
}
