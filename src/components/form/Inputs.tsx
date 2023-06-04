import { createMemo, JSX, Show, splitProps } from 'solid-js';

type Props<El> = {
  ref: (element: El) => void;
  type: 'text' | 'email' | 'tel' | 'password' | 'url' | 'number' | 'date';
  name: string;
  value: string | number | undefined;
  onInput: JSX.EventHandler<El, InputEvent>;
  onChange: JSX.EventHandler<El, Event>;
  onBlur: JSX.EventHandler<El, FocusEvent>;
  placeholder?: string;
  required?: boolean;
  class?: string;
  label?: string;
  error?: string;
  padding?: 'none';
};
/**
 * Text input field that users can type into. Various decorations can be
 * displayed in or around the field to communicate the entry requirements.
 */
export function InputText(props: Props<HTMLInputElement>) {
  // Split input element props
  const [, inputProps] = splitProps(props, ['class', 'value', 'label', 'error']);

  // Create memoized value
  const getValue = createMemo<string | number | undefined>(
    (prevValue) => (props.value === undefined ? '' : !Number.isNaN(props.value) ? props.value : prevValue),
    ''
  );

  return (
    <>
      <label class={`display-contents ${props.class}`}>
        <span class='label'>
          {props.label} {props.required && <span class='mie-1 c-red11'>*</span>}
        </span>
        <input
          {...inputProps}
          class={`field ${props.error ? 'b-red6' : 'b-sand6 hover:b-sand7'}`}
          id={props.name}
          value={getValue()}
          aria-invalid={!!props.error}
          aria-errormessage={`${props.name}-error`}
        />
      </label>
      <Show when={props.error}>
        <div class=' text-sm c-red11 g-col-[1/-1]' id={`${props.name}-error`}>
          {props.error}
        </div>
      </Show>
    </>
  );
}

export function TextArea(props: Props<HTMLTextAreaElement>) {
  // Split input element props
  const [, inputProps] = splitProps(props, ['placeholder', 'class', 'value', 'label', 'error']);

  // Create memoized value
  const getValue = createMemo<string | number | undefined>(
    (prevValue) => (props.value === undefined ? '' : !Number.isNaN(props.value) ? props.value : prevValue),
    ''
  );

  return (
    <>
      <label class={`display-contents ${props.class}`}>
        <span class='label'>
          {props.label} {props.required && <span class='mie-1 c-red11'>*</span>}
        </span>
        <textarea
          {...inputProps}
          class={`field ${props.error ? 'b-red6' : 'b-sand6 hover:b-sand7'}`}
          id={props.name}
          value={getValue()}
          aria-invalid={!!props.error}
          aria-errormessage={`${props.name}-error`}
        >
          {props.placeholder}
        </textarea>
      </label>
      <Show when={props.error}>
        <div class=' text-sm c-red11 g-col-[1/-1]' id={`${props.name}-error`}>
          {props.error}
        </div>
      </Show>
    </>
  );
}
