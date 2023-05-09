const likeHandler = async () => {
    const response = await fetch(`/api/recipes`, {
        method: 'GET',
        body: json.parseInt(likes),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(response.ok) {
        for(let i=0; i=response.body; i++) {
            response.body + 1
        }
    }
}

document
.querySelector('.fa-thumbs-up')
.addEventListener('click', likeHandler)