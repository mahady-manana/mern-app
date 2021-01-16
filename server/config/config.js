const port = process.env.PORT || 4000;
const jwtSecret = process.env.JWT_SECRET || "mysecretkey";
const mongouri = process.env.MONGO_URI || 'mongodb://localhost:27017/indian-jobs-usrs112fklgd';

export default {
    port,
    mongouri,
    jwtSecret
}