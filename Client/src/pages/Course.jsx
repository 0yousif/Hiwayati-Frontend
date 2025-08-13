import { useContext, useState } from "react"
import UserContext from "../context/UserContext"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
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
    // console.log("message from the course", messages)
  }

  // Sockets

  socket.on("receiveMessage", (msg, username, messageCourseId) => {
    console.log(messageCourseId, id)
    if (messageCourseId === id) {
      const newMessage = {
        userId: { username: username },
        content: msg,
      }
      console.log(messages)
      setMessages([...messages, newMessage])
    }
  })

  const sendMessage = (message) => {
    console.log(id)
    socket.emit("sendMessage", message, contextUser.username, id)
  }

  useEffect(() => {
    getMessages()
  }, [messages])

  const handleMessageChange = async (e) => {
    setMessage(e.target.value)
  }

  const handleMessageSubmit = async (e) => {
    e.preventDefault()
    await Client.post(`/course/${id}/messages`, {
      content: message,
    })
    sendMessage(message)
    // setMessage("")
  }

  if (!course) {
    return <h1>...loding</h1>
  }

  if (contextUser) {
    return (
      <>
        <div className="course-page">
          <div className="course-info">
            <div className="course-image-container"></div>
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
          <div className="course-live-chat">
            <div className="live-chat">
              <div className="messages">
                {messages
                  ? messages.map((message) => (
                      <div className="message">
                        <h3 className="message-owner">
                          {message.userId.username}
                        </h3>
                        <p className="message-content">{message.content}</p>
                      </div>
                    ))
                  : null}
              </div>
              <form action="">
                <input
                  onChange={handleMessageChange}
                  type="text"
                  name="content"
                  id="content"
                  value={message}
                />
                <button type="submit" onClick={handleMessageSubmit}>
                  send
                </button>
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
