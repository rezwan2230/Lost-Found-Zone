"use client";
import FxDatePicker from "@/src/components/form/FxDatePicker";
import FXInput from "@/src/components/form/FXInput";
import FxSelect from "@/src/components/form/FxSelect";
import dateToISO from "@/src/utils/dateToISO";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { allDistict } from "@bangladeshi/bangladesh-address";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { useGetCategories } from "@/src/hooks/cotegories.hook";
import { ChangeEvent, useState } from "react";
import { File } from "node:buffer";

const CreatePostPage = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);

  const {
    data: categoriesData,
    isLoading: categoryLoading,
    isSuccess: categorySuccess,
  } = useGetCategories();

  let categoryOption: { key: string; label: string }[] = [];
  if (categoriesData?.data && !categoryLoading) {
    categoryOption = categoriesData?.data
      .sort()
      .map((category: { _id: string; name: string }) => ({
        key: category._id,
        label: category.name,
      }));
  }

  const methods = useForm();
  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
      dateFound: dateToISO(data.dateFound),
    };
    console.log(postData);
  };
  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  const cityOptions = allDistict()
    .sort()
    .map((city: string) => ({
      key: city,
      label: city,
    }));

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImageFiles((prev) => [...prev, file]);
  };

  return (
    <div>
      <div className="h-full rounded-xl bg-gradient-to-b from-default-100 px-[73px] py-12">
        <h1 className="text-2xl font-semibold">Post a found item</h1>
        <Divider className="mb-5 mt-3" />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Title" name="title" />
              </div>
              <div className="min-w-fit flex-1">
                <FxDatePicker label="Found date" name="dateFound" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Location" name="location" />
              </div>
              <div className="min-w-fit flex-1">
                <FxSelect label="City" name="city" options={cityOptions} />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FxSelect
                  label="Category"
                  name="category"
                  options={categoryOption}
                  disabled={!categorySuccess}
                />
              </div>
              <div className="min-w-fit flex-1">
                <label
                  className="bg-gray-500 w-full block h-full rounded-md"
                  htmlFor="image"
                >
                  Upload Images
                </label>
                <input
                  className="hidden"
                  multiple
                  type="file"
                  id="image"
                  onChange={(e) => handleImageChange(e)}
                />
              </div>
            </div>

            <Divider className="my-5" />
            <div className="flex justify-between items-center">
              <h1 className="text-xl">Owner verificatiaons questions</h1>
              <Button onClick={() => handleFieldAppend()}>Append</Button>
            </div>

            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center">
                <FXInput name={`questions.${index}.value`} label="Questions" />
                <Button onClick={() => remove(index)}>Remove</Button>
              </div>
            ))}

            <Divider className="my-5" />

            <div className="flex justify-end">
              <Button size="lg" type="submit">
                Post
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreatePostPage;
<h1>CreatePostPage</h1>;
