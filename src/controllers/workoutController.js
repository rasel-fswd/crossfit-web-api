const workoutService = require('../services/workoutServices');

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: 'OK', data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  const workout = workoutService.getOneWorkout(workoutId);
  res.send({ status: 'OK', data: workout });
};
// In src/controllers/workoutController.js
const createNewWorkout = (req, res) => {
  const { body } = req;

  // *** VALIDATION CHECK ***
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  )
    return res.status(400).json({ message: 'Validation failed!' });

  // *** CREAT A NEW WORKOUT ***
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  const createdWorkout = workoutService.createNewWorkout(newWorkout);

  res.status(201).send({ status: 'OK', data: createdWorkout });
};

const updateOneWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
  res.send({ status: 'OK', data: updatedWorkout });
};

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout();
  res.send('Delete an existing workout');
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
