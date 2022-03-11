import React from 'react';
import {isDesktop, isMobile} from "react-device-detect";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import clsx from "classnames";
import axios from 'axios';
import styles from "./Support.module.css"
//assets
import SupportPersonImg from "../../assets/img/supportPerson.png"
//components
import DesctopNavigation from "../../components/DesctopNavigation";
import ButtonBack from "../../components/ButtonBack";
//api
import {SupportDto} from "../../api/types";
import {mailAPI} from "../../api/mail"
//utils
import {SupportFormSchema} from "../../utils/validation";
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

interface IFormInputs {
        text: string
}

const Support: React.FC = () => {
        const {register, handleSubmit, formState: {errors, isValid, isSubmitting}} = useForm<IFormInputs>({
                resolver: yupResolver(SupportFormSchema),
                mode: "onChange"
        });
        const data = useSelector((state: RootState) => state.user.data)
        const [errorMessage, setErrorMessage] = React.useState("")
        const [loading, setLoading] = React.useState(false)


        const onSubmit = async (dto: SupportDto) => {
                try {
                        if (data) {
                                setLoading(true)
                                mailAPI.support({
                                        email: data.email,
                                        fullName: data.fullName,
                                        text: dto.text
                                }).then(res => {
                                        setLoading(false)
                                        setErrorMessage("Сообщение успешно отправлен")
                                })
                        }
                } catch (err) {
                        setErrorMessage("Произошла ошибка")
                }
        }

        return (
                <div className={styles.support}>
                        {isDesktop && (
                                <DesctopNavigation mode={"white"}/>
                        )}
                        {isMobile && (
                                <div className={styles.vacanciesHeader}>
                                        <ButtonBack text="Поддержка"/>
                                </div>
                        )}
                        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                                <h4 className={styles.name}>{data && data.fullName}</h4>
                                <div>
                                        <span className={styles.label}>Опишите проблему</span>
                                        <textarea {...register("text")}
                                                  placeholder={"Тут вы можете задать интересующие вопросы, исправить ошибки в работе сайта и предложить идеи для его улучшения"}
                                                  rows={7}
                                                  className={clsx(styles.input, {[styles.error]: errors.text?.message})}
                                        />
                                        <p className={styles.error}>{errors.text?.message}</p>
                                </div>
                                {errorMessage && <span className={styles.messages}>{errorMessage}</span>}
                                <button disabled={!isValid || isSubmitting || loading} type="submit"
                                        className={styles.button}>
                                        Отправить
                                </button>
                        </form>
                        <img className={styles.img} src={SupportPersonImg} alt=""/>
                </div>
        );
};

export default Support;
