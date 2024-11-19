import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { createContext, useState, useEffect } from 'react';
import Emitter from '../EventEmitter';
import Sidebar from '../Sidebar';
import Main from '../VeryMain';
 

export default function Layout() {
  const [state, setState] = useState({ title: 'Julio' });


  useEffect(() => {
    Emitter.on('INPUT_FROM_MAIN', newValue  => setState({ title: newValue }));
    console.log("EMITTER ON", state.title)

    return () => {
      Emitter.off('INPUT_FROM_MAIN',undefined);
    };
  }, [state.title]);

  return (
    <DashboardLayout>
      <PageContainer maxWidth={false} title={state.title}>

        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
