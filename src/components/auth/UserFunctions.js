export const register = newUser => {
    return fetch('http://127.0.0.1:8000/api/register' , {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'post',
        body: JSON.stringify(newUser), // data can be `string` or {object}!
    }).then(resp => {
        console.log(resp);
    }).catch(err => {
        console.log(err);   
    })
}

export const login = user => {
    return fetch('http://127.0.0.1:8000/api/login', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'post',
        body: JSON.stringify({
            email: user.email,
            password: user.password
        })
    }).then(resp => {
        localStorage.setItem('usertoken', resp.data.token)
        console.log(resp);
    }).catch(err => {
        console.log(err);
    })
}

export const getProfile = () => {
    return fetch('http://127.0.0.1:8000/api/profile', {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
    }).then(resp => {
        console.log(resp);
        return resp.data
    }).catch(err => {
        console.log(err);
    })
}