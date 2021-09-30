import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';
import MaskCpf from './MaskCpf';


const SignUp = () => {
  
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'No máximo 15 caracteres')
            .required('Obrigatório'),
        lastName: Yup.string()
            .max(20, 'No máximo 20 caracteres')
            .required('Obrigatório'),
        email: Yup.string()
            .email('Email inválido')
            .required('Obrigatório'),
        cpf: Yup.string()
            .max(11, 'CPF inválido')
            .required('Obrigatório'),
        password: Yup.string()
            .min(6, 'No minímo 6 caracteres')
            .required('Obrigatório'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Não corresponde')
            .required('Obrigatório'),
    })
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                cpf: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2))
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">Cadastro</h1>
                    <Form>
                        <TextField label="Nome" name="firstName" type="text" />
                        <TextField label="Sobrenome" name="lastName" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <MaskCpf mask="999.999.999-99" label="CPF" name="cpf" />
                        <TextField label="Senha" name="password" type="password" />
                        <TextField label="Confirme a senha" name="confirmPassword" type="password" />
                        <button className="btn btn-dark mt-3" type="submit">Cadastrar</button>
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Cancelar</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default SignUp;