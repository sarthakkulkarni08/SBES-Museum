import VisitorForm from '../VisitorForm'

export default function VisitorFormExample() {
  const handleSubmit = (name: string, className: string) => {
    console.log('Visitor submitted:', { name, className })
  }
  
  return <VisitorForm onSubmit={handleSubmit} />
}
