const request = require("supertest")
const baseURL = "http://localhost:3000"

describe("GET /todo-items", () => {
    it("should return 200", async () => {
        const response = await request(baseURL).get("/todo-items");
        expect(response.statusCode).toBe(200);
        expect(response.body.error).toBe(undefined);
    });
    it("should return todos", async () => {
        const response = await request(baseURL).get("/todo-items");
        expect(response.body.data.length >= 1).toBe(true);
    });
});

describe("POST /todo-items", () => {
    const newTodo = {
        title: "New todo",
        description: "New todo",
        status: 0,
    }
    it("should add an item to database", async () => {
        const response = await request(baseURL).post("/todo-items").send(newTodo);
        expect(response.statusCode).toBe(200);
    });
});

describe("Update one todo", () => {
    const newTodo = {
        id: 1,
        title: "Updated todo title",
        description: "Updated todo description",
        status: 1,
    }
    it("should update item if it exists", async () => {
        const response = await request(baseURL).put(`/todo-items/${newTodo.id}`).send(newTodo);
        expect(response.statusCode).toBe(200);
    });
});

describe("Delete a todo", () => {
    const newTodo = {
        id: 1,
    }
    it("should delete one item", async () => {
        const response = await request(baseURL).delete(`/todo-items/${newTodo.id}`);
        const todos = response.body.data
        const exists = todos.find(todo => {
            newTodo.id == todo.id
        })
        expect(exists).toBe(undefined)
    });
})