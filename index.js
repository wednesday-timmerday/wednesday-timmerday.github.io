function handleSubmit () {
    const surname = document.getElementById('surname').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    sessionStorage.setItem("SURNAME", surname);

    return;
}
