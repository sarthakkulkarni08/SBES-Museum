import AdminForm from '../AdminForm'

export default function AdminFormExample() {
  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data)
  }
  
  return <AdminForm onSubmit={handleSubmit} />
}
