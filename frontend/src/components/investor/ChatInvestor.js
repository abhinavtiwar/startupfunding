import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import app_config from "../../config";
import "./ChatInvestor.css";

const ChatInvestor = ({}) => {
  const api_url = app_config.api_url;
  const [socket, setSocket] = useState(io(api_url, { autoConnect: false }));
  const [text, setText] = useState("");
  const [startupDetail, setInvestorDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const {startupid} = useParams();

  const getDataFormBackend = async () => {
    const res = await fetch(`${api_url}/startup/getbyid/${startupid}`);
    const data = await res.json();
    console.log(data);
    setInvestorDetail(data);
    setLoading(false);
  };
  useEffect(() => {
    getDataFormBackend()
  }, [])

  const [messageList, setMessageList] = useState([
    
      ]);

  useEffect(() => {
    socket.connect();

  }, []);

  socket.on('recmsg', (data) => {
    setMessageList([ ...messageList, data ]);
  })

  const sendMessage = () => {
    let obj = {text : text, sent : true, }
    socket.emit("sendmsg", obj);
    setMessageList([ ...messageList, obj ]);
  };

  const displayMessages = () => {
    return messageList.map( ({ text, sent }) => (
      <div className="msg-body">
        <p className={"msg-text "+( sent ? 'msg-sent' : 'msg-rec' )}>
          {text}
        </p>
      </div>
    ) )
  }

  return (
    <div className="h-100 bg-light">
      <div className="container pt-5">
        <h2>Let's Start Chat</h2>
        <div className="card">
          <div className="card-body">
            <div className="chat-area">
              {displayMessages()}
            </div>
          </div>
          <div className="card-footer">
            <input
              className="form-control"
              onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-primary" onClick={sendMessage}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInvestor;