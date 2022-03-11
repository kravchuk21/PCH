import * as yup from 'yup';

export const SupportFormSchema = yup.object().shape({
        text: yup.string().min(2, 'Недостаточно символов').required('Заполните поле'),
});
export const LoginFormSchema = yup.object().shape({
        email: yup.string().email('Неверная почта').required('Почта обязательная'),
        password: yup.string().min(6, 'Пароль должен быть не менее 6 символов').required('Пароль обязательный'),
});

export const RegisterFormSchema = yup
        .object()
        .shape({
                fullName: yup.string().required('Имя и фамилия обязательны'),
        })
        .concat(LoginFormSchema);
