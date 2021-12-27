import React from 'react';
import {isDesktop, isMobile} from "react-device-detect";
import DesctopNavigation from "../../components/DesctopNavigation";
import ButtonBack from "../../components/ButtonBack";
import clsx from "classnames";
import {useForm} from "react-hook-form";
import {SupportFormSchema} from "../../utils/validation";
import {SupportDto} from "../../api/types";
import {yupResolver} from '@hookform/resolvers/yup';
import styles from "./Support.module.css"
import SupportPersonImg from "../../assets/img/supportPerson.png"

interface IFormInputs {
    text: string
}

const Support: React.FC = () => {
    const {register, handleSubmit, formState: {errors, isValid, isSubmitting}} = useForm<IFormInputs>({
        resolver: yupResolver(SupportFormSchema),
        mode: "onChange"
    });

    const onSubmit = async (dto: SupportDto) => {
        console.log(dto)
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
                <h4 className={styles.name}>Кравчук Влад</h4>
                <div>
                    <span className={styles.label}>Опишите проблему</span>
                    <textarea {...register("text")}
                              placeholder={"Тут вы можете задать интересующие вопросы, исправить ошибки в работе сайта и предложить идеи для его улучшения"}
                              rows={7}
                              className={clsx(styles.input, {[styles.error]: errors.text?.message})}
                    />
                    <p className={styles.error}>{errors.text?.message}</p>
                </div>
                <button disabled={!isValid || isSubmitting} type="submit" className={styles.button}>
                    Отправить
                </button>
            </form>
            <img className={styles.img} src={SupportPersonImg} alt=""/>
        </div>
    );
};

export default Support;
