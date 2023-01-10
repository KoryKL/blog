import{_ as a,V as p,W as i,a0 as e}from"./framework-91a010c2.js";const n={},r=e(`<h4 id="ssm-spring-spring-mvc-mybatis" tabindex="-1"><a class="header-anchor" href="#ssm-spring-spring-mvc-mybatis" aria-hidden="true">#</a> SSM: Spring + Spring MVC + MyBatis</h4><p>表现层 springmvc</p><p>⬇️</p><p>业务层 service接口</p><p>⬇️</p><p>持久层 mybatis</p><p>⬇️</p><p>mysql</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230110122809137.png" alt="image-20230110122809137" loading="lazy"></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-08-20 14.47.23.png" alt="截屏2022-08-20 14.47.23" loading="lazy"></p><h3 id="_1-controller" tabindex="-1"><a class="header-anchor" href="#_1-controller" aria-hidden="true">#</a> （1） controller</h3><p>控制层</p><p>相当于MVC的C层，controller通过service的接口来<strong>控制业务流程</strong>，也可通过接收前端传过来的参数进行业务操作。</p><h3 id="_2-model" tabindex="-1"><a class="header-anchor" href="#_2-model" aria-hidden="true">#</a> （2） model</h3><p>数据模型层</p><p>相当于MVC的M层，<strong>存放实体类</strong>，与数据库中的属性值基本保持一致。</p><h3 id="_3-service" tabindex="-1"><a class="header-anchor" href="#_3-service" aria-hidden="true">#</a> （3） service</h3><p>业务逻辑层</p><p>主要是针对具体的问题的操作，把一些数据层的操作进行组合，间接与数据库打交道（<strong>提供操作数据库的方法</strong>）。</p><p>要做这一层的话，要先设计接口，在实现类。</p><h3 id="_4-mapper" tabindex="-1"><a class="header-anchor" href="#_4-mapper" aria-hidden="true">#</a> （4） mapper</h3><p><strong>数据存储对象</strong></p><p>相当于DAO层，mapper层直接与数据库打交道（执行SQL语句），接口提供给service层。</p><h4 id="联系" tabindex="-1"><a class="header-anchor" href="#联系" aria-hidden="true">#</a> 联系：</h4><p>spring在刚开始的时候使用工厂模式（DI）和代理模式（AOP）解耦应用组件进而开发出适用于Web开发的SpringMVC</p><p>在实际开发过程当中会使用到很多样板代码，就开发出了懒人版的SpringBoot</p><h4 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别：</h4><p>1、springMVC是Spring的一个模式，是一个Web框架，提供了一个轻度耦合的方式来开发Web应用；</p><p>2、SpringBoot是习惯优于配置，降低了项目搭建的难度；</p><p>3、springMVC需要使用到TomCat服务器，SpringBoot内嵌了Tomcat服务器</p><h4 id="spring" tabindex="-1"><a class="header-anchor" href="#spring" aria-hidden="true">#</a> Spring</h4><p>分层的java SE/EE应用full-stack轻量级框架，以反转控制loc、面向切面编程aop为内核</p><p>展现了众多企业级应用技术：展现层、持久层、业务层事务管理</p><p>为开发Java应用程序提供了全面的基础架构支持。它包含一些很好的功能，如依赖注入和开箱即用的模块，如： Spring JDBC 、Spring MVC 、Spring Security、 Spring AOP 、Spring ORM 、Spring Test</p><blockquote><p>在Java Web开发的早期阶段，我们需要编写大量的代码来将记录插入到数据源中</p><p>但是通过使用Spring JDBC模块的JDBCTemplate，我们可以将这操作简化为只需配置几行代码。</p></blockquote><h5 id="开发步骤" tabindex="-1"><a class="header-anchor" href="#开发步骤" aria-hidden="true">#</a> 开发步骤：</h5><ol><li><p>导入spring开发的基本包坐标</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220215112411676.png" alt="image-20220215112411676" loading="lazy"></p></li><li><p>编写Dao借口和实现类（Bean）</p><blockquote><p>实现习惯放在一个包（Impl）下面</p></blockquote></li><li><p>创建spring核心配置文件</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230110122856473.png" alt="image-20230110122856473" loading="lazy"></p><p>在⬆️中配置UserDaolmpl</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220215162023770.png" alt="image-20220215162023770" loading="lazy"></p></li><li></li></ol><p>使用spring的API获得bean实例</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220215163226946.png" alt="image-20220215163226946" loading="lazy"></p><h4 id="spring-bean" tabindex="-1"><a class="header-anchor" href="#spring-bean" aria-hidden="true">#</a> Spring Bean</h4><p>被实例的，组装的及被Spring 容器管理的Java对象。</p><p>Spring 容器会自动完成@bean对象的实例化。</p><p>创建应用对象之间的协作关系的行为称为：<strong>装配(wiring)</strong>，这就是依赖注入的本质。</p><h4 id="注解开发" tabindex="-1"><a class="header-anchor" href="#注解开发" aria-hidden="true">#</a> 注解开发</h4><p>可以简化配置，提高开发效率</p><p>Spring原始注解：取代&lt;Bean&gt;的配置</p><p>讲解：先xml配置，再注解配置</p><p>text/java</p><ol><li><p>在要创建spring的对象中注入</p></li><li><p>在配置文件中加入组件扫描</p><blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span>context<span class="token operator">:</span> component<span class="token operator">-</span>scan base<span class="token operator">-</span><span class="token keyword">package</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote></li></ol><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220221142033663.png" alt="image-20220221142033663" loading="lazy"></p><p>除了最后两个，都是重点</p><ol><li><p>按照<strong>数据类型</strong>从spring容器中匹配：@Autowired</p></li><li><p>按照**id值（名称）**从spring容器中匹配：@Autowired @Qualifier (结合auto一起使用)</p></li><li><p>前四个是一组的</p></li><li><p>@Resource 相当于@Auto+@Quali</p></li><li><p>在spring容器中寻找对应的key，赋值给下面的字符串</p></li></ol>`,52),s=[r];function o(t,l){return p(),i("div",null,s)}const g=a(n,[["render",o],["__file","SSM.html.vue"]]);export{g as default};
