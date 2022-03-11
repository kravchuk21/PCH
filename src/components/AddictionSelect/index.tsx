import React from "react";
import styles from "./AddictionSelect.module.css"
import {Addiction, Check, CheckItem} from "../../redux/Types";

type AddictionSelectType = {
    items: Addiction[]
    activeAddictionItem: Array<string>
    onClickAddictionType: (title: string) => any
}

const AddictionSelect: React.FC<AddictionSelectType> = React.memo(
    ({items, activeAddictionItem, onClickAddictionType}) => {
        const onCheckItem = (title: string) => {
            onClickAddictionType(title);
        };

        return (
            <div className={styles.check}>
                <b className={styles.title}>Добавки:</b>
                <div className={styles.checkItems}>
                    {items && items.map((item, index) => {
                        return (
                            <div key={index + new Date().toDateString()}
                                 className={styles.formGroup}>
                                <input onChange={() => onCheckItem(item.title)}
                                       checked={!!activeAddictionItem.find(i => i === item.title)}
                                       type="checkbox"
                                       id={item.title}/>
                                <label htmlFor={item.title}>{item.title}</label>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    });

export default AddictionSelect;
