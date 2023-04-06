import{_ as e,V as a,W as r,a0 as d}from"./framework-91a010c2.js";const n={},h=d('<h1 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h1><h2 id="反射" tabindex="-1"><a class="header-anchor" href="#反射" aria-hidden="true">#</a> 反射</h2><p>赋予了在运行时分析类以及执行类中方法的能力。</p><p>通过反射可以获取任意一个类的所有属性和方法，还可以调用这些方法和属性。</p><h3 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h3><p>优点：让代码更加灵活、为各种框架提供开箱即用的功能提供了便利。</p><p>不过：让我们在运行时有了分析操作类的能力的同时，也增加了安全问题，比如可以无视泛型参数的安全检查（泛型参数的安全检查发生在编译时）。另外，反射的性能也要稍差点。</p><h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h3><p><strong>框架中大量使用了动态代理：动态代理的实现依赖反射。</strong></p><p><strong>注解</strong> 的实现也用到了反射：使用 Spring 的时候 ，一个<code>@Component</code>注解就声明了一个类为 Spring Bean ，通过一个 <code>@Value</code>注解就读取到配置文件中的值呢？</p><p>这些都是因为可以基于反射分析类，然后获取到类/属性/方法/方法的参数上的注解。</p><h2 id="注解" tabindex="-1"><a class="header-anchor" href="#注解" aria-hidden="true">#</a> 注解</h2><p>用于修饰类、方法或者变量，提供某些信息供程序在编译或者运行时使用。</p><p>本质是一个继承了<code>Annotation</code> 的特殊接口</p><h3 id="解析方法" tabindex="-1"><a class="header-anchor" href="#解析方法" aria-hidden="true">#</a> 解析方法</h3><p>被解析之后才生效：</p><p><strong>编译期直接扫描</strong> ：编译器在编译 Java 代码的时候扫描对应的注解并处理，比如某个方法使用<code>@Override</code> 注解，编译器在编译的时候就会检测当前的方法是否重写了父类对应的方法。</p><p><strong>运行期通过反射处理</strong> ：像框架中自带的注解(比如 Spring 框架的 <code>@Value</code> 、<code>@Component</code>)都是通过反射来进行处理的。</p><h2 id="spi" tabindex="-1"><a class="header-anchor" href="#spi" aria-hidden="true">#</a> SPI</h2><p>Service Provider Interface ，字面意思就是：“服务提供者的接口”，专门提供给服务提供者或者扩展框架功能的开发者去使用的一个接口。</p><p>将服务接口和具体的服务实现分离开来，将服务调用方和服务实现者解耦，能够提升程序的扩展性、可维护性。修改或者替换服务实现并不需要修改调用方法。</p><h3 id="与-api-的区别" tabindex="-1"><a class="header-anchor" href="#与-api-的区别" aria-hidden="true">#</a> <strong>与 API 的区别</strong></h3>',22),o=[h];function i(t,c){return a(),r("div",null,o)}const p=e(n,[["render",i],["__file","🌟面试.html.vue"]]);export{p as default};
