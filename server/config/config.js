const port = process.env.PORT || 4000;
const jwtSecret = process.env.JWT_SECRET || "mysecretkey";
const mongouri = process.env.MONGO_URI || 'mongodb+srv://mahady:K0FXmMm9gDFpeaBo@cluster0.tasds.mongodb.net/mahady?retryWrites=true&w=majority';
// const mongouri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/db-jobs-users';
export default {
    port,
    mongouri,
    jwtSecret
}
