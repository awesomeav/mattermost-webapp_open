// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export type ServerError = Error & {
    server_error_id?: string;
    intl?: {
        id: string;
        defaultMessage: string;
        values?: any;
    };
    status_code?: number;
    url?: string;
};

export function isServerError(err: any): err is ServerError {
    return 'server_error_id' in err;
}
