import React from "react";
// Dms4uhr_3iFNNKD50h2eBgorwFquyDmV130I__i5QjY
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";

class SearchBar extends React.Component {
  state = { term: "" };
  state = { image: [] };
  // onInputChange = (event) => {
  //   console.log(event.target.value);
  //   this.setState({ term: event.target.value });
  // };
  onFormSubmit = async (event) => {
    event.preventDefault();

    const term = this.state.term;

    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID Dms4uhr_3iFNNKD50h2eBgorwFquyDmV130I__i5QjY",
      },
    });
    this.setState({ image: response.data.results });
    console.log(this.state.image);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <Input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            placeholder="Image Search"
            style={{ width: "500px" }}
          />

          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
