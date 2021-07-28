import 'regenerator-runtime';
import 'dotenv/config';
import './db';
import './models/Video';
import './models/Comment';
import './models/User';
import app from './server';

const PORT = 4000;

const handleListening = () => console.log(`✅ server listening on http://localhost:${PORT}`);
app.listen(`${PORT}`, handleListening);
