import React from "react";
import "./assets/css/App.css";
import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";
import PageManager from "./components/PageManager";
import AppContextProvider from "./context/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <PageManager />
      <MovieGrid />
    </AppContextProvider>
  );
}

export default App;
