const Posts = document.querySelector("#content");
const Favorite = document.querySelector("#favorite");

export function renderContent(posts, bookmarks) {
    Posts.innerHTML = "";

    posts.forEach((post) => {
        Posts.innerHTML += `
            <div>
                <p>userId: ${post.userId}</p>
                <p>id: ${post.id}</p>
                <p>title: ${post.title}</p>

                <div
                    class="detail-content"
                    id="detail-${post.id}"
                ></div>

                <button class="favorite" data-id="${post.id}">
                    ❤️ Yêu thích
                </button>

                <button class="detail" data-id="${post.id}">
                    Xem chi tiết
                </button>
            </div>
        `;
    });

    renderFavorite(bookmarks);
}

export function renderFavorite(bookmarks) {
    Favorite.innerHTML = "";

    bookmarks.forEach((post) => {
        Favorite.innerHTML += `
            <div class="favorite-card">
                <p>userId: ${post.userId}</p>
                <p>id: ${post.id}</p>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
    });
}