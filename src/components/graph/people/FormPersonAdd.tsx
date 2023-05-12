// import supabase from '@db/supabase';
// import { createForm, required } from '@modular-forms/solid';

// import { createMemo, JSX, Show, splitProps } from 'solid-js';
// import InputText from '../../form/InputText';
// import { createSignal } from 'solid-js';

// type FormTypes = {
//   name: string;
//   imageSrc: string;
//   [key: string]: string;
// };

// const validator = {
//   name: required('لطفا نام را پر کنید.'),
// };

// const initialValues = {};

// export default function () {
//   // Create payment form
//   const [form, { Form, Field }] = createForm<FormTypes>({
//     initialValues,
//   });

//   const [addedRecord, setAddedRecord] = createSignal(null);
//   const [isUploading, setIsUploading] = createSignal(false);
//   const [imgSrc, setImgSrc] = createSignal(false);

//   async function uploadAvatar(event) {
//     try {
//       setIsUploading(true);
//       if (!event.target.files || event.target.files.length == 0) {
//         throw 'You must select an image to upload.';
//       }

//       const { user } = await supabase.auth.getUser();
//       const file = event.target.files[0];
//       const fileExt = file.name.split('.').pop();
//       const fileName = `${session?.user?.id}${Math.random()}.${fileExt}`;
//       const filePath = `${fileName}`;

//       let { error: uploadError } = await supabase.storage.from(DEFAULT_AVATARS_BUCKET).upload(filePath, file);

//       if (uploadError) {
//         throw uploadError;
//       }

//       let { error: updateError } = await supabase.from('profiles').upsert({
//         id: user!.id,
//         avatar_url: filePath,
//       });

//   //     if (updateError) {
//   //       throw updateError;
//   //     }

//   //     setImgSrc(null);
//   //     setImgSrc(filePath);
//   //   } catch (error) {
//   //     alert(error.message);
//   //   } finally {
//   //     setIsUploading(false);
//   //   }
//   // }

//   const onSubmit = async (values) => {
//     const res = await fetch('/api/people.json', {
//       method: 'post',
//       body: JSON.stringify(values),
//     }).then((res) => res.json());
//     if (res?.data) setAddedRecord(res.data);
//   };

//   return (
//     <>
//       <Form class='' onSubmit={onSubmit}>
//         <div class=' grid gap-2'>
//           {/* <Field name='image-file' type='file'>
//             {(field, props) => <FileInput {...props} value={field.value} error={field.error} label='عکس' />}
//           </Field> */}
//           <Field name='name' validate={validator.name}>
//             {(field, props) => (
//               <InputText {...props} value={field.value} error={field.error} type='text' label='نام' required />
//             )}
//           </Field>
//           <Field name='imageSrc' validate={validator.name}>
//             {(field, props) => (
//               <InputText {...props} value={field.value} error={field.error} type='text' label='لینک عکس' required />
//             )}
//           </Field>
//           <Field name='instagram'>
//             {(field, props) => (
//               <InputText {...props} value={field.value} error={field.error} type='text' label='اینستاگرام' />
//             )}
//           </Field>
//           <button class='btn-prm g-col-[1/-1]' type='submit'>
//             فرستادن
//           </button>
//         </div>
//       </Form>
//       <div>
//         {addedRecord() && (
//           <div class='mt-4 snack-success'>
//             <p class='fw-700 text-lg'>رکورد اضافه شد.</p>
//             <pre dir='ltr' class='ltr rd-xl b-1 b-dashed b-gray5 bg-gray2 c-gray11 p-4'>
//               {JSON.stringify(addedRecord(), null, 2)}
//             </pre>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// type FileInputProps = {
//   ref: (element: HTMLInputElement) => void;
//   name: string;
//   value?: File[] | File;
//   onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
//   onChange: JSX.EventHandler<HTMLInputElement, Event>;
//   onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>;
//   accept?: string;
//   required?: boolean;
//   multiple?: boolean;
//   class?: string;
//   label?: string;
//   error?: string;
// };

// /**
//  * File input field that users can click or drag files into. Various
//  * decorations can be displayed in or around the field to communicate the entry
//  * requirements.
//  */
// export function FileInput(props: FileInputProps) {
//   // Split input element props
//   const [, inputProps] = splitProps(props, ['class', 'value', 'label', 'error']);

//   // Create file list
//   const getFiles = createMemo(() => (props.value ? (Array.isArray(props.value) ? props.value : [props.value]) : []));

//   return (
//     <div class='display-contents'>
//       <span class='label'>
//         {props.label} {props.required && <span class='mie-1 c-red11'>*</span>}
//       </span>
//       <label
//         class={`relative flex min-h-13 w-full ac jc rd-xl b-3 border-dashed b-gray7 p-8 text-center focus-within:b-blue8 hover:b-gray8  md:min-h-[112px] md:text-lg lg:min-h-32  lg:text-xl ${
//           !getFiles().length && 'c-gray11'
//         }`}
//       >
//         <Show when={getFiles().length} fallback={<>Click or drag and drop file{props.multiple && 's'}</>}>
//           Selected file{props.multiple && 's'}:{' '}
//           {getFiles()
//             .map(({ name }) => name)
//             .join(', ')}
//         </Show>
//         <input
//           {...inputProps}
//           class='absolute h-full w-full cursor-pointer opacity-0'
//           type='file'
//           id={props.name}
//           aria-invalid={!!props.error}
//           aria-errormessage={`${props.name}-error`}
//         />
//       </label>
//       <Show when={props.error}>
//         <div class=' text-sm c-red11 g-col-[1/-1]' id={`${props.name}-error`}>
//           {props.error}
//         </div>
//       </Show>
//     </div>
//   );
// }
