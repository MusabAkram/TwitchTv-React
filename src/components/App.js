import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/delete" exact component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
