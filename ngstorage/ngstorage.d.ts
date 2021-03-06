// Type definitions for ngstorage 0.3.10
// Project: https://github.com/gsklee/ngStorage
// Definitions by: Jakub Pistek <https://github.com/kubiq>
// Definitions: https://github.com/kubiq/DefinitelyTyped

/// <reference path='../angularjs/angular.d.ts' />

declare module angular.storage {

    export interface ILocalStorageService {
        $default(items: any):ILocalStorageService;
        $reset(items: any):ILocalStorageService;
        $apply():void;

        get<T>(key: string): T;
        set<T>(key: string, value: T): T;
    }

    export interface ILocalStorageProvider extends angular.IServiceProvider {

        get<T>(key:string): T;
        set<T>(key:string, value:T): T;

        setKeyPrefix(prefix: string):void;
        setSerializer(serializer: (value: any)=>string):void;
        setDeserializer(deserializer: (value: string)=>any):void;
    }
}
