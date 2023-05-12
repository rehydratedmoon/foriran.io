import { createForm, email, getValue, pattern, required } from '@modular-forms/solid';
import { createMemo, JSX, Show, splitProps } from 'solid-js';
import { createSignal } from 'solid-js';
import InputText from '@comps/form/InputText';

type FormTypes = {
  name: string;
  [key: string]: string;
};

const validator = {
  email: required('لطفا ایمیل خود  را بنویسید.'),
};

const initialValues = {};

export default function () {
  const [form, { Form, Field }] = createForm<FormTypes>({
    initialValues,
  });

  const [isEmailSent, setIsEmailSent] = createSignal(false);

  const onSubmit = async (values) => {
    const res = await fetch('/api/auth/login.json', {
      method: 'post',
      body: JSON.stringify(values),
    }).then((res) => res.json());
    if (!res?.error) setIsEmailSent(true);
  };

  return (
    <>
      <h2 class='H1'>لاگین</h2>
      <Form class='' onSubmit={onSubmit}>
        <div class=' grid g-cols-[auto_1fr] gap-4'>
          <Field name='email' validate={validator.name}>
            {(field, props) => (
              <InputText {...props} value={field.value} error={field.error} type='email' label='ایمیل' required />
            )}
          </Field>
          <button class='btn-prm g-col-[1/-1]' type='submit'>
            فرستادن لینک لاگین
          </button>
        </div>
      </Form>
      {isEmailSent() && <div>ایمیل خود را چک کنید.</div>}
    </>
  );
}

type FileInputProps = {
  ref: (element: HTMLInputElement) => void;
  name: string;
  value?: File[] | File;
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
  onChange: JSX.EventHandler<HTMLInputElement, Event>;
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>;
  accept?: string;
  required?: boolean;
  multiple?: boolean;
  class?: string;
  label?: string;
  error?: string;
};

/**
 * File input field that users can click or drag files into. Various
 * decorations can be displayed in or around the field to communicate the entry
 * requirements.
 */
export function FileInput(props: FileInputProps) {
  // Split input element props
  const [, inputProps] = splitProps(props, ['class', 'value', 'label', 'error']);

  // Create file list
  const getFiles = createMemo(() => (props.value ? (Array.isArray(props.value) ? props.value : [props.value]) : []));

  return (
    <div class={`px-8 lg:px-10 ${props.class}`}>
      <span class='label'>
        {props.label} {props.required && <span class='mie-1 c-red11'>*</span>}
      </span>
      <label
        class={`relative flex min-h-13 w-full ac jc rd-xl b-3 border-dashed b-gray7 p-8 text-center focus-within:b-blue8 hover:b-gray8  md:min-h-[112px] md:text-lg lg:min-h-32  lg:text-xl ${
          !getFiles().length && 'c-gray11'
        }`}
      >
        <Show when={getFiles().length} fallback={<>Click or drag and drop file{props.multiple && 's'}</>}>
          Selected file{props.multiple && 's'}:{' '}
          {getFiles()
            .map(({ name }) => name)
            .join(', ')}
        </Show>
        <input
          {...inputProps}
          class='absolute h-full w-full cursor-pointer opacity-0'
          type='file'
          id={props.name}
          aria-invalid={!!props.error}
          aria-errormessage={`${props.name}-error`}
        />
      </label>
      <Show when={props.error}>
        <div class=' text-sm c-red11 g-col-[1/-1]' id={`${props.name}-error`}>
          {props.error}
        </div>
      </Show>
    </div>
  );
}
