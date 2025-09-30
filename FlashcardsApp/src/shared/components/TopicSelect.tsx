import type React from "react";
import { getAvailableTopics } from "../types/TopicType";
import "../../styles/topic-select.css";

interface TopicSelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  id?: string;
  includeAllOption?: boolean;
  allOptionLabel?: string;
  name?: string;
  required?: boolean;
}

const TopicSelect: React.FC<TopicSelectProps> = ({
  value,
  onChange,
  allOptionLabel = "All Topics",
  className = "form-select",
  id,
  name = "topic",
  includeAllOption = false,
  required = false,
}) => {
  const topics = getAvailableTopics();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      className={`topic-select__input ${className}`}
      name={name}
      id={id}
      value={value}
      onChange={handleChange}
      required={required}
    >
      {includeAllOption && <option value="all">{allOptionLabel}</option>}

      {topics.map((topic) => (
        <option key={topic} value={topic}>
          {topic}
        </option>
      ))}
    </select>
  );
};

export default TopicSelect;
