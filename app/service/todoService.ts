import { db } from "~/utils/db.server";

export default {
    async todoList() {
        return await db.todo.findMany()
    },
    async addTodo(name: string) {
        await db.todo.create({ data: { name } })
    },
    async setState(id: number, state: number) {
        console.log('setState', id, state)
        await db.todo.update({ where: { id }, data: { state } })
    },
    async deleteTodo(id: number) {
        await db.todo.delete({ where: { id } })
    },
}