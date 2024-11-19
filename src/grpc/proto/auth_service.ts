// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.3
// source: src/grpc/proto/auth_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";

export const protobufPackage = "auth_service";

export interface CheckAccessGRPCRequest {
  featureId: number;
  companyId: number;
  jwtToken: string;
  isSystemAdminRequest: boolean;
}

export interface User {
  fullName: string;
  email: string;
  countryId: number;
  mobileNumber: string;
  isSubUser: boolean;
  userId: string;
  refreshToken: string;
  isLoggedIn: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CheckAccessGRPCResponse {
  user: User | undefined;
  isAuthorized: boolean;
}

function createBaseCheckAccessGRPCRequest(): CheckAccessGRPCRequest {
  return { featureId: 0, companyId: 0, jwtToken: "", isSystemAdminRequest: false };
}

export const CheckAccessGRPCRequest: MessageFns<CheckAccessGRPCRequest> = {
  encode(message: CheckAccessGRPCRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.featureId !== 0) {
      writer.uint32(8).int32(message.featureId);
    }
    if (message.companyId !== 0) {
      writer.uint32(16).int32(message.companyId);
    }
    if (message.jwtToken !== "") {
      writer.uint32(26).string(message.jwtToken);
    }
    if (message.isSystemAdminRequest !== false) {
      writer.uint32(32).bool(message.isSystemAdminRequest);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CheckAccessGRPCRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckAccessGRPCRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.featureId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.companyId = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.jwtToken = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.isSystemAdminRequest = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckAccessGRPCRequest {
    return {
      featureId: isSet(object.featureId) ? globalThis.Number(object.featureId) : 0,
      companyId: isSet(object.companyId) ? globalThis.Number(object.companyId) : 0,
      jwtToken: isSet(object.jwtToken) ? globalThis.String(object.jwtToken) : "",
      isSystemAdminRequest: isSet(object.isSystemAdminRequest)
        ? globalThis.Boolean(object.isSystemAdminRequest)
        : false,
    };
  },

  toJSON(message: CheckAccessGRPCRequest): unknown {
    const obj: any = {};
    if (message.featureId !== 0) {
      obj.featureId = Math.round(message.featureId);
    }
    if (message.companyId !== 0) {
      obj.companyId = Math.round(message.companyId);
    }
    if (message.jwtToken !== "") {
      obj.jwtToken = message.jwtToken;
    }
    if (message.isSystemAdminRequest !== false) {
      obj.isSystemAdminRequest = message.isSystemAdminRequest;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckAccessGRPCRequest>, I>>(base?: I): CheckAccessGRPCRequest {
    return CheckAccessGRPCRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CheckAccessGRPCRequest>, I>>(object: I): CheckAccessGRPCRequest {
    const message = createBaseCheckAccessGRPCRequest();
    message.featureId = object.featureId ?? 0;
    message.companyId = object.companyId ?? 0;
    message.jwtToken = object.jwtToken ?? "";
    message.isSystemAdminRequest = object.isSystemAdminRequest ?? false;
    return message;
  },
};

function createBaseUser(): User {
  return {
    fullName: "",
    email: "",
    countryId: 0,
    mobileNumber: "",
    isSubUser: false,
    userId: "",
    refreshToken: "",
    isLoggedIn: false,
    isActive: false,
    createdAt: "",
    updatedAt: "",
  };
}

export const User: MessageFns<User> = {
  encode(message: User, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.fullName !== "") {
      writer.uint32(10).string(message.fullName);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.countryId !== 0) {
      writer.uint32(24).int32(message.countryId);
    }
    if (message.mobileNumber !== "") {
      writer.uint32(34).string(message.mobileNumber);
    }
    if (message.isSubUser !== false) {
      writer.uint32(40).bool(message.isSubUser);
    }
    if (message.userId !== "") {
      writer.uint32(50).string(message.userId);
    }
    if (message.refreshToken !== "") {
      writer.uint32(58).string(message.refreshToken);
    }
    if (message.isLoggedIn !== false) {
      writer.uint32(64).bool(message.isLoggedIn);
    }
    if (message.isActive !== false) {
      writer.uint32(72).bool(message.isActive);
    }
    if (message.createdAt !== "") {
      writer.uint32(82).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(90).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): User {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.fullName = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.countryId = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.mobileNumber = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.isSubUser = reader.bool();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.userId = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.refreshToken = reader.string();
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.isLoggedIn = reader.bool();
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.isActive = reader.bool();
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        }
        case 11: {
          if (tag !== 90) {
            break;
          }

          message.updatedAt = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      fullName: isSet(object.fullName) ? globalThis.String(object.fullName) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      countryId: isSet(object.countryId) ? globalThis.Number(object.countryId) : 0,
      mobileNumber: isSet(object.mobileNumber) ? globalThis.String(object.mobileNumber) : "",
      isSubUser: isSet(object.isSubUser) ? globalThis.Boolean(object.isSubUser) : false,
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      refreshToken: isSet(object.refreshToken) ? globalThis.String(object.refreshToken) : "",
      isLoggedIn: isSet(object.isLoggedIn) ? globalThis.Boolean(object.isLoggedIn) : false,
      isActive: isSet(object.isActive) ? globalThis.Boolean(object.isActive) : false,
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.fullName !== "") {
      obj.fullName = message.fullName;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.countryId !== 0) {
      obj.countryId = Math.round(message.countryId);
    }
    if (message.mobileNumber !== "") {
      obj.mobileNumber = message.mobileNumber;
    }
    if (message.isSubUser !== false) {
      obj.isSubUser = message.isSubUser;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.refreshToken !== "") {
      obj.refreshToken = message.refreshToken;
    }
    if (message.isLoggedIn !== false) {
      obj.isLoggedIn = message.isLoggedIn;
    }
    if (message.isActive !== false) {
      obj.isActive = message.isActive;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== "") {
      obj.updatedAt = message.updatedAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.fullName = object.fullName ?? "";
    message.email = object.email ?? "";
    message.countryId = object.countryId ?? 0;
    message.mobileNumber = object.mobileNumber ?? "";
    message.isSubUser = object.isSubUser ?? false;
    message.userId = object.userId ?? "";
    message.refreshToken = object.refreshToken ?? "";
    message.isLoggedIn = object.isLoggedIn ?? false;
    message.isActive = object.isActive ?? false;
    message.createdAt = object.createdAt ?? "";
    message.updatedAt = object.updatedAt ?? "";
    return message;
  },
};

function createBaseCheckAccessGRPCResponse(): CheckAccessGRPCResponse {
  return { user: undefined, isAuthorized: false };
}

export const CheckAccessGRPCResponse: MessageFns<CheckAccessGRPCResponse> = {
  encode(message: CheckAccessGRPCResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).join();
    }
    if (message.isAuthorized !== false) {
      writer.uint32(16).bool(message.isAuthorized);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CheckAccessGRPCResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckAccessGRPCResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.isAuthorized = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckAccessGRPCResponse {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      isAuthorized: isSet(object.isAuthorized) ? globalThis.Boolean(object.isAuthorized) : false,
    };
  },

  toJSON(message: CheckAccessGRPCResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    if (message.isAuthorized !== false) {
      obj.isAuthorized = message.isAuthorized;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckAccessGRPCResponse>, I>>(base?: I): CheckAccessGRPCResponse {
    return CheckAccessGRPCResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CheckAccessGRPCResponse>, I>>(object: I): CheckAccessGRPCResponse {
    const message = createBaseCheckAccessGRPCResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    message.isAuthorized = object.isAuthorized ?? false;
    return message;
  },
};

export type AuthServiceService = typeof AuthServiceService;
export const AuthServiceService = {
  checkAccess: {
    path: "/auth_service.AuthService/CheckAccess",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CheckAccessGRPCRequest) => Buffer.from(CheckAccessGRPCRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CheckAccessGRPCRequest.decode(value),
    responseSerialize: (value: CheckAccessGRPCResponse) => Buffer.from(CheckAccessGRPCResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CheckAccessGRPCResponse.decode(value),
  },
} as const;

export interface AuthServiceServer extends UntypedServiceImplementation {
  checkAccess: handleUnaryCall<CheckAccessGRPCRequest, CheckAccessGRPCResponse>;
}

export interface AuthServiceClient extends Client {
  checkAccess(
    request: CheckAccessGRPCRequest,
    callback: (error: ServiceError | null, response: CheckAccessGRPCResponse) => void,
  ): ClientUnaryCall;
  checkAccess(
    request: CheckAccessGRPCRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CheckAccessGRPCResponse) => void,
  ): ClientUnaryCall;
  checkAccess(
    request: CheckAccessGRPCRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CheckAccessGRPCResponse) => void,
  ): ClientUnaryCall;
}

export const AuthServiceClient = makeGenericClientConstructor(
  AuthServiceService,
  "auth_service.AuthService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AuthServiceClient;
  service: typeof AuthServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
