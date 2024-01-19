function attachEvents() {
    const loadButton = document.getElementById('btnLoadPosts');
    const posts = document.querySelector('#posts');
    const postBody = document.querySelector('#post-body');
    const postComments = document.querySelector('#post-comments');

    const viewButton = document.querySelector('#btnViewPost');

    loadButton.addEventListener('click', (e) => {
        e.preventDefault();
        fetch('http://localhost:3030/jsonstore/blog/posts')
            .then(res => res.json())
            .then((result) => {
                for(let element of Object.values(result)) {
                    const option = document.createElement('option');
                    option.value = element.id;
                    option.textContent = element.title;
                    posts.appendChild(option)
                }
            })
            .catch(err => console.log(err))
    })

    viewButton.addEventListener('click', async (e) => {
        e.preventDefault();

        const ItemId = posts.value;

        const post = await fetch(`http://localhost:3030/jsonstore/blog/posts/${ItemId}`)
        const postData = await post.json();
        postBody.textContent = postData.body;
        
        const comments = await fetch(`http://localhost:3030/jsonstore/blog/comments/`)
        const commentsData = Object.values(await comments.json())
        const filteredComments = commentsData.filter((c) => c.postId == ItemId)

        for(let comment of filteredComments) {
            const li = document.createElement('li');
            li.textContent = comment.text;

            postComments.appendChild(li);
        }
    })
}

attachEvents();