import type { Options, RecursiveRouterObj } from "ts-rest-hono";

export type Controller = Partial<RecursiveRouterObj<typeof import("@shared/contract").contract, Options>>;
