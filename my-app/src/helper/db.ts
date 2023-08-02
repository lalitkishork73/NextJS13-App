import mongoose, { connect } from 'mongoose';

const uri: any = process.env.MONGO_DB_URL;
export const Connect_Db = async () => {
  try {
    mongoose.set('strictQuery', false);
    await connect(
      'mongodb+srv://lalitkishork73:UzPr9bb6Wvxda9eC@cluster0.o2wavxe.mongodb.net/',
      { dbName: 'Todos' }
    ).then(() => {
      console.log('Database connected');
    });
  } catch (err) {
    console.log(err);
  }
};
