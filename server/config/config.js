const port = process.env.PORT || 4000;
const jwtSecret = process.env.JWT_SECRET || "mysecretkey";
// const mongouri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/indian-jobs-usrs112fklgd';
const mongouri = process.env.MONGO_URI || "mongodb+srv://mahady:mahady1906@cluster0.tasds.mongodb.net/mahady?retryWrites=true&w=majority"
export default {
    port,
    mongouri,
    jwtSecret
}