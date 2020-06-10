export const debounce = (callbanck, delay) => {
    let timeoutId = null;

    return(data) => {
        if(timeoutId){
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            callbanck(data);
            timeoutId = null
        }, delay)
    }
};