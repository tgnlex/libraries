type Current<Type> = Type | undefined;
type BaseState = {
  current: any;
}
class StatefulBase {
  public static history: any[] = [];
  public static state: BaseState  = {
    current: undefined,
  };

  public static pushState(item?: any) {
    if (this.state.current) {
      this.history.push(this.state.current);
      if (item) { this.state.current = item };
    };
  }  
  public static setCurrent(item: any) {
    if (this.state.current) {
      this.pushState(item);
    } else {
      this.state.current = item;
    }
  }
}

export default StatefulBase;