import { useEffect, useState } from "react";
import { FormData } from "../types/FormData";
import { Category, ContactMethod } from "../types/enums";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemas } from "../schemas/validationSchemas";
import PersonalInfoStep from "./steps/PersonalInfoStep";
import AddressStep from "./steps/AddressStep";
import PreferencesStep from "./steps/PreferencesStep";
import ReviewStep from "./steps/ReviewStep";

const INITIAL_DATA: FormData = {
  name: "",
  age: 0,
  email: "",
  country: "",
  city: "",
  zip: "",
  contactMethod: ContactMethod.Email,
  newsletter: false,
  category: Category.Technology,
};

const loadFormData = (): FormData => {
  const savedData = localStorage.getItem("formData");
  if (savedData) {
    try {
      return JSON.parse(savedData);
    } catch (error) {
      console.error("Error parsing saved data:", error);
      return INITIAL_DATA;
    }
  }
  return INITIAL_DATA;
};

export default function Form() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(loadFormData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchemas[currentStep]) as any,
    defaultValues: formData,
    mode: "onBlur",
  });

  //rset form only if formData changes
  useEffect(() => {
    reset(formData);
  }, [formData, reset]);

  //save into localsotrage when formdata changes but not when empty
  useEffect(() => {
    if (formData.name || formData.email || formData.country) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);

  const handleNext: SubmitHandler<FormData> = (data: FormData) => {
    console.log("current data", data);
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleFinalSubmit: SubmitHandler<FormData> = (data: FormData) => {
    const finalData = { ...formData, ...data };
    console.log("form sent", finalData);
    alert("Form has been sent");
    localStorage.removeItem("formData");
    setFormData(INITIAL_DATA);
    setCurrentStep(0);
    reset(INITIAL_DATA);
  };

  return (
    <div className="form">
      <div className="form__progress">Step {currentStep + 1} of 4</div>
      {currentStep === 0 && (
        <PersonalInfoStep
          register={register}
          errors={errors}
          formData={formData}
          onSubmit={handleSubmit(handleNext)}
        />
      )}
      {currentStep === 1 && (
        <AddressStep
          register={register}
          errors={errors}
          formData={formData}
          onSubmit={handleSubmit(handleNext)}
          onBack={handleBack}
        />
      )}

      {currentStep === 2 && (
        <PreferencesStep
          register={register}
          errors={errors}
          formData={formData}
          onSubmit={handleSubmit(handleNext)}
          onBack={handleBack}
        />
      )}
      {currentStep === 3 && (
        <ReviewStep
          formData={formData}
          onSubmit={handleSubmit(handleFinalSubmit)}
          onBack={handleBack}
        />
      )}
    </div>
  );
}
