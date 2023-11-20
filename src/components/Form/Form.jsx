import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';
import { useForm } from 'react-hook-form';

import { formSchema } from 'utils/yupSchema';
import {
  ContactsFormWrapper,
  ContactsForm,
  FormTitle,
  FormButton,
} from './Form.styled';
import { InputField } from 'components/InputField/InputField';

export const Form = () => {
  const [formStatus, setFormStatus] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(formSchema),
  });

  const STORAGE_KEY = 'contact_us_form';

  useFormPersist(STORAGE_KEY, {
    watch,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    setValue,
  });

  const onSubmit = async formData => {
    try {
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);

      reset();
    } catch (error) {
      console.error(error);
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    } finally {
    }
  };
  return (
    <ContactsForm onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Зв’язатись з нами</FormTitle>
      <ContactsFormWrapper>
        <InputField
          label={'Імʼя'}
          type="text"
          name="name"
          register={register}
          errors={errors}
          placeholder={'Імʼя'}
        />
        <InputField
          label={'E-mail'}
          type="email"
          name="email"
          register={register}
          errors={errors}
          placeholder={'E-mail'}
        />
        <InputField
          label={'Повідомлення'}
          type="textarea"
          name="message"
          register={register}
          errors={errors}
          placeholder={'Повідомлення'}
        />
      </ContactsFormWrapper>
      <FormButton
        type="submit"
        disabled={formStatus === 'error' || formStatus === 'success'}
      >
        {formStatus === 'error'
          ? 'Помилка'
          : formStatus === 'success'
          ? 'Відправлено'
          : 'Відправити'}
      </FormButton>
    </ContactsForm>
  );
};
