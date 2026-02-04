import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api.js';
import Logo from '../../assets/Logo 1.svg';
import { Button } from '../../components/Button/index.jsx';

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link,
} from './styles.js';

export function Login() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-email é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter no minimo 6 caracteres')
        .required('Digite uma senha válida'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    const toastId = toast.loading('Entrando na sua conta...',)
    setTimeout(() => {
      toast.dismiss(toastId)

    }, 3000)
    try {
      const response = await api.post('/sessions', {
        email: data.email,
        password: data.password,
      });

      const token = response.data.token
      localStorage.setItem('token', token)

      toast.success('Login realizado com sucesso !!', { id: toastId })
      setTimeout(() => {
        navigate('/')
      }, 2000)

    } catch (error) {
      const message = error?.response?.status === 401
        ? 'Email ou senha inválidos !'
        : 'Não foi possível entrar. Tente novamente mais tarde !';
      toast.error(message, { id: toastId })
    }

  }

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburguer" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, Seja bem-vindo ao <span> DevBurguer!</span>
          <br />
          Acesse com seu
          <span> Login e senha</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>E-mail</label>
            <input type="email" {...register('email')} />
            {/* usamos o Elvis Operator (?) no errors para evitar erro de propriedade indefinida */}
            <p>{errors?.email?.message} </p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message} </p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não Possui Conta ?<Link to={'/cadastro'}>Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
