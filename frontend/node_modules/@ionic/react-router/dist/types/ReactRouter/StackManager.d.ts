import React from 'react';
import { RouteManagerContext } from './RouteManagerContext';
import { ViewItem } from './ViewItem';
interface StackManagerProps {
    id?: string;
}
interface StackManagerState {
    routerOutletReady: boolean;
}
export declare class StackManager extends React.Component<StackManagerProps, StackManagerState> {
    routerOutletEl: React.RefObject<HTMLIonRouterOutletElement>;
    context: React.ContextType<typeof RouteManagerContext>;
    id: string;
    constructor(props: StackManagerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleViewSync(page: HTMLElement, viewId: string): void;
    handleHideView(viewId: string): void;
    renderChild(item: ViewItem): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    static readonly contextType: React.Context<import("./RouteManagerContext").RouteManagerContextState>;
}
export {};
