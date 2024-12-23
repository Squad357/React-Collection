import React from 'react';

export default function page() {
  return (
    <form>
      <h1>회원가입</h1>
      <label htmlFor='email'>E-Mail</label>
      <input type='email' name='email' id='email' className='border-2' />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        className='border-2'
      />
      <button type='submit'>가입하기</button>
    </form>
  );
}
