import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from '../Redux/Store';
import Login from './Login';
import * as LA from './LoginAction';


describe('Test Login Page', () => {
  
  const wrapper = mount(<Provider store={Store}><Login /></Provider>);

  test('Check render inputs', () => {
    const username = wrapper.find('#username[name="username"]');
    const password = wrapper.find('#password[name="password"]');
    expect(username.length).toBe(1);
    expect(password.length).toBe(1);
  });

  test('check click submit', () => {
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
    expect(result).toHaveProperty('name', expect.any(String));
    expect(result).toHaveProperty('uid', expect.any(Number));
  });
})


