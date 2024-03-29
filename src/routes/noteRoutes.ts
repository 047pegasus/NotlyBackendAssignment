import express from 'express';
import * as noteController from '../controllers/noteController';

const router = express.Router();

router.get('/', noteController.getAllNotes);
router.post('/', noteController.createNote);
router.put('/:nid', noteController.updateNote);
router.delete('/:nid', noteController.deleteNote);

export default router;
