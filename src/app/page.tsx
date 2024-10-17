"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [message, setMessage] = useState("");
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  console.log("Backend URL:", backendUrl);

  const handleClick = async () => {
    try {
      const response = await axios.get(`${backendUrl}/teste`);
      setMessage(response.data.message);
    } catch (error) {
      console.error("Erro ao buscar a mensagem:", error);
      setMessage("Erro ao buscar a mensagem.");
    }
  };

  useEffect(() => {}, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleClick}>Clique para testar</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Home;
