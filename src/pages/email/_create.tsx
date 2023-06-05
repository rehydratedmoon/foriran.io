import supabase from '@db/supabase';

import { createForm, getValues } from '@modular-forms/solid';
import { createMemo, createSignal } from 'solid-js';

type FormTypes = {
  name: string;
  [key: string]: string;
};

// const validator = {j
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
  const [cc, setCC] = createSignal('');
  const [bcc, setBCC] = createSignal('');
  const [body, setBody] = createSignal('');


  const emailLink = createMemo(() => {
    if (to() && subject() && body()) {
      return `mailto:${to() ?? ''}?cc=${cc() ?? ''}?bcc=${bcc() ?? ''
        }?subject=${subject() ?? ''}&body=${encodeURI(body() ?? '')}`
    } else {
      return '';
    }
  })

  return (
    <div class='relative pb-40'>
      <h1 class='H1 '>ساخت قالب ایمیل + لینک کوتاه</h1>
      <div class=''>
        <div class=' ' >
          <div class="flex ac rd-2  b-1 b-sand6 bg-sand2 overflow-hidden">
            <h2 class='px-4 font-family-content H3 bg-sand1 '>لینک</h2>
            <div class='px-4 '>
              <p class='px-4'>{emailLink() || <span class='italic c-sand11'>فیلد‌های زیر  را پر کنید تا لینک اینجا نمایش داده شود.</span>}</p>
            </div>
            {emailLink() && (
              <button class='mis-auto btn-prm bf-i-ph-copy !b-0  rd-0 !py-0'>کپی کن</button>
            )}
          </div>
          {/* <div class='flex gap-4'>
            <button class='btn  !py-1 bf-i-ph-plus'>افزودن ایمیل به دیتابیس «برای ایران»</button>
          </div> */}
        </div>
      </div>
      <form class='!mt-8 p-2 grid gap-4'>
        <label class='grid' >
          <span class='label' >موضوع</span>
          <input
            class='field'
            id='subject'
            name='subject'
            value={subject()}
            onInput={(e) => setSubject(e.target.value)}
            type='text'
            required
          />
        </label>
        <label class='grid '>
          <span class='label' > گیرنده</span>
          <input class='field' name='to' value={to()} onInput={(e) => setTo(e.target.value)} type='text' required />
        </label>
        <details>
          <summary class='c-sand11'>
            دیگر فیلدها
          </summary>
          <div class='grid gap-4'>
            <label class='grid' >
              <span class='label' >CC
                <span class=''>
                  (رونوشت)
                </span>
              </span>
              <input
                class='field'
                id='subject'
                name='subject'
                value={cc()}
                onInput={(e) => setCC(e.target.value)}
                type='text'
                required
              />
            </label>
            <label class='grid' >
              <span class='label'>BCC
                <span>
                  (رونوشت پنهان)
                </span>
              </span>
              <input
                class='field'
                id='subject'
                name='subject'
                value={bcc()}
                onInput={(e) => setBCC(e.target.value)}
                type='text'
                required
              />
            </label>
          </div>
        </details>
        <label class='grid' >
          <span class='label'> متن ایمیل</span>
          <textarea
            id='body'
            name='body'
            class='field'
            rows={10}
            value={body()}
            onInput={(e) => setBody(e.target.value)}
            required
          />
        </label>
      </form>
    </div>
  );
}
