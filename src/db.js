import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex:true,
});

const db = mongoose.connection;

const handleDB = () => console.log('✅ connectio n to DB');
const handleError = error => console.log('❌ DB Error', error);

db.on('error', handleError);
db.once('open', handleDB);