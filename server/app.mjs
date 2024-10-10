import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World from Express!");
});

app.get("/hello", async function (req, res, next) {
    const ipLocation = await fetch("http://ip-api.com/json/")
        .then((res) => res.json())
        .catch(() => ({status: "fail"}));

    if (ipLocation.status === "fail") {
        return `Hello! Failed to get the server location :(`;
    }

    const formattedTime = new Date().toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    res.send({
        message: `Hello ${req.query.name}! This response was served from ${ipLocation.city}, ${ipLocation.country} (${ipLocation.lat}, ${ipLocation.lon}) at ${formattedTime}`,
    });
});

if (process.env.NODE_ENV === "dev") {
    app.listen(8080, () => {
        console.log(
            "Server is running on port 8080. Check the app on http://localhost:8080"
        );
    });
}

export const handler = serverless(app);