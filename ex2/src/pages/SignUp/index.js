import './style.css';
import closeEye from '../../assets/close-eye.svg'
import openEye from '../../assets/open-eye.svg'
import mulher from '../../assets/woman-success.png'
import { useState, useRef } from 'react'
function SignUp() {

  const [erro, setErro] = useState('')
  const [sucess, setSucess] = useState('')
  const [form, setForm] = useState({
    nome: '',
    age: '',
    adress: '',
    password: '',
    active: false
  }
  )
  let activeInput = false
  const img = useRef(closeEye)
  const passwordInput = useRef('')
  function handleSubmit(event) {
    event.preventDefault();
    setErro('');
    if (!form.nome) {
      setErro('o nome é obrigatório')
      return;
    }
    if (form.age < 18) {
      setErro('você precisa ser maior de idade')
      return;
    }
    if (!form.adress) {
      setErro('precisamos do seu endereço')
      return;
    }
    if (form.password.length < 8) {
      setErro('a senha precisa ter pelo menos 8 caracteres')
      return;
    }
    form.active = true
  }

  function handleChangeForm(event) {
    const value = event.target.value
    setForm({ ...form, [event.target.name]: value })

  }
  function clearForm() {
    setForm({
      nome: '',
      age: '',
      password: '',
      active: false
    })
  }
  function tooggleEye(closeEye, openEye) {
    if (activeInput === false) {
      img.current.src = openEye
      passwordInput.current.type = 'text'
      return activeInput = true
    }
    if (activeInput === true) {
      img.current.src = closeEye
      passwordInput.current.type = 'password'
      return activeInput = false
    }
  }


  return (
    <div className='container'>

      <div className='container_left'>
        {form.active === true ? <img src={mulher} className='woman' /> :
          <div className='container_formulario'>
            <h1>Cadastre-se</h1>
            <form >
              <input
                type='text'
                placeholder='Digite seu nome'
                name='nome'
                value={form.nome}

                onChange={(event) => handleChangeForm(event)}
              />
              <input
                type='number'
                placeholder='Digite sua idade'
                value={form.age}
                name='age'
                onChange={(event) => handleChangeForm(event)}
              />
              <input
                type='text'
                placeholder='Digite seu endereço'
                name='adress'
                value={form.adress}
                onChange={(event) => handleChangeForm(event)}
              />
              <input
                type='password'
                placeholder='Sua senha'
                ref={passwordInput}
                name='password'
                value={form.password}
                onChange={(event) => handleChangeForm(event)}
              />
              <img src={closeEye} ref={img} onClick={() => tooggleEye(closeEye, openEye)} className='olhinho' />
              {erro && <span className='error'>{erro}</span>}
              {sucess && <span className='sucess'>{sucess}</span>}
              <div className='container_button'>
                <button
                  className='azul'

                  onClick={(event) => handleSubmit(event)}
                >CADASTRAR</button>

                <button
                  className='vermelho'
                  onClick={() => clearForm()}
                >CANCELAR</button>
              </div>
              <p>Já tem cadastro? <a href=''>Clique aqui!</a></p>
            </form>
          </div>

        }
      </div>
      <div className='container_right'></div>

    </div>
  );
}

export default SignUp;
