import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const { onSent, recentprompt, result, loading, resultData, input, setInput } =
    useContext(Context);
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          {!result ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, RIWANSHU</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  Conversation with Gemini
                  <p>What are tips to improve public speaking skills?</p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                  <p>Come up with a product name for a new app</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                  <p>
                    What’s the reaction to and impact of autonomous vehicles
                  </p>
                  <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                  <p>As a social trend expert, explain a term</p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentprompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}
          <br />
          <br />
          <br />
          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Enter a prompt here"
              />
              <div>
                {input ? (
                  <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                ) : null}
              </div>
            </div>
            <p className="bottom-info">
              Humans review some saved chats to improve Google AI. To stop this
              for future chats, turn off Gemini Apps activity. If this setting
              is on, don't enter info that you wouldn't want reviewed or used.
              How it works
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
