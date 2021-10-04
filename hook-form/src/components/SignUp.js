import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import MaskCpf from './MaskCpf';


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

const SignUp = () => {
  
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'No máximo 15 caracteres')
            .required('Obrigatório'),
        date: Yup.string(),
        gender: Yup.string(),
        email: Yup.string()
            .email('Email inválido')
            .required('Obrigatório'),
        cpf: Yup.string()
            .max(14, 'CPF inválido')
            .required('Obrigatório'),
        password: Yup.string()
            .min(6, 'No minímo 6 caracteres')
            .required('Obrigatório'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Não corresponde')
            .required('Obrigatório'),
    })

    const useStyles = makeStyles(theme => ({
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

    const classes = useStyles();

    const { register, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(validate)
    });
    const onSubmit = values => alert(JSON.stringify(values, null, 2))
    
    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <h1 className={classes.title}>Cadastro</h1>
                <Controller
                    name="firstname"
                    control={control}
                    {...register("firstName")}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            required
                            size="small"
                            variant="outlined"
                            onChange={onChange} 
                            className={classes.field} 
                            value={value} 
                            label={"Nome"} 
                            error={errors.firstName}  
                            InputLabelProps={{ shrink: true }} 
                        />
                    )}
                />
                <Controller
                    name="date"
                    control={control}
                    {...register("date")}
                    render={({ field: { onChange, value } }) => (
                        <TextField 
                            size="small"
                            type="date"
                            variant="outlined"
                            onChange={onChange} 
                            value={value} 
                            className={classes.field} 
                            label={"Data de Nascimento"} 
                            error={errors.date} 
                            InputLabelProps={{ shrink: true }} 
                        />
                    )}
                />
                <Controller
                    name="gender"
                    control={control}
                    {...register("gender")}
                    render={({ field: { onChange, value } }) => (
                        <TextField 
                            select
                            size="small"
                            variant="outlined"
                            onChange={onChange} 
                            value={value} 
                            className={classes.field} 
                            label={"Gênero"} 
                            error={errors.gender} 
                            InputLabelProps={{ shrink: true }}
                        >
                            {genders.map((gender) => (
                                <MenuItem key={gender.value} value={gender.value}>
                                    {gender.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    {...register("email")}
                    render={({ field: { onChange, value } }) => (
                        <TextField 
                            required
                            size="small"
                            variant="outlined"
                            onChange={onChange} 
                            value={value} 
                            className={classes.field} 
                            label={"Email"}
                            error={errors.email}
                            InputLabelProps={{ shrink: true }} 
                        />
                    )}
                />
                <Controller
                    name="cpf"
                    control={control}
                    InputProps={{
                        inputComponent: MaskCpf,
                        inputProps: { mask: [/\d/,/\d/,/\d/, '.', /\d/,/\d/,/\d/, '.', /\d/,/\d/,/\d/, '-',/\d/,/\d/] },
                    }}
                    {...register("cpf")}
                    render={({ field: { onChange, value } }) => (
                        <TextField 
                            required
                            size="small"
                            variant="outlined"
                            onChange={onChange} 
                            value={value} 
                            className={classes.field} 
                            label={"CPF"}     
                            error={errors.cpf} 
                            InputLabelProps={{ shrink: true }}
                            
                        />
                    )}
                />
                <Controller
                    name="senha"
                    control={control}
                    {...register("password")}
                    render={({ field: { onChange, value } }) => (
                        <TextField 
                            required
                            size="small"
                            variant="outlined"
                            onChange={onChange} 
                            value={value} 
                            className={classes.field} 
                            label={"Senha"} 
                            type="password" 
                            error={errors.password} 
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />
                <Controller
                    name="confirmPassword"
                    control={control}
                    {...register("confirmPassword")}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                        required
                        size="small"
                        type="password"
                        variant="outlined"
                        onChange={onChange} 
                        value={value} 
                        className={classes.field} 
                        label={"Confirmar Senha"}
                        error={errors.confirmPassword}
                        InputLabelProps={{ shrink: true }} />
                    )}
                />
                <Button type="submit" color="primary" variant="contained" className={classes.btn}>Cadastrar</Button>
            </form>
        </div>
    )
}

export default SignUp;