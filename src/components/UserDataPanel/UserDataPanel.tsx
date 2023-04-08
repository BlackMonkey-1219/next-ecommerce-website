import React from 'react';
import Avatar from '../Avatar/Avatar';
import UserPersonalDetailChangeForm from '../UserPersonalDetailChangeForm/UserPersonalDetailChangeForm';
import UserShippingAddressChangeForm from '../UserShippingAddressChangeForm/UserShippingAddressChangeForm';
import UserPasswordChangeForm from '../UserPasswordChangeForm/UserPasswordChangeForm';

function UserDataPanel() {
  return (
    <table className={'w-full h-fit p-[1rem] bg-white rounded-md'}>
      <tr className={'border-b-[2px]'}>
        <td
          colSpan={2}
          className={'w-[25rem]'}>
          <div
            className={'flex flex-row items-center justify-start gap-[1rem]'}>
            <Avatar size={'xxl'} />
            <UserPersonalDetailChangeForm />
          </div>
        </td>
      </tr>
      <tr>
        <td className={'w-[25rem] border-r-[2px]'}>
          <UserShippingAddressChangeForm />
        </td>
        <td>
          <UserPasswordChangeForm />
        </td>
      </tr>
    </table>
  );
}

export default UserDataPanel;
