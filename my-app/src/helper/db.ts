import mongoose, { connect } from 'mongoose';


const uri: any = process.env.MONGO_DB_URL;
export const Connect_Db = async () => {
  try {
    mongoose.set('strictQuery', false);
    await connect(uri, { dbName: 'Todos' }).then(() => {
      console.log('Database connected');
    });
  } catch (err) {
    console.log(err);
  }
};
