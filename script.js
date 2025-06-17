const syntaxData = {
    java: {
        title: "Java",
        description: "Object-oriented programming language known for platform independence",
        sections: [
            {
                title: "Hello Java",
                code: `<span class="code-keyword">public class</span> HelloPro {<br>
    <span class="code-keyword"> &nbsp;public static void</span> main(String[] args) {<br>
        &nbsp;&nbsp; System.out.println(<span class="code-string">"Hello, AllProLang User's!"</span>);<br>
    &nbsp;}<br>
}`
            },
            {
                title: "Variables",
                code: `<span class="code-keyword">int</span> number = <span class="code-number">42</span>;
<span class="code-keyword">String</span> text = <span class="code-string">"Hello Java"</span>;
<span class="code-keyword">boolean</span> isTrue = <span class="code-keyword">true</span>;
<span class="code-keyword">double</span> decimal = <span class="code-number">3.14</span>;`
            },
            {
                title: "Control Structures",
                code: `<span class="code-comment">// If statement</span>
<span class="code-keyword">if</span> (condition) {
    <span class="code-comment">// code block</span>
} <span class="code-keyword">else</span> {
    <span class="code-comment">// alternative block</span>
}

<span class="code-comment">// For loop</span>
<span class="code-keyword">for</span> (<span class="code-keyword">int</span> i = <span class="code-number">0</span>; i < <span class="code-number">10</span>; i++) {
    System.out.println(i);
}`
            }
        ]
    },
    cpp: {
        title: "C++",
        description: "Powerful general-purpose programming language with low-level control",
        sections: [
            {
                title: "Hello C++",
                code: `<span class="code-keyword">#include</span> &lt;iostream&gt;<br>
<span class = "code-Keyword">using namespace std;</span><br>
<span class="code-keyword">int</span> main() {<br>
    &nbsp;cout &lt;&lt; <span class="code-string">"Hello, AllProLang User's!"</span> &lt;&lt;endl;<br>
    &nbsp;<span class="code-keyword">return</span> <span class="code-number">0</span>;<br>
}`
            },
            {
                title: "Variables",
                code: `<span class="code-keyword">int</span> number = <span class="code-number">42</span>;
<span class="code-keyword">char</span> letter = <span class="code-string">'A'</span>;
<span class="code-keyword">float</span> decimal = <span class="code-number">3.14f</span>;
<span class="code-keyword">bool</span> isTrue = <span class="code-keyword">true</span>;
std::string text = <span class="code-string">"Hello C++"</span>;`
            },
            {
                title: "Functions",
                code: `<span class="code-comment">// Function declaration</span>
<span class="code-keyword">int</span> add(<span class="code-keyword">int</span> a, <span class="code-keyword">int</span> b) {
    <span class="code-keyword">return</span> a + b;
}

<span class="code-comment">// Usage</span>
<span class="code-keyword">int</span> result = add(<span class="code-number">5</span>, <span class="code-number">3</span>);`
            }
        ]
    },
    c: {
        title: "C",
        description: "Foundational programming language known for efficiency and simplicity",
        sections: [
            {
                title: "Hello C",
                code: `<span class="code-keyword">#include</span> &lt;stdio.h&gt;<br>

<span class="code-keyword">int</span> main() {<br>
    &nbsp;printf(<span class="code-string">"Hello, AllProLang User's!\\n"</span>);<br>
    &nbsp;<span class="code-keyword">return</span> <span class="code-number">0</span>;<br>
}`
            },
            {
                title: "Variables",
                code: `<span class="code-keyword">int</span> number = <span class="code-number">42</span>;
<span class="code-keyword">char</span> letter = <span class="code-string">'A'</span>;
<span class="code-keyword">float</span> decimal = <span class="code-number">3.14f</span>;
<span class="code-keyword">char</span> text[] = <span class="code-string">"Hello C"</span>;`
            },
            {
                title: "Pointers",
                code: `<span class="code-keyword">int</span> value = <span class="code-number">10</span>;
<span class="code-keyword">int</span> *ptr = &value;

printf(<span class="code-string">"Value: %d\\n"</span>, value);
printf(<span class="code-string">"Address: %p\\n"</span>, ptr);
printf(<span class="code-string">"Dereferenced: %d\\n"</span>, *ptr);`
            }
        ]
    },
    python: {
        title: "Python",
        description: "High-level, readable programming language perfect for beginners and experts",
        sections: [
            {
                title: "Hello Python",
                code: `print(<span class="code-string">"Hello, AllProLang User's !"</span>)`
            },
            {
                title: "Variables",
                code: `number = <span class="code-number">42</span>
text = <span class="code-string">"Hello AllProLang User's"</span>
is_true = <span class="code-keyword">True</span>
decimal = <span class="code-number">3.14</span>
my_list = [<span class="code-number">1</span>, <span class="code-number">2</span>, <span class="code-number">3</span>, <span class="code-number">4</span>]`
            },
            {
                title: "Control Structures",
                code: `<span class="code-comment"># If statement</span>
<span class="code-keyword">if</span> condition:
    <span class="code-comment"># code block</span>
<span class="code-keyword">else</span>:
    <span class="code-comment"># alternative block</span>

<span class="code-comment"># For loop</span>
<span class="code-keyword">for</span> i <span class="code-keyword">in</span> range(<span class="code-number">10</span>):
    print(i)`
            }
        ]
    },
    javascript: {
        title: "JavaScript",
        description: "Dynamic programming language that powers the modern web",
        sections: [
            {
                title: "Hello Javascript",
                code: `console.log(<span class="code-string">"Hello, AllProLang User's !"</span>);
<span class="code-comment">// Or in browser</span>
alert(<span class="code-string">"Hello, AllProLang User's!"</span>);`
            },
            {
                title: "Variables",
                code: `<span class="code-keyword">let</span> number = <span class="code-number">42</span>;
<span class="code-keyword">const</span> text = <span class="code-string">"Hello JavaScript"</span>;
<span class="code-keyword">var</span> isTrue = <span class="code-keyword">true</span>;
<span class="code-keyword">let</span> myArray = [<span class="code-number">1</span>, <span class="code-number">2</span>, <span class="code-number">3</span>, <span class="code-number">4</span>];`
            },
            {
                title: "Functions",
                code: `<span class="code-comment">// Function declaration</span>
<span class="code-keyword">function</span> greet(name) {
    <span class="code-keyword">return</span> <span class="code-string">"Hello, "</span> + name;
}

<span class="code-comment">// Arrow function</span>
<span class="code-keyword">const</span> add = (a, b) => a + b;`
            }
        ]
    },
    csharp: {
        title: "C#",
        description: "Modern, object-oriented programming language developed by Microsoft",
        sections: [
            {
                title: "Hello C#",
                code: `<span class="code-keyword">using</span> System;<br>

<span class="code-keyword">class</span> Program {<br>
    &nbsp;<span class="code-keyword">static void</span> Main() {<br>
       &nbsp;&nbsp; Console.WriteLine(<span class="code-string">"Hello, AllProLang User's!"</span>);<br>
    &nbsp;}
}`
            },
            {
                title: "Variables",
                code: `<span class="code-keyword">int</span> number = <span class="code-number">42</span>;
<span class="code-keyword">string</span> text = <span class="code-string">"Hello C#"</span>;
<span class="code-keyword">bool</span> isTrue = <span class="code-keyword">true</span>;
<span class="code-keyword">double</span> decimal = <span class="code-number">3.14</span>;`
            },
            {
                title: "Classes",
                code: `<span class="code-keyword">public class</span> Person {
    <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public int</span> Age { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    
    <span class="code-keyword">public void</span> Introduce() {
        Console.WriteLine(<span class="code-string">$"Hi, I'm {Name}"</span>);
    }
}`
            }
        ]
    }
};

function showSyntax(language) {
    // Remove active class from all cards
    document.querySelectorAll('.language-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Add active class to clicked card
    event.target.closest('.language-card').classList.add('active');
    
    const data = syntaxData[language];
    const displayDiv = document.getElementById('syntaxDisplay');
    
    let sectionsHTML = '';
    data.sections.forEach(section => {
        sectionsHTML += `
            <div class="code-section">
                <h3>${section.title}</h3>
                <div class="code-block">${section.code}</div>
            </div>
        `;
    });
    
    displayDiv.innerHTML = `
        <div class="syntax-header">
            <h2 class="syntax-title">${data.title}</h2>
            <p class="syntax-description">${data.description}</p>
        </div>
        ${sectionsHTML}
    `;
}