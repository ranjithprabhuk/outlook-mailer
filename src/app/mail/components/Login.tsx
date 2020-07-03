import * as React from 'react';
import { ILoginProps } from '../ILogin';
import * as ReactMarkdown from 'react-markdown';

import '../mail.scss';
const markdown = '# This is a H1  \n## This is a H2  \n###### This is a H6';
export const Mail: React.FC<ILoginProps> = (props: ILoginProps) => {
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-light bg-light'>
        <div className='collapse navbar-collapse justify-content-between'>
          <ul className='navbar-nav mr-auto'>
            <button className='btn btn-outline-primary my-2 my-sm-0' type='button'>
              New <span className='badge badge-light'>14</span>
            </button>
            <button className='btn btn-outline-primary my-2 my-sm-0' type='button'>
              Archived <span className='badge badge-light'>12</span>
            </button>
            <button className='btn btn-outline-primary my-2 my-sm-0' type='button'>
              Total <span className='badge badge-light'>4</span>
            </button>
          </ul>
          <ul className='navbar-nav'>
            <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
            <img title='Ranjithprabhu' width='38px' src='./assets/images/ranjithprabhu.jpg' className='rounded-circle' alt='...' />
            <button className='btn btn-outline-danger' type='button'>
              Logout
          </button>
          </ul>
        </div>
      </nav>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2 sidebar'>
            <div className='mails'>
              <div className='mail-card'>
                <h6 className='mail-title truncate'>Ranjithprabhu Kumar</h6>
                <p className='mail-text truncate'>Some quick example text to build on the
                card title and make up the bulk of the card's content.</p>
              </div>
              <div className='mail-card'>
                <h6 className='mail-title truncate'>Ranjithprabhu Kumar</h6>
                <p className='mail-text truncate'>Some quick example text to build on the
                card title and make up the bulk of the card's content.</p>
              </div>
              <div className='mail-card'>
                <h6 className='mail-title truncate'>Ranjithprabhu Kumar</h6>
                <p className='mail-text truncate'>Some quick example text to build on the card
                title and make up the bulk of the card's content.</p>
              </div>
              <div className='mail-card'>
                <h6 className='mail-title truncate'>Ranjithprabhu Kumar</h6>
                <p className='mail-text truncate'>Some quick example text to build on the card
                title and make up the bulk of the card's content.</p>
              </div>
              <div className='mail-card'>
                <h6 className='mail-title truncate'>Ranjithprabhu Kumar</h6>
                <p className='mail-text truncate'>Some quick example text to build on the card
                title and make up the bulk of the card's content.</p>
              </div>
              <div className='mail-card'>
                <h6 className='mail-title truncate'>Ranjithprabhu Kumar</h6>
                <p className='mail-text truncate'>Some quick example text to build on the card
                title and make up the bulk of the card's content.</p>
              </div>
              <div className='mail-card'>
                <h6 className='mail-title truncate'>Ranjithprabhu Kumar</h6>
                <p className='mail-text truncate'>Some quick example text to build on the card
                title and make up the bulk of the card's content.</p>
              </div>
              <div className='mail-card'>
                <h6 className='mail-title truncate'>Ranjithprabhu Kumar</h6>
                <p className='mail-text truncate'>Some quick example text to build on the card
                title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className='col-10 mail-viewer'>
            <div className='row'>
              <div className='col-12 mail-buttons'>
                <button className='btn btn-sm btn-outline-primary'>Reply</button>
                <button className='btn btn-sm btn-outline-primary'>Archive</button>
                <button className='btn btn-sm btn-outline-danger'>Delete</button>
              </div>
              <div className='col-12'>
                <div className='mail-user-thumbnail'>
                  <img title='Ranjithprabhu' width='60px' src='./assets/images/ranjithprabhu.jpg' className='img-thumbnail' alt='...' />
                </div>
                <div className='mail-info'>
                  <div>Fri 7/3/2020 12:30 PM</div>
                  <div>Ranjithprabhu Kumar (rkumar@rockinterview.in)</div>
                  <div>Mail Subject</div>
                </div>
              </div>
              <div className='col-12 to-address'>
                To: Toaddddresss@rockinterview.in
              </div>
              <div className='col-12 mail-body'>
                <ReactMarkdown source={markdown} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};