const STORAGE_KEY = "bookmarks"

export function saveBookmarks(bookmarks) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(bookmarks)
    )
}

export function getBookmarks() {
    const data = localStorage.getItem(STORAGE_KEY)

    return data ? JSON.parse(data) : []
}