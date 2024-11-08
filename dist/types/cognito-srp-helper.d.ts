import { DeviceVerifier, InitiateAuthRequest, InitiateAuthResponse, RespondToAuthChallengeRequest, RespondToAuthChallengeResponse, SrpSession, SrpSessionSigned } from "./types";
export declare const createSecretHash: (userId: string, clientId: string, secretId: string) => string;
export declare const createPasswordHash: (userId: string, password: string, poolId: string) => string;
export declare const createDeviceVerifier: (deviceKey: string, deviceGroupKey: string) => DeviceVerifier;
export declare const createSrpSession: (username: string, password: string, poolId: string, isHashed?: boolean) => SrpSession;
export declare const signSrpSession: (session: SrpSession, response: InitiateAuthResponse) => SrpSessionSigned;
export declare const signSrpSessionWithDevice: (session: SrpSession, response: RespondToAuthChallengeResponse, deviceGroupKey: string, deviceRandomPassword: string) => SrpSessionSigned;
export declare const wrapInitiateAuth: <T extends InitiateAuthRequest>(session: SrpSession, request: T) => T;
export declare const wrapAuthChallenge: <T extends RespondToAuthChallengeRequest>(session: SrpSessionSigned, request: T) => T;
