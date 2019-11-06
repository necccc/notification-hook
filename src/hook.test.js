import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import Context from './context';
import useNotification from './hook';

describe('hook', () => {
  it('should work with success', () => {
    const wrapper = ({ children }) => <Context.Provider value={[]}>{children}</Context.Provider>;
    const { result } = renderHook(() => useNotification(), { wrapper });

    act(() => {
      result.current.showSuccess('Yay!');
    });

    expect(result.current.context).toHaveLength(1);
    expect(result.current.context[0]).toHaveProperty('type', 'success');
    expect(result.current.context[0]).toHaveProperty('message', 'Yay!');
    expect(result.current.context[0]).toHaveProperty('duration', 5000);
    expect(result.current.context[0]).toHaveProperty('open', true);
    expect(result.current.context[0]).toHaveProperty('id');
  });

  it('should work with error', () => {
    const wrapper = ({ children }) => <Context.Provider value={[]}>{children}</Context.Provider>;
    const { result } = renderHook(() => useNotification(), { wrapper });

    act(() => {
      result.current.showError('Oh noes!', 2000);
    });

    expect(result.current.context).toHaveLength(1);
    expect(result.current.context[0]).toHaveProperty('type', 'error');
    expect(result.current.context[0]).toHaveProperty('message', 'Oh noes!');
    expect(result.current.context[0]).toHaveProperty('duration', 2000);
  });
});
