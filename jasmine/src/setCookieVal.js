function setCookieVal(value) {
    console.log('before setting Cookie:', $.cookie('bcHistory'));
    $.cookie('bcHistory', value);
    console.log('after setting Cookie:', $.cookie('bcHistory'));
}