import React from 'react';
import './App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ReactInputMask from 'react-input-mask';
import { makeStyles } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

const validationSchema = Yup.object({
  nome: Yup
    .string('Insira seu Nome')
    .required('Obrigatório'),
  date: Yup
    .string('Insira sua data de nascimento'),
  gender: Yup
    .string('Insira seu Gênero'),
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
  confirmPassword: Yup
    .string('Confirme sua senha')
    .oneOf([Yup.ref('password'), null], 'Não corresponde')
    .required('Obrigatório'),
});

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '25rem',
  },
  title: {
    fontFamily: 'Helvetica',
  },
  field: {
    marginTop: theme.spacing(2),
  },
  btn: {
    marginTop: theme.spacing(2),
  },
}));

const genders = [
  {
    value: 'fem',
    label: 'mulher',
  },
  {
    value: 'masc',
    label: 'homem',
  },
  {
    value: 'naobinarie',
    label: 'não binárie',
  },
  {
    value: 'trans',
    label: 'transexual',
  },
  {
    value: 'travesti',
    label: 'travesti',
  },
  {
    value: 'outro',
    label: 'outro',
  },
];

function App() {
  const formik = useFormik({
    initialValues: {
      nome: '',
      date: '',
      gender: '',
      email: '',
      cpf: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <h2 className={classes.title}>Cadastro de Usuário</h2>
        <TextField
          required
          id="nome"
          name="nome"
          label="Nome Completo"
          variant="outlined"
          size="small"
          className={classes.field}
          InputLabelProps={{ shrink: true }}
          value={formik.values.nome}
          onChange={formik.handleChange}
          error={formik.touched.nome && Boolean(formik.errors.nome)}
          helperText={formik.touched.nome && formik.errors.nome}
        />
        <TextField
          id="date"
          name="date"
          label="Data de Nascimento"
          variant="outlined"
          type="date"
          size="small"
          className={classes.field}
          InputLabelProps={{ shrink: true }}
          value={formik.values.date}
          onChange={formik.handleChange}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
        />
        <TextField
          id="gender"
          select
          name="gender"
          label="Gênero"
          variant="outlined"
          size="small"
          className={classes.field}
          InputLabelProps={{ shrink: true }}
          value={formik.values.gender}
          onChange={formik.handleChange}
        >
          {genders.map((gender) => (
            <MenuItem key={gender.value} value={gender.value}>
              {gender.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          size="small"
          className={classes.field}
          InputLabelProps={{ shrink: true }}
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
          required 
          label="CPF"
          id="cpf"
          name="cpf" 
          variant="outlined"
          size="small"
          className={classes.field}
          InputLabelProps={{ shrink: true }}
          error={formik.touched.cpf && Boolean(formik.errors.cpf)}
          helperText={formik.touched.cpf && formik.errors.cpf} 
          />}
        </ReactInputMask>
        <TextField
          required
          id="password"
          name="password"
          label="Senha"
          type="password"
          variant="outlined"
          size="small"
          className={classes.field}
          InputLabelProps={{ shrink: true }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          required
          id="confirmPassword"
          name="confirmPassword"
          label="Confirme a senha"
          type="password"
          variant="outlined"
          size="small"
          className={classes.field}
          InputLabelProps={{ shrink: true }}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />
        <Button 
          color="primary" 
          variant="contained" 
          fullWidth 
          type="submit"
          className={classes.btn}
        >
          Cadastrar
        </Button>
      </form>
    </div>
  );
}

export default App;
