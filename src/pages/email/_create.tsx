import supabase from '@db/supabase';

import { createForm, email, getValues, pattern, required } from '@modular-forms/solid';
import { createEffect, createMemo, JSX, Show, splitProps } from 'solid-js';
import { createSignal } from 'solid-js';
import { InputText, TextArea } from '@components/form/Inputs';
import P from '@astrojs/mdx/test/fixtures/css-head-mdx/src/components/P.astro';

type FormTypes = {
  name: string;
  [key: string]: string;
};

// const validator = {
//   subject: required('لطفا عنوان خود  را بنویسید.'),
//   to: required('لطفا گیرنده یا گیرنده‌‌ها را در اینجا وارد نمایید.'),
//   body: required('لطفا متن ایمیل را وارد نمایید.'),
// };

const initialValues = {};

export default function () {
  const [form, { Form, Field }] = createForm<FormTypes>({
    initialValues,
  });

  // const onSubmit = async (values) => {
  //   const { data, error } = await supabase
  //     .from('email_template')
  //     .upsert({ id: 42, ...values }, { onConflict: 'id' })
  //     .select();
  // };

  const [subject, setSubject] = createSignal('');
  const [to, setTo] = createSignal('');
  const [body, setBody] = createSignal('');

  // const onInput = () => {
  //   console.log('hiii');
  //   setLinkTemplate(
  //     `mailto:${getValues(form).to ?? ''}?cc=${getValues(form).cc ?? ''}?bcc=${getValues(form).bcc ?? ''}?subject=${
  //       getValues(form).subject ?? ''
  //     }&body=${encodeURI(getValues(form).body ?? '')}`
  //   );
  // };

  return (
    <>
      <h1 class='H1'>ساخت لینک قالب ایمیل</h1>
      <div class='b-1 b-sand7 rd-2 p-4'>
        <h2>لینک</h2>
        {body() && to() && subject() ? (
          <div>
            <p>
              {`mailto:${getValues(form).to ?? ''}?cc=${getValues(form).cc ?? ''}?bcc=${
                getValues(form).bcc ?? ''
              }?subject=${getValues(form).subject ?? ''}&body=${encodeURI(getValues(form).body ?? '')}`}
            </p>
          </div>
        ) : (
          <p>فیلد‌های اجباری را پر کنید تا لینک اینجا نمایش داده شود.</p>
        )}
        <div>{}</div>
        <button class='bf-i-ph-copy'>Copy</button>
        <button class='bf-i-ph-plus'>Add to foriran.io templates</button>
      </div>
      <form class='' onInput={onInput}>
        <div class=' grid g-cols-[auto_1fr] gap-4'>
          <input
            name='subject'
            value={subject()}
            onInput={(e) => setSubject(e.target.value)}
            type='text'
            label='موضوع'
            required
          />
          <input name='to' value={to()} onInput={(e) => setTo(e.target.value)} type='text' label='گیرنده' required />
          <textarea
            name='body'
            rows={10}
            value={body()}
            onInput={(e) => setBody(e.target.value)}
            label='متن'
            required
          />
        </div>
      </form>
    </>
  );
}
