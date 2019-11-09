function GET(paramName?: String) {
  return (
    target: Object,
    propertyKey: String,
    descriptor: PropertyDescriptor
  ) => {
    let method = descriptor.value;
    let params: string[] = paramName.split("/:").slice(1);
    let body: Map<String, number> = new Map([["bookId", 23], ["chapter", 123]]);
    descriptor.value = function(...args: any[]) {
      args = Assigner.assigner(args, body);
      let result = method.apply(this, args);
      return result;
    };
  };
}

function Param1(Pname: String) {
  return (target: Object, propertyKey: String, paramIndex: number) => {
    Assigner.registerParams(Pname, paramIndex);
  };
}

class Assigner {
  private static paramMap: Map<String, number> = new Map();

  static registerParams(Pname: String, paramIndex: number) {
    let index = this.paramMap.get(Pname);
    if (!index) this.paramMap.set(Pname, paramIndex);
  }
  static assigner(args: any[], params: Map<any, any>): any[] {
    for (let [key, value] of this.paramMap) {
      if (params.get(key)) {
        //   swaping need to add
        args[value] = params.get(key);
      }
    }
    return args;
  }
}

class BookController {
  @GET("/:bookId/:capter")
  getBook(@Param1("bookId") bookId: number, @Param1("chapter") chapter) {
    console.log(bookId, chapter);
  }
}
let nb = new BookController();
nb.getBook(45, 43);
