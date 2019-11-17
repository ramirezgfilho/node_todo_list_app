import { RouterDirection } from '@ionic/core';
import { NavContextState } from '@ionic/react';
import { UnregisterCallback } from 'history';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { StackManager } from './StackManager';
interface NavManagerProps extends RouteComponentProps {
    onNavigateBack: (defaultHref?: string) => void;
    onNavigate: (type: 'push' | 'replace', path: string, state?: any) => void;
}
export declare class NavManager extends React.Component<NavManagerProps, NavContextState> {
    listenUnregisterCallback: UnregisterCallback | undefined;
    constructor(props: NavManagerProps);
    componentWillUnmount(): void;
    goBack(defaultHref?: string): void;
    navigate(path: string, direction?: RouterDirection | 'none'): void;
    tabNavigate(path: string): void;
    getPageManager(): (children: any) => any;
    getStackManager(): typeof StackManager;
    render(): JSX.Element;
}
export {};
