import { useContext, useState } from "react"
import UserContext from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Client from "../services/api"

const Course = ({ courseId }) => {
  const { contextUser } = useContext(UserContext)
  const navigator = useNavigate()
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  const getMessages = async () => {
    const res = await Client.get(`/course/6895da05ba52465217424480/messages`)
    setMessages(res.data)
    console.log("message from the course", messages)
  }

  useEffect(() => {
    getMessages()
  }, [messages.length !== 0])

  const handleMessageChange = async (e) => {
    setMessage(e.target.value)
  }

  const handleMessageSubmit = async (e) => {
    e.preventDefault()
    await Client.post("/course/6895da05ba52465217424480/messages", {
      content: message,
    }).then(() => {
      setMessage("")
    })
  }

  if (contextUser) {
    return (
      <>
        <div className="course-page">
          <div className="course-info">
            <div className="course-image-container"></div>
            <div className="written-datails">
              <h1 className="course-name">Course Name</h1>
              <div className="written-datail">
                <h3>Description</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  ab assumenda nihil velit.
                </p>
              </div>
              <div className="written-datail">
                <h3>Location</h3>
                <p>Bahrain, Manama</p>
              </div>
              <div className="written-datail">
                <h3>Teacher</h3>
                <p>Mr. Zainab</p>
              </div>
            </div>
            <div className="course-skills">
              <div className="course-skill">Skill</div>
              <div className="course-skill">Skill</div>
              <div className="course-skill">Skill</div>
              <div className="course-skill">Skill</div>
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
