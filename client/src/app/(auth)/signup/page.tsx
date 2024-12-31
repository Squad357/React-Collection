'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

function FetchSignup(email: string, password: string) {
  return fetch('http://localhost:8080/auth/signup', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(response => response.json());
}

export default function Page() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(async data => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const result = await FetchSignup(data.email, data.password);
        if (result.ok) {
          router.push('/');
        }
      })}
      className='flex flex-col '>
      <h1 className='m-auto mt-5'>회원가입</h1>
      <label htmlFor='email' className=' mt-7'>
        E-Mail
      </label>
      <input
        type='email'
        placeholder='test@email.com'
        id='email'
        className={`border-2 mt-1 p-1  ${
          errors.email
            ? 'border-red-500 focus:border-red-500'
            : 'focus:outline-none'
        }`}
        {...register('email', {
          required: '이메일은 필수 입력입니다.',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
            message: '이메일 형식에 맞지 않습니다.',
          },
        })}
        aria-invalid={errors.email ? 'true' : 'false'}
      />
      {errors.email && (
        <small className='text-red-500'>{errors.email.message as string}</small>
      )}
      <label htmlFor='password' className=' mt-7'>
        Password
      </label>
      <input
        type='password'
        placeholder='********'
        id='password'
        className={`border-2 mt-1 p-1  ${
          errors.email
            ? 'border-red-500 focus:border-red-500'
            : 'focus:outline-none'
        }`}
        {...register('password', {
          required: '비밀번호는 필수 입력입니다.',
          minLength: {
            value: 8,
            message: '비밀번호는 최소 8자 이상이어야 합니다.',
          },
        })}
        aria-invalid={errors.password ? 'true' : 'false'}
      />
      {errors.password && (
        <small className='text-red-500'>
          {errors.password.message as string}
        </small>
      )}
      <Button
        type='submit'
        className=' mt-5'
        size={'lg'}
        variant={'default'}
        disabled={isSubmitting}>
        가입하기
      </Button>
    </form>
  );
}
