import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='center'>
      <h1>Página não encontrada</h1>
      <p>Não foi possível encontrar a página solicitada</p>
      <Link href="/" className='primaryButton'>Voltar a página inicial</Link>
    </div>
  )
}