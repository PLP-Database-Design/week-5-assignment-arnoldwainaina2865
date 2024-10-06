import express from "express";
import db from "./db.js";
// Initialise app
const server = express();
// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// Question 1: Retrieve all patients
server.get("/patients", async (request, response) => {
try {
const sqlStatement = `SELECT patient_id, first_name, last_name, date_of_birth FROM
patients;`;
db.query(sqlStatement, (queryErr, queryResult) => {
if (queryErr) {
console.log({ queryErr });
return response.status(500).json({
success: false,
message: queryErr,
});
}
console.log({ queryResult });
return response.status(200).json({
success: true,
data: queryResult,
});
});
} catch (error) {
return response.status(500).json({
success: false,
message: "Something went wrong",
});
}
});
// Question 2: Retrieve all providers
server.get("/providers", async (request, response) => {
try {
const sqlStatement = `SELECT first_name, last_name, provider_specialty FROM providers;`;
db.query(sqlStatement, (queryErr, queryResult) => {
if (queryErr) {
// console.log({ queryErr });
return response.status(500).json({
success: false,
message: queryErr,
});
}
// console.log({ queryResult });
return response.status(200).json({
success: true,
data: queryResult,
});
});
} catch (error) {
return response.status(500).json({
success: false,
message: "Something went wrong",
});
}
});
// Question 3: Filter patients by First Name
server.get("/patients-firstname", async (request, response) => {
try {
const sqlStatement = `SELECT first_name FROM patients;`;
db.query(sqlStatement, (queryErr, queryResult) => {
if (queryErr) {
// console.log({ queryErr });
return response.status(500).json({
success: false,
message: queryErr,
});
}
// console.log({ queryResult });
return response.status(200).json({
success: true,
data: queryResult,
});
});
} catch (error) {
return response.status(500).json({
success: false,
message: "Something went wrong",
});
}
});
// Question 4: Retrieve all providers by their specialty
server.get("/providers-specialty", async (request, response) => {
try {
const sqlStatement = `SELECT provider_specialty FROM providers;`;
db.query(sqlStatement, (queryErr, queryResult) => {
if (queryErr) {
// console.log({ queryErr });
return response.status(500).json({
success: false,
message: queryErr,
});
}
// console.log({ queryResult });
return response.status(200).json({
success: true,
data: queryResult,
});
});
} catch (error) {
return response.status(500).json({
success: false,
message: "Something went wrong",
});
}
});
// Listen to the server requests
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
console.log(`Server is running: http://localhost:${PORT}`);
});