import * as yup from 'yup';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUser } from '../../hooks/UserContext';

import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link,
} from './styles';

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup.object({
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    password: yup
      .string()
      .min(6, 'Senha deve ter no mínimo 6 caracteres')
      .required('Senha é obrigatória'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { data: userData, status } = await api.post(
        '/sessions',
        {
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      putUserData(userData);

      if (status === 200 || status === 201) {
        setTimeout(() => {
          if (userData?.admin) {
            navigate('/admin/pedidos');
          } else {
            navigate('/');
          }
        }, 2000);
        toast.success('Login realizado com sucesso! 👌');
      } else if (status === 400) {
        toast.error('Email ou Senha Incorretos 🤯');
      } else {
        throw new Error();
      }
    } catch (_error) {
      toast.error('😭 Falha no Sistema! Tente novamente');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt='Logo' />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev e Grill!</span>
          <br />
          Acesse com seu <span>login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type='email' {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type='password' {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type='submit'> entrar </Button>
        </Form>
        <p>
          Não possui uma conta? <Link to='/cadastro'>Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
