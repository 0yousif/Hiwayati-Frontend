import Client from "./api"

export const getCourse = async (courseId) => {
  try {
    const res = await Client.get(`/course/${courseId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const createEvent = async (data) => {
  try {
    const res = await Client.post("/:id/event", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getEvent = async () => {
  try {
    const res = await Client.get("/:id/event/:eventId")
    return res.data
  } catch (error) {
    throw error
  }
}
