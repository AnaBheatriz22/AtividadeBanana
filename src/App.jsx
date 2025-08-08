import './App.css'
import HelloWorld from '../components/HelloWorld'
import Morango from '../components/morango'
import Frase from '../components/Frase'
import Seu from '../components/Seu'
import Pai from '../components/Pai'
import Filho from '../components/Filho'

function App() {

 const nome ="ana"

 const newFrase = nome.toUpperCase() 

 const url= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbanana-kong.br.uptodown.com%2Fandroid&psig=AOvVaw0HD46KLUhvs_WJKAZsGeq6&ust=1754700308532000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOCs6pX--Y4DFQAAAAAdAAAAABAE"

const url=""

  return(
    <div className='App'>
          <HelloWorld/>
          <Morango/>
            <img src={url} alt='Morango'/>
              <Frase/>
                  <img src=''></img>
                <Frase/>
                <Seu/>

                <Seu/>
              <Pai/>

            <Pai/>
            <Filho/>

          <Filho/>
          <p>Me chame de {newFrase}.</p>
    </div>
  )
}

export default App
