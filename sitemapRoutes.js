import React from "react";
import { Routes, Route } from "react-router-dom";

export default (
  <Routes>
    <Route path="/" />
    <Route path="/brand" />
    <Route path="/login" />
    <Route path="/signup" />
    <Route path="/guarantee" />
    <Route path="/fitting" />
    <Route path="/accessories" />
    <Route path="/terms" />
    <Route path="/policy" />
    <Route path="/fitting/:id" />
    <Route path="/accessories/:id" />
  </Routes>
);
