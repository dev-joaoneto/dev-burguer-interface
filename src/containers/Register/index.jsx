import * as yup from 'yup';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { Container, Form, InputContainer, LeftContainer, RightContainer, Title, Link } from './styles';

export function Register() {
  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    password: yup
      .string()
      .min(6, 'Senha deve ter no mínimo 6 caracteres')
      .required('Senha é obrigatória'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
      .required('Confirmação de senha é obrigatória'),
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
      const { status } = await api.post('/users ', {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        validateStatus: () => true,
      },
    );
    if (status === 200 || status === 201) {
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      toast.success('Cadastro realizado com sucesso!');
    } else if (status === 400) {
      toast.error('Email já cadastrado! Faça o login para continuar');
    } else {
      throw new Error();
    }
   
    } catch (_error) {
      toast.error ('😭 Falha no Sistema! Tente novamente');
    }
    };
    

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt='Logo' />
      </LeftContainer>
      <RightContainer>
        <Title>Criar conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type='text' {...register('name')} />
            <p>{errors?.name?.message}</p>
          </InputContainer>

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

          <InputContainer>
            <label>Confirmar Senha</label>
            <input type='password' {...register('confirmPassword')} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type='submit'> Confirmar Cadastro </Button>
        </Form>
        <p>
          Já possui uma conta? <Link to='/login'>Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
