import React from "react";
import ReactTwitterLogin from "react-twitter-login";
export default function TwitterLogin() {
  const authHandler = (error, data) => {
    if (error) return console.error(error);
    console.log(data);
  };
  return (
    <ReactTwitterLogin
      authCallback={authHandler}
      consumerKey="NEpfaHYwRDBzeDJnSC12cXZ2T2Y6MTpjaQ" // We created this, remember?
      consumerSecret="EByEyq9qtoV2HAAODqGvIyBTlkGtBBtG0c5sFsv8ZVh6qFJLTg" // We created this, remember?
      callbackUrl="https://foodrecipesbyvenkat.netlify.app/" // You set this up in the twitter app settings, remember?
    />
  );
}