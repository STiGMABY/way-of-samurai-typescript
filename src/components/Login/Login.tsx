import React from "react";
import {Field, reduxForm} from "redux-form";

export const LoginForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Enter name'} name={'login'} component={'input'}/>
        </div>
        <div>
            <Field placeholder={'Enter password'} name={'password'} component={'input'}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login page</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}



