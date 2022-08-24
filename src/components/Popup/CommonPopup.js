import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { onClose, ...other } = props;

    return (
        <DialogTitle {...other}>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        padding: 0,
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon sx={{ fontSize: 16}}/>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

function CommonPopup({ gubun, openPopup, handleClose, children, onConfirm, onCancel }){
    // hideBackdrop : 다중 팝업일 경우(중첩으로 인해 dim 처리가 중복되는 현상 막기)
    const [hideBackdrop, setHideBackdrop] = useState(false);

    useEffect(() => {
        if(openPopup){
            //아직 렌더링 되기 전이기 때문에 이미 띄어진 dialog 존재부터 체크한다.
            if(document.querySelectorAll('[role="dialog"]').length > 0){
                setHideBackdrop(true);
            }
        }

    }, [openPopup]);



    if(gubun){
        if(gubun === 'alert') {
            if (!onConfirm || typeof onConfirm !== "function") {
                return;
            }
        } else if(gubun === 'confirm') {
            if (!onConfirm || typeof onConfirm !== "function") {
                return;
            }
            if (onCancel && typeof onCancel !== "function") {
                return;
            }
        } else {
            return;
        }
    }

    return(
        <BootstrapDialog
            hideBackdrop={hideBackdrop}
            onClose={(_, reason) => {
                //disable outside click on a dialog modal
                if (reason !== "backdropClick") {
                    handleClose();
                }
            }}
            aria-labelledby="customized-dialog-title"
            open={openPopup}
        >

            {
                !gubun && <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} />
            }

            <DialogContent dividers>{children}</DialogContent>

            {
                gubun &&
                <DialogActions>
                    {
                        gubun === 'alert' &&
                        <Button onClick={onConfirm}>확인</Button>
                    }

                    {
                        gubun === 'confirm' &&
                            <>
                            <Button onClick={onCancel}>취소</Button>
                            <Button onClick={onConfirm}>확인</Button>
                            </>
                    }
                </DialogActions>
            }
        </BootstrapDialog>
    );
}

export default CommonPopup;