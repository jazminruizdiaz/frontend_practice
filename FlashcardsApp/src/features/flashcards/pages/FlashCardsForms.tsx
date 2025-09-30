import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAvailableTopics } from "../../../shared/types/TopicType";
import type { FlashcardType } from "../../../shared/types/FlashcardType";
import TopicSelect from "../../../shared/components/TopicSelect";
import TextField from "../../../shared/components/TextField";
import Button from "../../../shared/components/Button";
import "../../../styles/form.css";

interface FlashCardsFormsAddProps {
  formType: "add";
  onSave: (flashcard: Omit<FlashcardType, "id">) => void;
}

interface FlashCardsFormsEditProps {
  formType: "edit";
  onSave: (flashcard: FlashcardType) => void;
  flashcards: FlashcardType[];
}

type FlashCardsFormsProps = FlashCardsFormsAddProps | FlashCardsFormsEditProps;

const FlashCardsForms: React.FC<FlashCardsFormsProps> = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const topics = getAvailableTopics();

  const [formData, setFormData] = useState({
    id: "",
    question: "",
    answer: "",
    topic: topics.length > 0 ? topics[0] : "",
    learned: false,
  });

  useEffect(() => {
    if (props.formType === "edit" && id) {
      const flashcardToEdit = props.flashcards.find((fc) => fc.id === id);
      if (flashcardToEdit) {
        setFormData(flashcardToEdit);
      }
    }
  }, [props.formType, id]);

  const handleTextFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTopicChange = (topic: string) => {
    setFormData((prevState) => ({
      ...prevState,
      topic,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.question.trim() || !formData.answer.trim()) {
      alert("Please fill in both question and answer");
      return;
    }

    if (props.formType === "add") {
      props.onSave({
        question: formData.question,
        answer: formData.answer,
        topic: formData.topic,
        learned: false,
      });

      alert("The flashcard has been successfully created");
    } else {
      props.onSave({
        ...formData,
        question: formData.question.trim(),
        answer: formData.answer.trim(),
      });
      alert("The flashcard has been successfully updated");
    }

    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="form-page">
      <div className="form-page__container">
        <div className="form-page__header">
          <h2 className="form-page__title">
            {props.formType === "add" ? "Add New Flashcard" : "Edit Flashcard"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="form-page__form">
          <div className="form-page__field">
            <TextField
              label="Question:"
              name="question"
              value={formData.question}
              onChange={handleTextFieldChange}
              placeholder="Enter the question..."
              rows={3}
              required
              type="textarea"
            />
          </div>

          <div className="form-page__field">
            <TextField
              label="Answer:"
              name="answer"
              value={formData.answer}
              onChange={handleTextFieldChange}
              placeholder="Enter the answer..."
              rows={4}
              required
              type="textarea"
            />
          </div>

          <div className="form-page__field">
            <div className="form-page__group">
              <label htmlFor="topic" className="form-page__label">
                Topic:
              </label>
              <TopicSelect
                name="topic"
                id="topic"
                className="form-page__select"
                value={formData.topic}
                onChange={handleTopicChange}
                required={true}
                includeAllOption={false}
              />
            </div>
          </div>

          <div className="form-page__actions">
            <Button
              type="button"
              variant="cancel"
              label="Cancel"
              onClick={handleCancel}
            />
            <Button
              type="submit"
              variant="primary"
              label={
                props.formType === "add" ? "Create Flashcard" : "Save Changes"
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlashCardsForms;
