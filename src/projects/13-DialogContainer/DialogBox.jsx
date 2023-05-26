import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { BsFillEmojiFrownFill, BsFillEmojiSmileFill } from "react-icons/bs";
import "./Bounce.css";

function DialogBox({ width = 350 }) {
  const [subscription, setSubscription] = useState({
    title: "Hello",
    description: "Would you like to subscribe",
    state: null,
    justifyContent: "space-between",
  });

  const handleSubscribe = () => {
    setSubscription({
      title: "Thank You",
      description: "For subscribing",
      state: "subscribe",
      justifyContent: "flex-end",
    });
  };

  const handleUnsubscribe = () => {
    setSubscription({
      title: "Sorry",
      description: "to see you go",
      state: "unsubscribe",
      justifyContent: "flex-end",
    });
  };

  const [icon, setIcon] = useState();
  let iconStyle = {
    fontSize: "4rem",
    justifySelf: "center",
    color:
      subscription.state === "subscribe"
        ? "rgba(59,137,90,0.4)"
        : "rgba(26,118,160,0.4)",
  };
  useEffect(() => {
    if (subscription.state === "subscribe") {
      setIcon(<BsFillEmojiSmileFill style={iconStyle} />);
      document.body.style.background = "rgba(59,137,90,0.4)";
    }

    if (subscription.state === "unsubscribe") {
      setIcon(<BsFillEmojiFrownFill style={iconStyle} />);
      document.body.style.background = "rgba(26,118,160,0.4)";
    }
  }, [subscription.state]);

  const [bounce, setBounce] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setBounce('');
    }, 500);
    return () => setBounce("bounce");
  }, [subscription.state]);


  return (
    <div className={`card bg-light m-auto mt-4 ${bounce}`} style={{ width: width }}>
      <div className="card-body">
        <div
          className="d-grid"
          style={{
            gridTemplateColumns: "2fr 1fr",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <section>
            <h2 className="card-title">{subscription.title}</h2>
            <h3 className="card-text">{subscription.description}</h3>
          </section>
          <div>{icon}</div>
        </div>
      </div>
      <hr />
      <div
        className="d-flex mb-2 px-1 text-end"
        style={{
          width: "100%",
          justifyContent: `${subscription.justifyContent}`,
        }}
      >
        {subscription.state === null && (
          <Button text="Cancel" btnClass={"btn-light"} />
        )}
        {subscription.state === "subscribe" ? null : (
          <Button
            text="Subscribe"
            btnClass={"btn-primary"}
            onClick={handleSubscribe}
          />
        )}
        {subscription.state === "subscribe" ? (
          <Button
            text="Unsubscribe"
            btnClass={"btn-danger"}
            onClick={handleUnsubscribe}
          />
        ) : null}
      </div>
    </div>
  );
}

export default DialogBox;
