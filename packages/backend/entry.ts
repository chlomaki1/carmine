import { createHonoEndpoints } from "ts-rest-hono";
import { contract } from "@shared/contract";
import { router } from "./src/router";
import { serve } from "@hono/node-server";
import { generateOpenApi } from "@ts-rest/open-api";
import { Hono } from "hono";
import { apiReference } from "@scalar/hono-api-reference";

const app = new Hono();

app.get("/health", async (c) => {
    return c.text("OK");
});

app.get("/api/docs", apiReference({
    spec: {
        content: generateOpenApi(contract, {
            info: {
                title: "Carmine API",
                version: "1.0.0"
            }
        })
    }
}));

createHonoEndpoints(contract, router, app);

try {
    serve(app, (info) => {
        console.log(`Listening on port ${info.port}`);
    });
}
catch (error) {
    console.log(error);
    process.exit(1);
}
