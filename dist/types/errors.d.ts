export declare class SignSrpSessionError extends Error {
    constructor(message?: string);
}
export declare class MissingChallengeResponsesError extends SignSrpSessionError {
    constructor(message?: string);
}
export declare class MissingSaltError extends SignSrpSessionError {
    constructor(message?: string);
}
export declare class MissingSecretError extends SignSrpSessionError {
    constructor(message?: string);
}
export declare class MissingLargeBError extends SignSrpSessionError {
    constructor(message?: string);
}
export declare class MissingUserIdForSrpBError extends SignSrpSessionError {
    constructor(message?: string);
}
export declare class MissingDeviceKeyError extends SignSrpSessionError {
    constructor(message?: string);
}
export declare class AbortOnZeroSrpError extends Error {
    constructor(message?: string);
}
export declare class AbortOnZeroASrpError extends AbortOnZeroSrpError {
    constructor(message?: string);
}
export declare class AbortOnZeroBSrpError extends AbortOnZeroSrpError {
    constructor(message?: string);
}
export declare class AbortOnZeroUSrpError extends AbortOnZeroSrpError {
    constructor(message?: string);
}
