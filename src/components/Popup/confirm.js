import ReactDOM from 'react-dom';
import ConfirmAlert from "./ConfirmAlert";

/**
 * confirm function
 * */
export function confirm(message) {
    var component, props, wrapper;

    wrapper = document.body.appendChild(document.createElement('div'));

    component = function(){
        /**
         * 비동기 호출을 위한 Promise 사용
         * */
        return new Promise(function(resolve, reject){
            props = {
                type : 'confirm',
                message,
                resolve,
                reject,
            };

            ReactDOM.render(<ConfirmAlert {...props} />, wrapper);
        });
    }

    return component();
};

/**
 * alert function
 * */
export function alert(message) {
    var component, props, wrapper;

    wrapper = document.body.appendChild(document.createElement('div'));

    component = function(){
        return new Promise(function(resolve, reject){
            props = {
                type : 'alert',
                message,
                resolve,
            };

            ReactDOM.render(<ConfirmAlert {...props} />, wrapper);
        });
    }

    return component();
};
