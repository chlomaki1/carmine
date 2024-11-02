import { initServer } from "ts-rest-hono";
import { contract } from "@shared/contract";
import { todoController } from "./controllers/todo.controller";

const s = initServer();

export const router = s.router(contract, {
    ...todoController
});
