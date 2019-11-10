import React from "react";
import { observer } from "mobx-react";
// import axios from "axios";

// Components
// import Loading from "./Loading";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

// Store

import bookStore from "./stores/bookStore";

function BookList() {
  return (
    <div>
      <h3>Books</h3>
      <SearchBar store={bookStore} />
      <BookTable books={bookStore.filteredBooks} />
    </div>
  );
}

export default observer(BookList);
