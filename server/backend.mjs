import { google } from 'googleapis';
import express from "express";
import serverless from "serverless-http";

const SERVICE_ACCOUNT_FILE = './service-account-key.json';
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET_ID = '';

// Load the service account credentials
const auth = new google.auth.GoogleAuth({
  keyFile: SERVICE_ACCOUNT_FILE,
  scopes: SCOPES,
});

const sheets = google.sheets({ version: 'v4', auth });

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World from Express!");
});

app.get("/sheets", async function (req, res, next) {
    if (!SPREADSHEET_ID) {
        res.status(500).send('SPREADSHEET_ID is not set');
        return;
    }
    try {
      const response = await sheets.spreadsheets.get({
          spreadsheetId: SPREADSHEET_ID,
      });

      const sheetsData = response.data.sheets;
      if (sheetsData) {
        const sheetNames = sheetsData.map(sheet => sheet.properties?.title);
        return res.json(sheetNames);
      }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get("/sheets/:sheetName", async function (req, res, next) {
    const sheetName = req.params.sheetName;
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: sheetName,
        });

        let values = response.data.values;
        if (!values) {
            values = [];
        }
        res.json(values);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});


if (process.env.NODE_ENV === "dev") {
    app.listen(8080, () => {
        console.log(
            "Server is running on port 8080. Check the app on http://localhost:8080"
        );
    });
}

export const handler = serverless(app);