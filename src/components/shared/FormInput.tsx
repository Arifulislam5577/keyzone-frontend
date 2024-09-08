/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel?: string;
  inputValidate:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ id, inputLabel, inputValidate, ...props }, ref) => {
    return (
      <fieldset className="space-y-1 flex-1">
        <label
          data-error={!!inputValidate}
          htmlFor={id}
          className="inline cursor-pointer select-none text-body-4 font-medium text-metal-600 data-[error=true]:text-error-500 dark:text-metal-300"
        >
          {inputLabel}
        </label>
        <input
          id={id}
          data-error={!!inputValidate}
          ref={ref}
          {...props}
          className="flex h-11 w-full rounded-lg border border-metal-100 data-[error=true]:border-error-500 px-3 py-2 text-body-4 font-normal text-metal-900 data-[error=true]:text-error-500 placeholder:font-normal placeholder:text-metal-200 data-[error=true]:placeholder:text-error-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white dark:bg-metal-900 dark:border-metal-800 dark:focus-visible:ring-metal-900 dark:text-white dark:placeholder:text-metal-300"
        />
        {!!inputValidate && (
          <span className="text-body-5 font-normal text-error-500 mt-1 block">
            {inputValidate.toString()}
          </span>
        )}
      </fieldset>
    );
  }
);

export default FormInput;
