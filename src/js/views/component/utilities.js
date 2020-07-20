let manuiplationObject = {
initialKey: 'todoApp',

//this will content generic local storage data manipulation methods

getKey: function (key) {
    let self = this;
    let  data = JSON.parse(localStorage.getItem(`${self.initialKey}_${key}`));
    return data;
},

setKey: function () {
    let self = this;
    return function (key, value) {
        localStorage.setItem(`${self.initialKey}_${key}`, JSON.stringify(value))
    }
},

removeKey: function (key) {
    localStorage.removeItem(`${this.initialKey}_${key}`);
    }
}

export function setDataToLocalStorge(key, value) {
    manuiplationObject.setKey()(key, value);
}

export function getDataFromLocalStorage(key) {
    return manuiplationObject.getKey(key);
}
