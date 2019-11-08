import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import Context from './context';
import useNotification from './hook';

describe('hook', () => {
  it('should work with success', () => {
    const notifications = [];
    const wrapper = ({ children }) => (
      <Context.Provider value={notifications}>{children}</Context.Provider>
    );
    const { result } = renderHook(() => useNotification(), { wrapper });

    act(() => {
      result.current.showSuccess('Yay!');
    });

    expect(notifications).toHaveLength(1);
    expect(notifications[0]).toHaveProperty('type', 'success');
    expect(notifications[0]).toHaveProperty('message', 'Yay!');
    expect(notifications[0]).toHaveProperty('open', true);
    expect(notifications[0]).toHaveProperty('id');
  });

  it('should work with error', () => {
    const notifications = [];
    const wrapper = ({ children }) => (
      <Context.Provider value={notifications}>{children}</Context.Provider>
    );
    const { result } = renderHook(() => useNotification(), { wrapper });

    act(() => {
      result.current.showError('Oh noes!');
    });

    expect(notifications).toHaveLength(1);
    expect(notifications[0]).toHaveProperty('type', 'error');
    expect(notifications[0]).toHaveProperty('message', 'Oh noes!');
    expect(notifications[0]).toHaveProperty('open', true);
    expect(notifications[0]).toHaveProperty('id');
  });

  it('should work with any custom prop', () => {
    const notifications = [];
    const wrapper = ({ children }) => (
      <Context.Provider value={notifications}>{children}</Context.Provider>
    );
    const { result } = renderHook(() => useNotification(), { wrapper });

    act(() => {
      result.current.showInfo('FYI: ', { duration: 2000, something: 'meh' });
    });

    expect(notifications).toHaveLength(1);
    expect(notifications[0]).toHaveProperty('type', 'info');
    expect(notifications[0]).toHaveProperty('message', 'FYI: ');
    expect(notifications[0]).toHaveProperty('open', true);
    expect(notifications[0]).toHaveProperty('id');

    expect(notifications[0]).toHaveProperty('duration', 2000);
    expect(notifications[0]).toHaveProperty('something', 'meh');
  });
});
