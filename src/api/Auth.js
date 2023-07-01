export const setAuthToken = (user) =>{
    const currentUser = {
        uid: user.uid
    }
    console.log(currentUser);

    //get jwt token
    fetch('https://reflexlia-review-server.vercel.app/jwt',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res=> res.json())
    .then(data=> {
        console.log(data);
        localStorage.setItem('Token', data.token);
    })
}
