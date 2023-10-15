import axios from 'axios'

const API_URL = 'https://goals-app-backend-zhpd.onrender.com/api/goals/'

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL,{ text: goalData} , config)

  return response.data
} 

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

 const response = await axios.post(API_URL, { text: goalData }, config);

  return response.data
}

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

 const response = await axios.post(API_URL, { text: goalData.text }, config);

  return response.data
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
}

export default goalService
