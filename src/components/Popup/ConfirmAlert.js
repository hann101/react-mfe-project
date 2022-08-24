import React, {useState} from "react";
import CommonPopup from "./CommonPopup";

function ConfirmAlert(props){
    const [openPopup, setOpenPopup] = useState(true);

    /**
     * '취소' 버튼
     * */
    function abort() {
        setOpenPopup(false);
        return props.reject();
    }

    /**
     * '확인' 버튼
     * */
    function confirm() {
        setOpenPopup(false);
        return props.resolve();
    }

    return (
        <CommonPopup
            /**
            * type : alert, confirm
            */
            gubun={props.type}
            openPopup={openPopup}
            onConfirm={confirm}
            onCancel={abort}
        >
            {props.message}
        </CommonPopup>
    );
}

export default ConfirmAlert;