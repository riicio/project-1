</head>
<body>
    <header>
        <h1>Understanding Cookies</h1>
        <nav>
            <ul>
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#types" class="nav-link">Types of Cookies</a></li>
                <li><a href="#quiz" class="nav-link">Cookie Quiz</a></li>
                <li><a href="#browsers" class="nav-link">Browser Guide</a></li>
                <li><a href="#faq" class="nav-link">FAQ</a></li>
                <li><a href="#references" class="nav-link">References</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Home Page -->
        <section id="home" class="page active">
            <h2>Welcome to Our Comprehensive Guide on Web Cookies</h2>
            <p>This website provides detailed information about web cookies, their various types, management techniques, security considerations, and legal aspects. Whether you're a casual internet user or a web developer, you'll find valuable information here.</p>
            
            
            
            <div class="feature-box">
                <h3>Did You Know?</h3>
                <p>The term "cookie" in web browsers comes from "magic cookie," a concept in Unix programming representing a small piece of data passed between programs.</p>
            </div>
        </section>

        <!-- Types of Cookies Page -->
        <section id="types" class="page">
            <h2>Types of Web Cookies</h2>
            <p>Cookies come in several varieties, each serving different purposes in web browsing and user experience.</p>
            
            <table class="comparison-table">
                <tr>
                    <th>Cookie Type</th>
                    <th>Duration</th>
                    <th>Purpose</th>
                    <th>Security</th>
                </tr>
                <tr>
                    <td><strong>Session Cookies</strong></td>
                    <td>Temporary</td>
                    <td>Maintain user session state</td>
                    <td>Generally safe</td>
                </tr>
                <tr>
                    <td><strong>Persistent Cookies</strong></td>
                    <td>Days to years</td>
                    <td>Remember preferences/logins</td>
                    <td>Secure if properly implemented</td>
                </tr>
                <tr>
                    <td><strong>Secure Cookies</strong></td>
                    <td>Varies</td>
                    <td>HTTPS-only secure data</td>
                    <td>Very secure</td>
                </tr>
                <tr>
                    <td><strong>Third-Party Cookies</strong></td>
                    <td>Varies</td>
                    <td>Tracking/advertising</td>
                    <td>Privacy concerns</td>
                </tr>
                <tr>
                    <td><strong>Supercookies</strong></td>
                    <td>Persistent</td>
                    <td>Advanced tracking</td>
                    <td>High privacy risk</td>
                </tr>
            </table>
            
            
        </section>

        <!-- Browser Guide Page -->
        <section id="browsers" class="page">
            <h2>Browser-Specific Cookie Guides</h2>
            <p>Each browser handles cookies slightly differently. Here's how to manage them in popular browsers.</p>
            
            <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">
                <div class="card">
                    <h3>Google Chrome</h3>
                    <ol>
                        <li>Click the three-dot menu > Settings</li>
                        <li>Select "Privacy and security"</li>
                        <li>Choose "Cookies and other site data"</li>
                        <li>Adjust settings as needed</li>
                    </ol>
                </div>
                
                <div class="card">
                    <h3>Mozilla Firefox</h3>
                    <ol>
                        <li>Click the hamburger menu > Options</li>
                        <li>Select "Privacy & Security"</li>
                        <li>Scroll to "Cookies and Site Data"</li>
                        <li>Configure your preferences</li>
                    </ol>
                </div>
                
                <div class="card">
                    <h3>Apple Safari</h3>
                    <ol>
                        <li>Open Safari > Preferences</li>
                        <li>Go to the "Privacy" tab</li>
                        <li>Manage "Cookies and website data"</li>
                        <li>Set your preferred level of blocking</li>
                    </ol>
                </div>
            </div>
            
            
        </section>

        <!-- FAQ Page -->
        <section id="faq" class="page">
            <h2>Frequently Asked Questions</h2>
            
            <div class="card">
                <h3>Are cookies dangerous?</h3>
                <p>Cookies themselves are not dangerous - they're just text files. However, they can be used for tracking, and stolen cookies can be used to hijack sessions. Proper cookie management minimizes risks.</p>
            </div>
            
            <div class="card">
                <h3>Should I accept all cookies?</h3>
                <p>It's generally better to be selective. Accept only necessary cookies (for site functionality) and evaluate whether to accept others based on your privacy preferences.</p>
            </div>
            
            <div class="card">
                <h3>What's the difference between first-party and third-party cookies?</h3>
                <p>First-party cookies are set by the site you're visiting, while third-party cookies are set by other domains (usually advertisers or analytics services).</p>
            </div>
            
            <div class="card">
                <h3>Do I need to accept cookies to use websites?</h3>
                <p>For most sites, you need to accept necessary cookies for basic functionality, but you can often reject non-essential cookies (like those for tracking or advertising).</p>
            </div>
            
            <div class="card">
                <h3>How often should I clear my cookies?</h3>
                <p>This depends on your privacy needs. Monthly is reasonable for most users, while privacy-conscious users might clear them weekly or after each browsing session.</p>
            </div>
        </section>

        <!-- References Page -->
        <section id="references" class="page">
            <h2>References and Resources</h2>
            
            
            <div class="card">
                <h3>Additional Learning Resources</h3>
                <ul>
                    <li><a href="https://www.allaboutcookies.org/" target="_blank">All About Cookies</a></li>
                    <li><a href="https://web.dev/articles/samesite-cookies-explained" target="_blank">SameSite Cookies Explained</a></li>
                    <li><a href="https://cookiepedia.co.uk/" target="_blank">Cookiepedia</a></li>
                </ul>
            </div>
            
        
        </section>

<main>
        <section id="quiz" class="page active">
            <div class="quiz-container">
                <h2>Cookie Knowledge Quiz</h2>
                <p>Test your understanding of web cookies with this interactive quiz. After completing all questions, you'll receive a detailed score report.</p>
                
                <form id="cookieQuiz">
                    <!-- Question 1 - Multiple Choice (Single Answer) -->
                    <div class="question" id="q1">
                        <h3>1. What is the primary purpose of session cookies?</h3>
                        <div class="options">
                            <div class="option">
                                <input type="radio" id="q1a" name="q1" value="a">
                                <label for="q1a">To store user preferences permanently</label>
                            </div>
                            <div class="option">
                                <input type="radio" id="q1b" name="q1" value="b">
                                <label for="q1b">To maintain information during a single browsing session</label>
                            </div>
                            <div class="option">
                                <input type="radio" id="q1c" name="q1" value="c">
                                <label for="q1c">To track users across multiple websites</label>
                            </div>
                            <div class="option">
                                <input type="radio" id="q1d" name="q1" value="d">
                                <label for="q1d">To store encrypted user credentials</label>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Question 2 - Multiple Choice (Single Answer) -->
                    <div class="question" id="q2">
                        <h3>2. Which cookie attribute prevents JavaScript from accessing the cookie?</h3>
                        <div class="options">
                            <div class="option">
                                <input type="radio" id="q2a" name="q2" value="a">
                                <label for="q2a">Secure flag</label>
                            </div>
                            <div class="option">
                                <input type="radio" id="q2b" name="q2" value="b">
                                <label for="q2b">HttpOnly flag</label>
                            </div>
                            <div class="option">
                                <input type="radio" id="q2c" name="q2" value="c">
                                <label for="q2c">SameSite attribute</label>
                            </div>
                            <div class="option">
                                <input type="radio" id="q2d" name="q2" value="d">
                                <label for="q2d">Path attribute</label>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Question 3 - Multiple Choice (Single Answer) -->
                    <div class="question" id="q3">
                        <h3>3. Which regulation requires websites to obtain explicit consent for non-essential cookies?</h3>
                        <div class="options">
                            <div class="option">
                                <input type="radio" id="q3a" name="q3" value="a">
                                <label for="q3a">GDPR</label>
                            </div>
                            <div class="option">
                                <input type="radio" id="q3b" name="q3" value="b">
                                <label for="q3b">CCPA</label>
                            </div>
                            <div class="option">
                                <input type="radio" id="q3c" name="q3" value="c">
                                <label for="q3c">PIPEDA</label>
                            </div>
                            <div class="option">
                                <input type="radio" id="q3d" name="q3" value="d">
                                <label for="q3d">HIPAA</label>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Question 4 - Fill in the Blank -->
                    <div class="question" id="q4">
                        <h3>4. Complete this sentence: Cookies that remain on your device after closing the browser are called __________ cookies.</h3>
                        <div class="options">
                            <input type="text" id="q4answer" name="q4" placeholder="Type your answer here">
                        </div>
                    </div>
                    
                    <!-- Question 5 - Multiple Choice (Multiple Answers) -->
                    <div class="question" id="q5">
                        <h3>5. Which of the following are considered best practices for cookie security? (Select all that apply)</h3>
                        <div class="options">
                            <div class="option">
                                <input type="checkbox" id="q5a" name="q5" value="a">
                                <label for="q5a">Using the Secure flag for HTTPS-only transmission</label>
                            </div>
                            <div class="option">
                                <input type="checkbox" id="q5b" name="q5" value="b">
                                <label for="q5b">Implementing the HttpOnly flag</label>
                            </div>
                            <div class="option">
                                <input type="checkbox" id="q5c" name="q5" value="c">
                                <label for="q5c">Setting very long expiration times</label>
                            </div>
                            <div class="option">
                                <input type="checkbox" id="q5d" name="q5" value="d">
                                <label for="q5d">Using the SameSite attribute</label>
                            </div>
                        </div>
                    </div>
                    
                    <button type="button" id="submitQuiz">Submit Quiz</button>
                </form>
                
                <div id="results">
                    <h3>Quiz Results</h3>
                    <div class="final-score">Your score: <span id="score">0</span>/5</div>
                    <div class="final-result">Result: <span id="result">Fail</span></div>
                    
                    <div class="result-item" id="r1">
                        <p><strong>Question 1:</strong> What is the primary purpose of session cookies?</p>
                        <p>Your answer: <span class="user-answer"></span></p>
                        <p>Correct answer: To maintain information during a single browsing session</p>
                        <p class="result-explanation">Session cookies are temporary and only last for a single browsing session. They're commonly used for shopping carts or other temporary storage needs.</p>
                    </div>
                    
                    <div class="result-item" id="r2">
                        <p><strong>Question 2:</strong> Which cookie attribute prevents JavaScript from accessing the cookie?</p>
                        <p>Your answer: <span class="user-answer"></span></p>
                        <p>Correct answer: HttpOnly flag</p>
                        <p class="result-explanation">The HttpOnly flag is an important security measure that prevents client-side scripts from accessing the cookie, helping to prevent XSS attacks.</p>
                    </div>
                    
                    <div class="result-item" id="r3">
                        <p><strong>Question 3:</strong> Which regulation requires websites to obtain explicit consent for non-essential cookies?</p>
                        <p>Your answer: <span class="user-answer"></span></p>
                        <p>Correct answer: GDPR</p>
                        <p class="result-explanation">The General Data Protection Regulation (GDPR) requires explicit, informed consent for non-essential cookies used by websites serving EU users.</p>
                    </div>
                    
                    <div class="result-item" id="r4">
                        <p><strong>Question 4:</strong> Complete this sentence: Cookies that remain on your device after closing the browser are called __________ cookies.</p>
                        <p>Your answer: <span class="user-answer"></span></p>
                        <p>Correct answer: persistent</p>
                        <p class="result-explanation">Persistent cookies remain on your device until they expire or are manually deleted, unlike session cookies which disappear when you close the browser.</p>
                    </div>
                    
                    <div class="result-item" id="r5">
                        <p><strong>Question 5:</strong> Which of the following are considered best practices for cookie security?</p>
                        <p>Your answer: <span class="user-answer"></span></p>
                        <p>Correct answers: Using the Secure flag for HTTPS-only transmission, Implementing the HttpOnly flag, Using the SameSite attribute</p>
                        <p class="result-explanation">These three practices significantly improve cookie security. Long expiration times are generally not recommended as they increase the window of vulnerability if cookies are compromised.</p>
                    </div>
                    
                    <button type="button" id="retakeQuiz">Retake Quiz</button>
                </div>
            </div>
        </section>
    </main>

    <script>
        // Page navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Hide all pages
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                });
                
                // Show selected page
                const pageId = this.getAttribute('href').substring(1);
                document.getElementById(pageId).classList.add('active');
                
                // Update URL
                history.pushState(null, null, `#${pageId}`);
            });
        });
        
        // Show home page by default if no hash
        window.addEventListener('load', function() {
            if (!window.location.hash) {
                document.getElementById('home').classList.add('active');
            } else {
                const pageId = window.location.hash.substring(1);
                if (document.getElementById(pageId)) {
                    document.getElementById(pageId).classList.add('active');
                }
            }
        });
        
        // Handle back/forward navigation
        window.addEventListener('popstate', function() {
            const pageId = window.location.hash.substring(1);
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            if (pageId && document.getElementById(pageId)) {
                document.getElementById(pageId).classList.add('active');
            } else {
                document.getElementById('home').classList.add('active');
            }
        });
    </script>

    </script>
</html>