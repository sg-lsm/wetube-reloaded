import express from 'express';
import { watch, getEdit, postEdit, getUpload, postUpload } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/:id(\\b\\d+)', watch);
videoRouter.route('/:id(\\b\\d+)/edit').get(getEdit).post(postEdit);
videoRouter.route('/upload').get(getUpload).post(postUpload);

export default videoRouter;
