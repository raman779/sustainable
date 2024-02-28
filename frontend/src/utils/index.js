const logOut = () => {
    console.log("logout")
    localStorage.removeItem('authToken')
    window.location.reload()
}
const isValidZipCode = (zipCode) => {

    const usZipCodeRegex = /^\d{5}(?:-\d{4})?$/;
    return usZipCodeRegex.test(zipCode);
};



export { logOut, isValidZipCode };