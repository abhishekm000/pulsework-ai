import { useForm } from "react-hook-form";

const fieldClassName =
  "mt-2 w-full rounded-xl border border-[#222222]/15 bg-white px-4 py-3 text-[#222222] outline-none transition placeholder:text-[#222222]/40 focus:border-[#FA8112] focus:ring-2 focus:ring-[#FA8112]/20";

function NewTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      priority: "Medium",
      status: "To do",
    },
  });

  const onSubmit = (taskData) => {
    console.log("New task:", taskData);
  };

  const errorMessage = (message) => (
    <p className="mt-1 text-sm text-red-700" role="alert">
      {message}
    </p>
  );

  return (
    <main className="px-5 pb-16 pt-28 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FA8112]">
            Pulsework workspace
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Create a new task
          </h1>
          <p className="mt-3 text-[#222222]/65">
            Add the details below to organize and assign your work.
          </p>
        </header>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl border border-[#222222]/5 bg-white p-6 shadow-xl shadow-[#222222]/5 sm:p-9"
          noValidate
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="title" className="font-semibold">
                Task name <span className="text-[#FA8112]">*</span>
              </label>
              <input
                id="title"
                type="text"
                placeholder="e.g. Prepare the launch plan"
                className={fieldClassName}
                aria-invalid={Boolean(errors.title)}
                {...register("title", { required: "Enter a task name." })}
              />
              {errors.title && errorMessage(errors.title.message)}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="description" className="font-semibold">
                Description <span className="text-[#FA8112]">*</span>
              </label>
              <textarea
                id="description"
                rows="4"
                placeholder="What needs to be done?"
                className={`${fieldClassName} resize-y`}
                aria-invalid={Boolean(errors.description)}
                {...register("description", {
                  required: "Add a short task description.",
                })}
              />
              {errors.description && errorMessage(errors.description.message)}
            </div>

            <div>
              <label htmlFor="assignee" className="font-semibold">
                Assigned employee <span className="text-[#FA8112]">*</span>
              </label>
              <input
                id="assignee"
                type="text"
                placeholder="Enter employee name"
                className={fieldClassName}
                aria-invalid={Boolean(errors.assignee)}
                {...register("assignee", {
                  required: "Enter the assigned employee.",
                })}
              />
              {errors.assignee && errorMessage(errors.assignee.message)}
            </div>

            <div>
              <label htmlFor="priority" className="font-semibold">
                Priority
              </label>
              <select
                id="priority"
                className={fieldClassName}
                {...register("priority")}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Urgent</option>
              </select>
            </div>

            <div>
              <label htmlFor="dueDate" className="font-semibold">
                Due date <span className="text-[#FA8112]">*</span>
              </label>
              <input
                id="dueDate"
                type="date"
                className={fieldClassName}
                aria-invalid={Boolean(errors.dueDate)}
                {...register("dueDate", { required: "Choose a due date." })}
              />
              {errors.dueDate && errorMessage(errors.dueDate.message)}
            </div>

            <div>
              <label htmlFor="status" className="font-semibold">
                Status
              </label>
              <select
                id="status"
                className={fieldClassName}
                {...register("status")}
              >
                <option>To do</option>
                <option>In progress</option>
                <option>Completed</option>
              </select>
            </div>
          </div>

          <div className="mt-8 flex justify-end border-t border-[#222222]/10 pt-6">
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-[#FA8112] to-[#F5B34C] px-8 py-3.5 font-bold text-[#222222] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
            >
              Create task
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default NewTask;
