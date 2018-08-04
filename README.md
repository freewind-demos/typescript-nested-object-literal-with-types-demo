TypeScript带嵌套的对象的类型定义
========================

好像发现了TypeScript的一个杀手级的语言特性：定义一个复杂的带嵌套的对象的类型。

比如我们有这样一个复杂的JSON:

```json
{
    "name": "shuzu",
    "url": "http://shuzu.org",
    "categories": [{
        "name": "java-demos",
        "description": "many java demos",
        "demos": [{
            "name": "hello-world-demo",
            "description": "simplest hello world demo"
        }]
    }, {
        "name": "kotlin-demos",
        "description": "many kotlin demos",
        "demos": [{
            "name": "hello-world-demo",
            "description": "simplest hello world demo"
        }]
    }]
}
```

要是在别的语言中，可能要这么做：

```
// Kotlin

data class Demo(
        val name: String,
        val description: String
)

data class Category(
        val name: String,
        val description: String,
        val demos: List<Demo>
)

data class Site(
        val name: String,
        val url: String,
        val categories: List<Category>
)
```

但是，在TypeScript中，我们可以的定义type的同时，保持它与原JSON一致的结构，太棒了！

```typescript
type Site = {
    name: String,
    url: String,
    categories: {
        name: String,
        description: String,
        demos: {
            name: String,
            description: String
        }[]
    }[]
};
```

运行：

```
npm install
npx ts-node hello.ts
```
