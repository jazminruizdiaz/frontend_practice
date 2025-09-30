import { useState } from "react";
import type { SearchType } from "../../../shared/types/SearchType";
import "../../../styles/search.css";
import TopicSelect from "../../../shared/components/TopicSelect";
import TextField from "../../../shared/components/TextField";
import Button from "../../../shared/components/Button";

interface SearchProps {
  onSearch: (filters: SearchType) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ keyword, topic: selectedTopic });
  };

  return (
    <form className="search nav-bar__search" onSubmit={handleSubmit}>
      <div className="search-group">
        <div className="search__field search__field--select">
          <TopicSelect
            value={selectedTopic}
            onChange={setSelectedTopic}
            includeAllOption={true}
            className="search-group__select"
            id="search-topic"
            name="searchTopic"
          />
        </div>
        <div className="search__field search__field--input">
          <TextField
            name="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search flashcards..."
            type="text"
            className="search-group__input"
          />
        </div>

        <div className="search__field search__field--button">
          <Button type="submit" variant="primary" label="Search" />
        </div>
      </div>
    </form>
  );
};

export default Search;
