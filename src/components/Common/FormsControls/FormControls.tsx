import React from "react";
import {WrappedFieldProps} from "redux-form";
import s from './FormControls.module.css'

//export const Textarea: React.FC<WrappedFieldProps>

export const FormControl: React.FC<WrappedFieldProps> = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error
    return(
        <div className={s.formControl + ' ' + ( hasError? s.error : '') }>
            <div>
                {children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

//Урок 77 рефакторинг 50+ мин
export const TextArea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    return <FormControl input={input} meta={meta}><textarea {...input}{...props}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    return <FormControl input={input} meta={meta}><input {...input}{...props}/></FormControl>
}


// export const TextArea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
//     //debugger
//     const hasError = meta.touched && meta.error
//
//     return (
//         <div className={s.formControl + ' ' + ( hasError? s.error : '') }>
//             <div>
//                 <textarea {...input}{...props}/>
//             </div>
//             { hasError && <span>{meta.error}</span> }
//         </div>
//     )
// }

// export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
//     //debugger
//     const hasError = meta.touched && meta.error
//
//     return (
//         <div className={s.formControl + ' ' + ( hasError? s.error : '') }>
//             <div>
//                 <input {...input}{...props}/>
//             </div>
//             { hasError && <span>{meta.error}</span> }
//         </div>
//     )
// }