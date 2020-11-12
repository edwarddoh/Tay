import { Observable } from "rxjs";

export type OperationTypeId = string;
export type OperationExecutionId = string;
export interface OperationId {
  readonly typeId: OperationTypeId;
  readonly executionId: OperationExecutionId;
}

export interface OperationContextMap {
  getContext<T>(producedBy: OperationId): OperationContext<T> | undefined;
}

export interface OperationContext<T> {
  isProducedBy: () => OperationId;
  getData: () => T;
}

export interface Operation<T> {
  readonly id: [OperationId, OperationTypeId];
  readonly operator: (...any) => Observable<OperationContext<T>>;
}
