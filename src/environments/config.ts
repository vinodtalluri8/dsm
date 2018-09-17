export class Config {

    public static getEnvironmentVariable(value) {
        let environment: string;
        let data = {};
        environment = window.location.hostname;
        switch (environment) {
            case 'bjavadepp1':
            case 'bjavaappp1':
            case 'bjavaappp2':
            case 'divajb.mfs.com':
                data = {
                    serverUrl: 'https://divajb.mfs.com/',
                    systemMaintServiceUrl: 'WS_DIVA_SYSTEM_MAINTENANCE_SVC/',
                    commonServiceURL: 'DIVA-CommonService/'
                };
                break;
            case 'djavadepp1':
            case 'djavaappp1':
            case 'djavaappp2':
            case 'dr-divajb.mfs.com':
                data = {
                    serverUrl: 'https://dr-divajb.mfs.com/',
                    systemMaintServiceUrl: 'WS_DIVA_SYSTEM_MAINTENANCE_SVC/',
                    commonServiceURL: 'DIVA-CommonService/'
                };
                break;
            case 'diva.mfs.com':
                data = {
                    serverUrl: 'https://diva.mfs.com/',
                    systemMaintServiceUrl: 'WS_DIVA_SYSTEM_MAINTENANCE_SVC/',
                    commonServiceURL: 'DIVA-CommonService/'
                };
                break;
            case 'bjavaappd2':
            case 'bjavaappd1':
            case 'diva-jbdev.mfs.com':
                data = {
                    serverUrl: 'http://diva-jbdev.mfs.com/',
                    systemMaintServiceUrl: 'WS_DIVA_SYSTEM_MAINTENANCE_SVC/',
                    commonServiceURL: 'DIVA-CommonService/'
                };
                break;
            case 'bjavaappt2':
            case 'bjavaappt1':
            case 'diva-jbtest.mfs.com':
                data = {
                    serverUrl : 'http://diva-jbtest.mfs.com/',
                    systemMaintServiceUrl : 'WS_DIVA_SYSTEM_MAINTENANCE_SVC/',
                    commonServiceURL : 'DIVA-CommonService/'
                };
                break;
            case 'bjavaapps2':
            case 'bjavaapps1':
            case 'diva-jbstage.mfs.com':
                data = {
                    serverUrl : 'https://diva-jbstage.mfs.com/',
                    systemMaintServiceUrl : 'WS_DIVA_SYSTEM_MAINTENANCE_SVC/',
                    commonServiceURL : 'DIVA-CommonService/'
                };
                break;
            case 'bjavaappu2':
            case 'bjavaappu1':
            case 'diva-jbuat.mfs.com':
                data = {
                    serverUrl : 'https://diva-jbuat.mfs.com/',
                    systemMaintServiceUrl : 'WS_DIVA_SYSTEM_MAINTENANCE_SVC/',
                    commonServiceURL : 'DIVA-CommonService/'
                };
                break;
            default:
                data = {
                    serverUrl: 'http://diva-jbdev.mfs.com/',
                    commonServiceURL: 'DIVA-CommonService/',
                    systemMaintServiceUrl: 'WS_DIVA_SYSTEM_MAINTENANCE_SVC/'
                };
        }
        return data[value];
    }
}
