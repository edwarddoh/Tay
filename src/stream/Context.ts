export default class Context {
  private readonly typeId;
  private readonly contextId;

  constructor(typeId: string, contextId: string) {
    this.typeId = typeId;
    this.contextId = contextId;
  }
}
