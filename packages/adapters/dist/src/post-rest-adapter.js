export class PostRestAdapter {
    async getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        return await response.json();
    }
    async getPost(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return await response.json();
    }
    async createPost(post) {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        return await response.json();
    }
}
//# sourceMappingURL=post-rest-adapter.js.map