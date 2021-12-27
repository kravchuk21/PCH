import React from 'react';
import styles from "../../AuthPage.module.css";
import NextImg from "../../../../assets/img/next.png"
import AuthPerson from "../../../../assets/img/authPerson.png"
import ButtonBack from '../../../../components/ButtonBack';
import {Link, useNavigate} from 'react-router-dom';
import clsx from "classnames";
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginFormSchema} from '../../../../utils/validation';
import {useForm} from 'react-hook-form';
import {LoginDto} from "../../../../api/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {fetchSignIn} from '../../../../redux/slices/userSlice';

type IFormInputs = {
    email: string
    password: string
}

export default function Login() {
    const {register, handleSubmit, formState: {errors, isValid, isSubmitting}} = useForm<IFormInputs>({
        resolver: yupResolver(LoginFormSchema),
        mode: "onChange"
    });

    const errorMassage = useSelector((state: RootState) => state.user.errorMassage)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = async (dto: LoginDto) => {
        dispatch(fetchSignIn(dto));
        navigate("/")
    };

    return (
        <div className={styles.authPage}>
            <div className={styles.authPageHeader}>
                <ButtonBack text={"Профиль"}/>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.toggleForms}>
                    <Link className={styles.toggleButton} to={"/auth/register"}>Регистрация</Link>
                    <div className={clsx(styles.toggleButton, styles.active)}>Войти</div>
                </div>
                <div>
                    <span className={styles.label}>Email адрес</span>
                    <input{...register("email")}
                          className={clsx(styles.input, {[styles.error]: errors.email?.message})}
                          placeholder={"Введите ваш Email"}
                          type={"email"}
                    />
                    <p className={styles.error}>{errors.email?.message}</p>
                </div>
                <div>
                    <span className={styles.label}>Пароль</span>
                    <input{...register("password")}
                          className={clsx(styles.input, {[styles.error]: errors.password?.message})}
                          type={"password"}
                          placeholder={"Придумайте пароль"}
                    />
                    <p className={styles.error}>{errors.password?.message}</p>
                </div>
                {errorMassage && <p className={styles.errorMessage}>{errorMassage}</p>}
                <button disabled={!isValid || isSubmitting} type="submit" className={styles.button}>
                    <img src={NextImg} alt=""/>
                </button>
            </form>
            <div className={styles.info}>
                <img className={styles.image} src={AuthPerson} alt=""/>
                <span className={styles.text}>Войди в аккаунт, чтобы снова попробовать вкуснейшую еду от ПЧШ</span>
            </div>
        </div>
    );
};
