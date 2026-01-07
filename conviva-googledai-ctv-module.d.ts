export type valueof<T> = T[keyof T];

export namespace Impl {
    function GoogleDaiProxy(streamManager?: google.ima.AdsLoader, extraListeners?: ConvivaAdListenerInfo, adAnalytics?: AdAnalytics, Conviva?: Conviva): void;
}

export namespace AdProxyMonitor {
                                /*streamManager, extraListeners, adAnalytics, Conviva, systemFactory */
    function initConvivaDropIn(streamManager?: google.ima.AdsLoader, extraListeners?: ConvivaAdListenerInfo, adAnalytics?: AdAnalytics, Conviva?: Conviva, systemFactory?: systemFactory): AdProxyMonitor;
    function release(): void;
}