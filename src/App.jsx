import './App.css'
import HelloWorld from '../components/HelloWorld'
import Morango from '../components/morango'
import Frase from '../components/Frase'
import Seu from '../components/Seu'
import Pai from '../components/Pai'
import Filho from '../components/Filho'

function App() {

 const nome ="ana"

 

 const url= 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbanana-kong.br.uptodown.com%2Fandroid&psig=AOvVaw0HD46KLUhvs_WJKAZsGeq6&ust=1754700308532000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOCs6pX--Y4DFQAAAAAdAAAAABAE'

  return(
    <div className='App'>
          <HelloWorld/>
          <Morango/>
            <img src={url} alt='ImagemBananaKong'/>
                      <Frase/>
                             <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fmfgpcm.wordpress.com%2F0024_img_0679%2F&psig=AOvVaw3SJC0eRRifv72Xt9Ks3wE0&ust=1755041737226000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNCw3JT2g48DFQAAAAAdAAAAABAL'
                             alt='ImgBananaFilho'></img>
                      <Frase/>
                       <Seu/>
                            <img src='https://media.istockphoto.com/id/138001792/pt/foto/platanos-maduros.jpg?s=612x612&w=0&k=20&c=x_Ke3wfw7N_PWPYBUd0mXZDZwTHCu8Pfq8k-Y23CUSU='
                            alt='ImgBananaFrita'
                            ></img>
                       <Seu/>
                 <Pai/>
                      <img src='https://www.rbsdirect.com.br/imagesrc/25315379.jpg?w=700'
                      alt='ImgBananasDePijamas'></img>
                 <Pai/>
            <Filho/>
                  <img src='https://pbs.twimg.com/media/Eaz1_kNXgAAnRNx.jpg'
                  alt='ImgJoaoBanana'></img>
          <Filho/>
          
    </div>
  )
}

export default App
