import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ReactInputMask from 'react-input-mask';

const validationSchema = Yup.object({
  email: Yup
    .string('Insira seu email')
    .email('Email inválido')
    .required('Obrigatório'),
  cpf: Yup
    .string('Insira seu CPF')
    .max(11, 'CPF inválido')
    .required('Obrigatório'),
  password: Yup
    .string('Insira sua senha')
    .min(8, 'No minímo 8 caracteres')
    .required('Obrigatório'),
});

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      cpf: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [cpf, setCpf] = useState();
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <ReactInputMask
          mask="999.999.999-99"
          value={cpf}
          disabled={false}
          maskChar=" "
          onChange={e => setCpf(e.target.value)}
        >
          {() => <TextField fullWidth label="CPF" />}
        </ReactInputMask>
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Senha"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Entrar
        </Button>
      </form>
    </div>
  );
}

export default App;
