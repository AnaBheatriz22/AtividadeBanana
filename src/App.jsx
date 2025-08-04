import './App.css'
import HelloWorld from '../components/HelloWorld'

function App() {

 const nome ="Bia"

 const newNome = nome.toUpperCase() 

 const url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUzCLUKs4-08o-Px-7scxmL99O6BTFMzlg1w&s'

 function Soma(a, b){

  return a + b


 }

  return(
    <div className='App'>
      <HelloWorld/>
      <h1>Olá pessoas</h1>
      <p>Me chame de {newNome}.</p>
      <p>Soma: {Soma(17,1)}</p>
      <img src={url} alt='Alquimia das almas'></img>
    </div>
  )

}

export default App
