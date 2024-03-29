"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const noteRoutes_1 = __importDefault(require("./routes/noteRoutes"));
const app = (0, express_1.default)();
const PORT = 7777;
// mongoose.connect('mongodb://localhost:27017/notes', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose_1.default.connect('mongodb://localhost:27017/notes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(body_parser_1.default.json());
app.use('/api/notes', noteRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
