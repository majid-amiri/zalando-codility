<div id="standard_task_description" class="protected" style="height: 100%; overflow: auto; word-break: break-word;"><div class="task-description__TaskContentWrapper-sc-380ibo-1 gHbVUV task-description-content"><h2>Task description</h2>
<p>Your task is to implement a Web API that finds the best person for a job. The API should support the following requests:</p>
<ul>
<li>
<p><code>POST /candidates</code> – add a candidate to the database (kept in memory). The request body is JSON shaped, as follows:</p>
<pre><code class="language-json">{
  "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
  "name": "Jimmy Coder",
  "skills": [ "javascript", "es6", "nodejs", "express" ]
}
</code></pre>
<p>In the example above, the candidate has four skills.
The <code>Content-Type</code> header will be set to <code>application/json</code> in every such POST request.</p>
<p>The server should respond with a success code in the <strong>200–299</strong> range (for example, "200 OK" is fine). The response body is disregarded by the client and can be empty.</p>
</li>
<li>
<p><code>GET /candidates/search?skills=javascript,express,mongodb</code> – find and return the candidate that has <strong>the most skills from the given set</strong> (comma-separated). In this example, we request three skills. If a candidate possesses all of the listed skills (3 out of 3), or has more than the other candidates, then they are considered the best and should be returned. The response should have <code>Content-Type</code> set to <code>application/json</code> and the response body should be of the same shape as the request body for <code>POST /candidates</code>, that is:</p>
<pre><code class="language-json">{
  "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
  "name": "John Coder",
  "skills": [ "javascript", "es6", "nodejs", "express" ]
}
</code></pre>
<p>The HTTP response code must be <strong>200</strong> if a candidate is found with at least one matching skill, or <strong>404</strong> if no suitable candidates exist.</p>
</li>
<li>
<p>Added candidates should be kept in memory; no database/storage back-end is available.</p>
</li>
<li>
<p>Each <code>search</code> request should return the candidate with the best coverage of the requested skills – if five different skills are requested, then a candidate who has four of them is better than a candidate who has only three of them, and so on.</p>
</li>
<li>
<p>If two or more candidates have the same coverage (for example, both have seven out of ten requested skills), any of these candidates may be returned – additional skills (which were not requested) do not matter.</p>
</li>
<li>
<p>If no candidates match any skills, or no candidates exist at all, then the response must have an HTTP status code of <strong>404</strong>. The response body is not important in such cases.</p>
</li>
<li>
<p>If the request is invalid (has no body in the case of POST, or no <code>?skills=...</code> in GET) then status code <strong>400</strong> (Bad Request) must be returned.</p>
</li>
<li>
<p>HTTP <strong>5xx</strong> error codes are considered errors and must not be returned.</p>
</li>
</ul>
<h2>Input guarantees</h2>
<p>For simplicity, assume the following to be true:</p>
<ul>
<li>Each candidate has a unique <code>id</code> – the server will never receive two POSTs with the same <code>id</code>;</li>
<li><code>id</code> is any string from 1 to 100 characters;</li>
<li><code>name</code> is any string from 1 to 100 characters;</li>
<li><code>skills</code> is an array of strings from 1 to 100 characters, being letters, numbers or hyphens (<code>[a-zA-Z0-9-]+</code>), with a maximum of 10,000 elements); elements in the array or in query strings are not duplicated (there is no <code>[ "skill1", "skill2", "skill1" ]</code>).</li>
</ul>
<h2>Additional examples</h2>
<h3>Example 1</h3>
<p>With no candidates added, our request <code>GET /candidates/search?skills=javascript,react,typescript</code> should result in a 404 response code.</p>
<h3>Example 2</h3>
<p>If we add a candidate such as:</p>
<pre><code class="language-json">{
  "id": "person1",
  "name": "Amy Fish",
  "skills": [ "scala", "go" ]
}
</code></pre>
<p>then a search for <code>/candidates/search?skills=go,elixir,erlang</code> should return:</p>
<pre><code class="language-json">{
  "id": "person1",
  "name": "Amy Fish",
  "skills": [ "scala", "go" ]
}
</code></pre>
<h3>Example 3</h3>
<p>If we add two candidates:</p>
<ul>
<li><code>candidate1</code> with skills <code>[ "nodejs", "mongodb", "redis", "socketio" ]</code></li>
<li><code>candidate2</code> with skills <code>[ "nodejs", "express" ]</code></li>
</ul>
<p>then a search for skills <code>express,mongodb,redis</code> must return the data of <code>candidate1</code>, since they possess two skills from the list (<code>mongodb</code> and <code>redis</code>), while <code>candidate2</code> knows only <code>express</code> from the list.</p></div></div> 
