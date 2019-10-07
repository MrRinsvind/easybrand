export const CopyToClipboard = (element) => {
    let doc = document
        , text = doc.getElementById(element)
        , range, selection;

    if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    console.log('copied')
}

export const TransformFontSize = (initialSize, fontRange) => {
    if(fontRange === 0){
        let result = initialSize - (initialSize * 0.2)
        return `${result}px`
    }else if(fontRange === 1){
        return `${initialSize}px`
    }else if(fontRange === 2){
        let result = initialSize + (initialSize * 0.2)
        return `${result}px`
    }
}
