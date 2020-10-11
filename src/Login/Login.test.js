import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';
import * as LA from './LoginAction';

describe('Test Login Page', () => {
  
  const wrapper = shallow(<Login />);

  test('check render inputs', () => {
    const username = wrapper.find('#username[name="username"]');
    const password = wrapper.find('#password[name="password"]');
    expect(username.length).toBe(1);
    expect(password.length).toBe(1);
  });

  test('check click submit', () => {
    
    const clickSubmit = wrapper.find('#loginSubmit').simulate('click');
    expect('').toBe('');
  });

  it('ok q1', () => {
    const spy = jest.spyOn(LA, 'LoginAction');
    /*spy.mockImplementation(() => {
      return Promise.resolve({data: []})
    });*/

    const clickSubmit = wrapper.find('#loginSubmit').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('Test LoginAction', async () => {
    const result = await LA.LoginAction();
    expect(result).toHaveProperty('token', expect.any(String));
    expect(result).toHaveProperty('username', expect.any(String));
    expect(result).toHaveProperty('id', expect.any(String));
  });
})


