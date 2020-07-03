import * as React from 'react';
import { MailHeader } from '../../mail-header';
import { SideBar } from '../../sidebar';
import { MailViewer } from '../../mail-viewer';

export const MailPage: React.FC<any> = (props: any) => {
  return (
    <div>
      <MailHeader />
      <div className='container-fluid'>
        <div className='row'>
          <SideBar />
          <MailViewer />
        </div>
      </div>
    </div>
  );
};
