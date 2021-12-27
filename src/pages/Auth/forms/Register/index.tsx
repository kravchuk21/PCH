import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {RegisterFormSchema} from "../../../../utils/validation";
import styles from "../../AuthPage.module.css";
import ButtonBack from "../../../../components/ButtonBack";
import AuthPerson from "../../../../assets/img/authPerson.png";
import NextImg from "../../../../assets/img/next.png";
import {Link, useNavigate} from "react-router-dom";
import clsx from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {CreateUserDto} from "../../../../api/types";
import {fetchSignUp} from "../../../../redux/slices/userSlice";
import {RootState} from "../../../../redux/store";

interface IFormInputs {
    fullName: string
    email: string
    password: string
}

export default function Register() {
    const {register, handleSubmit, formState: {errors, isValid, isSubmitting}} = useForm<IFormInputs>({
        resolver: yupResolver(RegisterFormSchema),
        mode: "onChange"
    });

    const errorMassage = useSelector((state: RootState) => state.user.errorMassage)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const onSubmit = async (dto: CreateUserDto) => {
        dispatch(fetchSignUp(dto));
        navigate("/auth/login")
    };


    return (
        <div className={styles.authPage}>
            <div className={styles.authPageHeader}>
                <ButtonBack text={"Профиль"}/>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.toggleForms}>
                    <div className={clsx(styles.toggleButton, styles.active)}>Регистрация</div>
                    <Link className={styles.toggleButton} to={"/auth/login"}>Войти</Link>
                </div>
                <div>
                    <span className={styles.label}>Полное имя</span>
                    <input{...register("fullName")}
                          className={clsx(styles.input, {[styles.error]: errors.fullName?.message})}
                          placeholder={"Введите ваше имя"}
                    />
                    <p className={styles.error}>{errors.fullName?.message}</p>
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
                {errorMassage && <p className={styles.error}>{errorMassage}</p>}
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
}