import { postContent } from "/oldagram/data.js"

renderPosts()

document.addEventListener('click', function(e){
     if (e.target.dataset.like) {
         handleLikeClick(e.target.dataset.like)
     }
})

function handleLikeClick(postId) {
    const targetPostObj = postContent.filter(function(post){
        return post.uuid === postId
    })[0]
    
    if (targetPostObj.isLiked) {
        targetPostObj.likes--
        targetPostObj.isLiked = false
    } else {
        targetPostObj.likes++
        targetPostObj.isLiked = true
    }
    renderPosts()
}

function getFeedHtml() {
    let feedHtml = ``
    postContent.forEach(function(post) {
        
        let likeIconClass = ''
        if(post.isLiked) {
            likeIconClass = 'liked'
        }

        feedHtml += `
        <article class = "post-framework">
                <div class="user">
                    <img class="avatar" src=${post.avatar}>
                    <div class="user-info">
                        <p class="name">${post.name}</p>
                        <p class="location">${post.location}</p>
                    </div>
                </div>
                <div>
                    <img class="post" src="${post.post}">
                </div>
                <div class="icon-section">
                    <i class="fa-solid fa-heart ${likeIconClass}"
                    data-like=${post.uuid}></i>
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-regular fa-paper-plane"></i>
                </div>
                <div class="caption-section">
                    <div>
                        <p id="like-count" class="like-count">${post.likes} likes</p>
                    </div>
                    <div>
                        <p class="caption"><span class="bold">${post.username}</span> ${post.comment}</p>
                    </div>
                </div>
        </article>`
    })
    return feedHtml
}

function renderPosts() {
    document.getElementById("main").innerHTML = getFeedHtml()
}

