import { getContent, getDetail } from "./api.js";
import { renderContent, renderFavorite } from "./ui.js";
import { getBookmarks, saveBookmarks } from "./storage.js";

let data = [];
let bookmarks = getBookmarks();

const Posts = document.querySelector("#content");

async function app() {
    data = await getContent();

    renderContent(data, bookmarks);
}

app();

Posts.addEventListener("click", async (e) => {

    // XEM CHI TIẾT
    if (e.target.classList.contains("detail")) {
        const button = e.target;
        const postId = button.dataset.id;

        const detail = document.querySelector(`#detail-${postId}`);

        if (detail.innerHTML === "") {
            const postDetail = await getDetail(postId);

            detail.innerHTML = `
                <p>body: ${postDetail.body}</p>
            `;

            button.textContent = "Đóng chi tiết";
        } else {
            detail.innerHTML = "";
            button.textContent = "Xem chi tiết";
        }
    }

    // YÊU THÍCH
    if (e.target.classList.contains("favorite")) {
        const button = e.target;
        const postId = Number(button.dataset.id);

        const post = data.find((post) => post.id === postId);

        const existed = bookmarks.some(
            (item) => item.id === postId
        );

        if (!existed) {
            bookmarks.push(post);

            saveBookmarks(bookmarks);

            renderFavorite(bookmarks);
        }
    }
});