import express from 'express';
import * as displacementRequestController from '../controllers/DisplacementRequestController';

const router = express.Router();

// GET all displacement requests
router.get('/', displacementRequestController.getAllDisplacementRequests);

// GET a single displacement request by ID
router.get('/:id', displacementRequestController.getDisplacementRequestById);

// POST a new displacement request
router.post('/', displacementRequestController.createDisplacementRequest);

// PUT to update a displacement request by ID
router.put('/:id', displacementRequestController.updateDisplacementRequest);

// DELETE a displacement request by ID
router.delete('/:id', displacementRequestController.deleteDisplacementRequest);

export default router;
