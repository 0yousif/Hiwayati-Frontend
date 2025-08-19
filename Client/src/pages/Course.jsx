import { use, useContext, useState } from "react"
import UserContext from "../context/UserContext"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useRef } from "react"
import Client from "../services/api"
import io from "socket.io-client"
const socket = io("http://localhost:5000")
import { getCourse } from "../services/course"
const Course = ({ courseId }) => {
  const { contextUser } = useContext(UserContext)
  const navigator = useNavigate()
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [course, setCourse] = useState(null)
  const [editingMessage, setEditingMessage] = useState(null)
  const editedMessage = useRef("")
  // new event form stuff
  const initialEventValues = {
    name: "",
    description: "",
    date: "",
    time: "",
    course_id: "",
    duration: "",
  }
  const [eventValues, setEventValues] = useState(initialEventValues)

  const handleEvnetChange = (e) => {
    setEventValues({ ...eventValues, [e.target.name]: e.target.value })
  }
  const handleNewEventSubmit = async (e) => {
    e.preventDefault()
    if (parseInt(eventValues.time.split(":")[0]) > 12) {
      const time = `${parseInt(eventValues.time.split(":")[0]) - 12}:${parseInt(
        eventValues.time.split(":")[1]
      )} PM`
      setEventValues({
        ...eventValues,
        time,
      })
    }

    const res = await Client.post(`/course/${id}/event`, eventValues)
  }
  useEffect(() => {
    const getCourseById = async () => {
      const res = await getCourse(id)
      setCourse(res)
    }
    getCourseById()
  }, [])

  const { id } = useParams()
  const getMessages = async () => {
    const res = await Client.get(`/course/${id}/messages`)
    setMessages(res.data)
  }

  const endCourse = async () => {
    try {
      const res = await Client.post(`/course/${id}/end`)
      setCourse({ ...course, state: "done" })
    } catch (error) {
      throw error
    }
  }

  // Sockets

  socket.on("receiveMessage", (msg, username, messageCourseId) => {
    if (messageCourseId === id) {
      const newMessage = {
        userId: { username: username },
        content: msg,
      }
      setMessages([...messages, newMessage])
    }
  })

  const sendMessage = (message) => {
    socket.emit("sendMessage", message, contextUser.username, id)
  }

  useEffect(() => {
    getMessages()
  }, [messages.length])

  const handleMessageChange = async (e) => {
    setMessage(e.target.value)
  }

  const handleMessageSubmit = async (e) => {
    e.preventDefault()
    await Client.post(`/course/${id}/message`, {
      content: message,
    })
    sendMessage(message)
    setMessage("")
  }

  const deleteMessage = async (messageId, arrayIndex) => {
    await Client.delete(`/course/${id}/message/${messageId}`)
    setMessages(messages.splice(1, arrayIndex))
  }

  const handleMessageEditSubmit = async (e) => {
    e.preventDefault()
    const messageId = editingMessage.id
    await Client.put(`/course/${id}/message/${messageId}`, {
      content: editedMessage.current.value,
    })
    setEditingMessage(null)
    
    const message = [...messages].find((message, index) => {
      if (message._id.toString() === messageId.toString()) {
        setMessage([...messages][index].content = editedMessage.current.value)
        editedMessage.current.value = ""
        return true
      }
    })
  }

  if (!course) {
    return <h1>...loding</h1>
  }

  if (contextUser) {
    return (
      <>
        <div className="course-page">
          <div className="course-info">
            <div className="course-image-container">
              <img src={course.image} alt="" />
            </div>
            <div className="written-datails">
              <h1 className="course-name">{course.name}</h1>
              <div className="written-datail">
                <h3>Description</h3>
                <p>{course.name}</p>
              </div>
              <div className="written-datail">
                <h3>Location</h3>
                <p>Bahrain, Manama</p>
              </div>
              <div className="written-datail">
                <h3>Teacher</h3>
                <p>{course.teacher?.username}</p>
              </div>
            </div>
            <div className="course-skills">
              {course.skills.map((skill) => (
                <div className="course-skill">{skill.name}</div>
              ))}
            </div>
          </div>
          {course.teacher._id === contextUser.id ? (
            <>
              {course.state === "running" ? (
                <>
                  <button onClick={endCourse} className="end-course-button">
                    End course
                  </button>{" "}
                </>
              ) : null}
              {course.state === "running" &&
              contextUser.id.toString() === course.teacher?._id.toString() ? (
                <form
                  className="new-event-form light-shadow-box"
                  onSubmit={handleNewEventSubmit}
                >
                  <label htmlFor="name">Title</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleEvnetChange}
                  />
                  <label htmlFor="description">Description</label>
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    onChange={handleEvnetChange}
                  ></textarea>
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    onChange={handleEvnetChange}
                  />
                  <label htmlFor="time">Date</label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    onChange={handleEvnetChange}
                  />
                  <label htmlFor="time">Duration</label>
                  <input
                    type="number"
                    name="duration"
                    id="duration"
                    onChange={handleEvnetChange}
                  />
                  <button type="submit">Create</button>
                </form>
              ) : null}
            </>
          ) : null}
          <div className="course-live-chat">
            <div className="live-chat">
              <div className="messages light-shadow-box">
                {messages
                  ? messages.map((message, index) => {
                      return (
                        <>
                          <div className="message" id={message._id}>
                            <h3 className="message-owner">
                              {message.userId.username}
                              {message.userId._id.toString() ===
                              contextUser.id.toString() ? (
                                <>
                                  <button
                                    onClick={() =>
                                      deleteMessage(message._id, index)
                                    }
                                  >
                                    Delete
                                  </button>
                                  <button
                                    onClick={() => {
                                      setEditingMessage({
                                        id: message._id,
                                        content: message.content,
                                      })
                                    }}
                                  >
                                    Edit
                                  </button>
                                </>
                              ) : null}
                            </h3>
                            <p className="message-content">{message.content}</p>
                          </div>
                        </>
                      )
                    })
                  : null}
              </div>
              {editingMessage ? (
                <>
                  <form onSubmit={handleMessageEditSubmit}>
                    <input
                      type="text"
                      name="content"
                      id="content"
                      placeholder={`${editingMessage.content}`}
                      ref={editedMessage}
                    />

                    <button type="submit">Edit</button>
                  </form>
                  <button onClick={() => setEditingMessage(null)}>
                    cancel
                  </button>
                </>
              ) : null}

              <form action="" onSubmit={handleMessageSubmit}>
                {course.state === "done" ? (
                  <input
                    onChange={handleMessageChange}
                    type="text"
                    name="content"
                    id="content"
                    value={message}
                    readOnly
                  />
                ) : (
                  <input
                    onChange={handleMessageChange}
                    type="text"
                    name="content"
                    id="content"
                    value={message}
                  />
                )}

                <button type="submit">send</button>
              </form>
            </div>
            <div className="participants-list"></div>
          </div>
        </div>
      </>
    )
  } else {
    navigator("/signIn")
  }
}

export default Course
