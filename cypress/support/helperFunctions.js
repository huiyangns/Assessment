
//Compose the element selector 
function composeSelector(attrVal, selector) {
    switch (selector) {
        case "id":
        case "ID":
            selector = `#${attrVal}`;
            break;
        case "data-automation":
            selector = `[data-automation="${attrVal}"]`;
            break;
        default:
            console.log("Please enter a valid selector");
    }
    return selector;
}

//Get css class according to the value of style
function getStyle(style) {
    switch (style) {
        case "error":
        case "Error":
            style = 'mds-error';
            break;
        default:
            console.log("Please enter a valid css class");
    }
    return style;
}


export { composeSelector, getStyle }