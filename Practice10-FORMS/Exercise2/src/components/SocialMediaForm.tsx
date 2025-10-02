import React from "react";
import { SocialLink } from "../types/SocialMediaLink";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { socialMediaLinksSchema } from "../schemas/socialMediaLinksSchema";
import { Platform } from "../types/enums";

interface FormValues {
  links: SocialLink[];
}

const SocialMediaForm: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(socialMediaLinksSchema) as any,
    defaultValues: {
      links: [{ platform: Platform.Facebook, url: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "links",
  });

  const onSubmit = (data: FormValues) => {
    console.log("URLS have been sent:", data.links);
    alert("Form has been sent");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Social Media</h2>

      {fields.map((field, index) => (
        <div key={field.id}>
          <select {...register(`links.${index}.platform`)}>
            {Object.values(Platform).map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
          {errors.links?.[index]?.platform && (
            <p className="error">{errors.links[index].platform.message}</p>
          )}

          <input
            type="text"
            placeholder="https://..."
            {...register(`links.${index}.url`)}
          />
          {errors.links?.[index]?.url && (
            <p className="error">{errors.links[index].url.message}</p>
          )}

          {fields.length > 1 && (
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          )}
        </div>
      ))}

      {fields.length < 5 && (
        <button
          type="button"
          onClick={() => append({ platform: Platform.Facebook, url: "" })}
        >
          Add URL
        </button>
      )}

      <button type="submit">Send</button>
    </form>
  );
};

export default SocialMediaForm;
