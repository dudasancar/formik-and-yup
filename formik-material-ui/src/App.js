import React from 'react';
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
    .max(14, 'CPF inválido')
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
          value={formik.values.cpf}
          disabled={false}
          maskChar=" "
          onChange={formik.handleChange}
        >
          {() => <TextField 
          fullWidth 
          label="CPF"
          id="cpf"
          name="cpf" 
          error={formik.touched.cpf && Boolean(formik.errors.cpf)}
          helperText={formik.touched.cpf && formik.errors.cpf} 
          />}
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
