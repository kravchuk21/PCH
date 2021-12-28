import React from "react";
import styles from "./CheckSelect.module.css"
import {Check, CheckItem} from "../../redux/Types";

type CheckPopupType = {
    checkTitle: string
    items: Check["item"]
    activeCheckItem: CheckItem
    onClickCheckType: (id: number) => void
}

const CheckPopup: React.FC<CheckPopupType> = React.memo(
    ({checkTitle, items, activeCheckItem, onClickCheckType}) => {
        const onCheckItem = (id: number): void => {
            onClickCheckType(id);
        };

        return (
            <form className={styles.check}>
                <b className={styles.title}>{checkTitle}:</b>

                <div className={styles.checkItems}>
                    {items && items.map((item, index) => (
                        <div className={styles.checkItem} key={index + item.title}>
                            <input onChange={() => onCheckItem(index)} checked={activeCheckItem.title === item.title}
                                   type="radio" id={item.title} name="radio-group"/>
                            <label htmlFor={item.title}>{item.title}</label>
                        </div>
                    ))}
                </div>
            </form>
        );
    });

export default CheckPopup;
