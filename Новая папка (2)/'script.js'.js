function submitForm()
{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('https://jsonplaceholder.typicode.com/',
    {
        method:'POST',
        headers:
        {
            'Content-Type': 'applications/json',
        },
        body: JSON.stringify({email, password}),
    })
    .then(response => response.json())
    .then(json =>  {console.log(json); })
    .catch(error => {console.error('Error:',error)});
}

