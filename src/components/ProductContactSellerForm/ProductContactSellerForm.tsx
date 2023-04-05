import React from 'react';
import Button from '../Button/Button';

function ProductContactSellerForm() {
  return (
    <form action=''>
      <h3 className={'m-[0] mb-[2rem]'}>Contact Seller</h3>
      <label htmlFor='message_subject_input'>Subject: </label>
      <br />
      <input
        type='text'
        name='message_subject'
        id='message_subject_input'
        className={
          'w-full h-fit px-[0.5rem] py-[0.25rem] rounded-md border-[2px] border-clr-primary/20'
        }
      />
      <br />
      <label htmlFor='message_body_input'>Message: </label>
      <br />
      <textarea
        name='message_body'
        id='message_body_input'
        cols={60}
        rows={10}
        className={
          'w-full h-fit px-[0.5rem] py-[0.25rem] rounded-md border-[2px] border-clr-primary/20'
        }></textarea>
      <Button
        type={'primary'}
        width={'full'}
        height={'fit'}>
        SEND
      </Button>
    </form>
  );
}

export default ProductContactSellerForm;
