import { Location as HistoryLocation } from 'history';
export declare class LocationHistory {
    locationHistory: HistoryLocation[];
    add(location: HistoryLocation): void;
    pop(): void;
    replace(location: HistoryLocation): void;
    findLastLocationByUrl(url: string): HistoryLocation<any> | undefined;
    previous(): HistoryLocation<any>;
    current(): HistoryLocation<any>;
}
