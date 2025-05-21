import express from 'express';
import { getBook } from '../controller/book.controller.js'; 

const router = express.Router();

router.get('/'  , getBook); // Get all books

export default router; // Export the router to use in index.js