exports.getDate = function () {
    const today = new Date();
    
    // object to convert date to
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    // convert date to locale string as specified in options
    return today.toLocaleDateString('en-US', options);
};

exports.getDay = function () {
    const today = new Date();
    
    // object to convert date to
    const options = {
        weekday: 'long',
    };

    // convert date to locale string as specified in options
    return today.toLocaleDateString('en-US', options);
};
