export type IStateKeyValue = { [key: string]: string | object | null }
export type IUpdateState = (keyValueObj: IStateKeyValue) => void
