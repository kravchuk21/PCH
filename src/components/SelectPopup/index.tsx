import React, {useState, useEffect, useRef} from "react";
import styles from "./SelectPopup.module.css"
import {Select, SelectItem} from "../../redux/Types";

type SelectPopupType = {
    selectTitle: string
    items: Select["item"]
    activeSelectItem: SelectItem
    onClickSelectType: (id: number) => void
}

const SelectPopup: React.FC<SelectPopupType> = React.memo(
    ({selectTitle, items, activeSelectItem, onClickSelectType}) => {
        const [visiblePopup, setVisiblePopup] = useState(false);
        const activeLabel = items.find((item, idx) => item.title === activeSelectItem.title)?.title
        const selectRef = useRef<HTMLHeadingElement>(null);

        const toggleVisiblePopup = () => {
            setVisiblePopup(!visiblePopup);
        };

        const handleOutsideClick = (e: any) => {
            const path = e.path || (e.composedPath && e.composedPath());
            if (!path.includes(selectRef.current)) {
                setVisiblePopup(false);
            }
        };

        const onSelectItem = (id: number) => {
            onClickSelectType(id);
            setVisiblePopup(false);
        };

        useEffect(() => {
            document.body.addEventListener("click", handleOutsideClick);
        }, []);

        return (
            <div ref={selectRef} className={styles.select} onClick={toggleVisiblePopup}>
                <b>{selectTitle}:</b>
                <div className={styles.selectLabel}>
                    <span>{activeLabel}</span>
                    {visiblePopup && (
                        <div className={styles.selectPopup}>
                            <ul>
                                {items &&
                                items.map((item, index) => (
                                    <li
                                        onClick={() => onSelectItem(index)}
                                        className={activeSelectItem.title === item.title ? styles.active : ""}
                                        key={`${item.title}_${index}`}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

            </div>
        );
    });

export default SelectPopup;
