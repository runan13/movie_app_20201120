import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// <App /> == Component ==> HTML을 반환하는 함수
// 이러한 JS와 HTML의 React만의 특별한 관계를 "JSX"라고 부른다
ReactDOM.render(<App />, document.getElementById("root"));
